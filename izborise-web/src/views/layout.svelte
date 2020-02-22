<script>
  import { Route } from "svelte-router-spa";
  export let currentRoute;
  const params = {};
</script>

<div class="app">
  <p>Ovo je iz layouta</p>
  <section class="section">
    <Route {currentRoute} {params} />
  </section>
</div>
