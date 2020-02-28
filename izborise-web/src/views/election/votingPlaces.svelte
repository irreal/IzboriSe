<script>
  import { Collection } from "sveltefire";

  export let electionId;
  let collapsedPlaces = [];
</script>

<Collection path={`elections/${electionId}/voting_places`} let:data={results}>
  {#each results as result}
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{result.name}</p>
        <a
          href
          class="card-header-icon"
          aria-label="toggle collapse"
          on:click|preventDefault={() => {
            var index = collapsedPlaces.indexOf(result.name);
            if (index >= 0) {
              collapsedPlaces.splice(index, 1);
            } else {
              collapsedPlaces.push(result.name);
              collapsedPlaces = collapsedPlaces;
            }
          }}>
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true" />
          </span>
        </a>
      </header>
      {#if collapsedPlaces.indexOf(result.name) < 0}
        <div class="card-content">
          <div class="content">{result.address} i jos neki podaci</div>
        </div>
      {/if}
    </div>
  {/each}
  collapsed: {collapsedPlaces}
</Collection>
