<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
  import { getContext } from "svelte";

  import Results from "./election/results.svelte";
  import VotingPlaces from "./election/votingPlaces.svelte";

  export let currentRoute;
  let electionId;
  console.log(currentRoute);
  electionId = "jM95Y7aZAkG6b92kE75s";

  let tab = (title, icon, component) => {
    return { title, icon, component };
  };
  let tabs = [
    tab("Rezultati", "", Results),
    tab("Biračka mesta", "", VotingPlaces),
    tab("Učesnici")
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
            <li class:is-active={activeTab == tab}>
              <a
                href
                on:click={() => {
                  activeTab = tab;
                }}>
                {tab.title}
              </a>
            </li>
          {/each}
        </ul>

      </div>
      {#if activeTab && activeTab.component}
        <svelte:component this={activeTab.component} {election} {electionId} />
      {:else}
        <p>No tab selected or no component</p>
      {/if}

    </div>
  </Doc>
{:else}
  <p>Invalid election!</p>
{/if}
