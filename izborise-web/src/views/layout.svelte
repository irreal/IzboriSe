<script>
  import { Route } from "svelte-router-spa";
  import d3 from "d3";
  export let currentRoute;
  export let params = {};
</script>

<style type="text/scss">
  div {
    p {
      background-color: green;
    }
  }
</style>

<div class="app">
  <p>Ovo je iz layouta</p>
  <section class="section">
    <Route {currentRoute} {params} />
  </section>
</div>
