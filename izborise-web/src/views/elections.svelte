<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
  import { getContext } from "svelte";
  import { Route, Navigate } from "svelte-router-spa";

  export let currentRoute;
  export let params = {};

  let electionId;
  console.log(currentRoute);
  electionId = currentRoute.namedParams.electionId;

  let tab = (title, icon, routeName) => {
    return { title, icon, routeName };
  };
  let tabs = [
    tab("Rezultati", "", "results"),
    tab("Biračka mesta", "", "votingplaces"),
    tab("Učesnici", "", "stakeholders")
  ];
  let activeTab = tabs[0];
</script>

{#if electionId}
  <Doc path={`elections/${electionId}`} let:data={election}>
    <h1 class="title">{election.name}</h1>
    <div class="box">
      <div class="tabs is-boxed is-medium">
        <ul>
          {#each tabs as tab}
            <li
              class:is-active={currentRoute.childRoute && currentRoute.childRoute.name.endsWith(tab.routeName)}>
              <!-- <a href={tab.routeName}>{tab.title}</a> -->
              <Navigate to="/election/{electionId}/{tab.routeName}">
                {tab.title}
              </Navigate>
            </li>
          {/each}
        </ul>

      </div>
      <Route {currentRoute} {params} />
    </div>
  </Doc>
{:else}
  <p>Invalid election!</p>
{/if}
