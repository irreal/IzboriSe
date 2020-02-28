<script>
  import { Collection } from "sveltefire";

  export let election;
  export let electionId;
</script>

<style>
  .chart div {
    font: 18px sans-serif;
    background-color: steelblue;
    text-align: right;
    padding: 3px;
    margin: 1px;
    color: white;
  }
</style>

<Collection path={`elections/${electionId}/results`} let:data={results}>
  {#each results as result}
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
