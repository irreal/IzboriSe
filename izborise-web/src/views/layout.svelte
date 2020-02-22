<script>
  import { Route } from "svelte-router-spa";
  import { onMount } from "svelte";
  export let currentRoute;
  export let params = {};
</script>

<div class="app">
  <p>Ovo je iz layouta</p>
  <section class="section">
    <Route {currentRoute} {params} />
  </section>
</div>
