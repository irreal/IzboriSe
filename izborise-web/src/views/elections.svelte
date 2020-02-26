<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
  import { getContext } from "svelte";

  export let params;
  export let currentRoute;
  let electionId;
  console.log(currentRoute);
  electionId = currentRoute.queryParams.electionId;
</script>

<style>
  .chart div {
    font: 10px sans-serif;
    background-color: steelblue;
    text-align: right;
    padding: 3px;
    margin: 1px;
    color: white;
  }
</style>

{#if electionId}

  <Collection path={`elections/${electionId}/results`} let:data={results}>
    {#each results as result}
      <p>{result.electionName}</p>
      <div class="chart">
        {#each result.votes as stakeHolderVotes}
          <div
            style="width:{stakeHolderVotes.numberOfVotes / (result.totalVotes / 100)}%">
            {stakeHolderVotes.shortName} - {stakeHolderVotes.numberOfVotes}
          </div>
        {/each}
      </div>
    {/each}
  </Collection>
{:else}
  <p>Invalid election!</p>
{/if}
