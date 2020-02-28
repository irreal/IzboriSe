<script>
  import { Collection } from "sveltefire";

  export let currentRoute;
</script>

<Collection
  path={`elections/${currentRoute.namedParams.electionId}/stakeholders`}
  let:data={results}>
  {#each results as result}
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{result.name}</p>
      </header>
      <div class="card-content">
        <div class="content">{result.shortName} i jos neki podaci</div>
      </div>
    </div>
  {/each}
</Collection>
