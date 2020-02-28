<script>
  import { Collection } from "sveltefire";

  export let currentRoute;
</script>

<Collection
  path={`elections/${currentRoute.namedParams.electionId}/voting_places`}
  let:data={results}>
  {#each results as result}
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{result.name}</p>
      </header>
      <div class="card-content">
        <!-- <div class="content">{result.address} i jos neki podaci</div> -->
        <h2 class="subtitle">R Br. {result.index}</h2>
        <h3 class="subtitle is-small is-marginless">Adresa:</h3>
        <p>{result.address}</p>
        <p>{result.municipality}</p>
        <br />
        <h3 class="subtitle is-small is-marginless">Obuhvata područje:</h3>
        <p>{result.service_area}</p>
      </div>
    </div>
  {/each}
</Collection>
