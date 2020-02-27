<script>
  import Header from "./header.svelte";
  import Footer from "./footer.svelte";
  import { Route } from "svelte-router-spa";
  export let currentRoute;
  export let params = {};
</script>

<div class="app Site">
  <Header />
  <main class="Site-content">
    <section class="section">
      <div class="container">
        <Route {currentRoute} {params} />
      </div>
    </section>
  </main>
  <Footer />
</div>
