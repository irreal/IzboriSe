<script>
  import { Route } from "svelte-router-spa";
  import { onMount } from "svelte";
  import Chartist from "../../bower_components/chartist/dist/chartist.min";
  import "../../bower_components/chartist/dist/chartist.min.css";
  export let currentRoute;
  export let params = {};

  var data = {
    labels: ["SNS", "PSG"],
    series: [5, 15]
  };

  onMount(() => {
    new Chartist.Pie(".ct-chart", data);
  });
</script>

<svelte:head>
  <style>
    .ct-series-a .ct-bar {
      /* Colour of your bars */
      stroke: green;
    }
  </style>
</svelte:head>

<div class="app">
  <p>Ovo je iz layouta</p>
  <div class="ct-chart ct-perfect-fourth" />
  <section class="section">
    <Route {currentRoute} {params} />
  </section>
</div>
