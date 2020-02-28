<script>
  import { Collection } from "sveltefire";

  export let election;
  export let electionId;
</script>

<Collection path={`elections/${electionId}/voting_places`} let:data={results}>
  {#each results as result}
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{result.name}</p>
        <a href class="card-header-icon" aria-label="toggle collapse">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true" />
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">{result.address} i jos neki podaci</div>
      </div>
    </div>
  {/each}
</Collection>
