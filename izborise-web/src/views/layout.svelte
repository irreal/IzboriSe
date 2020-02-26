<script>
  import Header from "./header.svelte";
  import Footer from "./footer.svelte";
  import { Route } from "svelte-router-spa";
  export let currentRoute;
  export let params = {};
</script>

<!-- <style type="text/scss">
  div {
    p {
      background-color: green;
    }
  }
</style> -->

<div class="app Site">
  <Header />
  <main class="Site-content">
    <section class="section">
      <div class="container">
        <p>ovo je kao sadržaj</p>
        <button class="button is-primary">dugmence</button>
        <Route {currentRoute} {params} />
      </div>
    </section>
  </main>
  <Footer />
</div>
