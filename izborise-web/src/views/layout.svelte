<script>
  import { Route } from "svelte-router-spa";
  import { onMount, onDestroy } from "svelte";
  import { writable } from "svelte/store";
  import d3 from "d3";
  export let currentRoute;
  export let params = {};

  var data = [{ v: 60, l: "PSG" }, { v: 10, l: "SNS" }];
  let el;

  var addBar = () => {
    data.push({ v: Math.round(Math.random() * 100), l: "NEKO TRECI" });
    data = data;
  };
  $: {
    d3.select(el)
      .selectAll("div")
      .data(data)
      .enter()
      .append("div")
      .style("width", function(d) {
        return d.v + "%";
      })
      .text(function(d) {
        return `${d.l} - ${d.v}`;
      });
  }
</script>

<style>
  .chart :global(div) {
    font: 10px sans-serif;
    background-color: steelblue;
    text-align: right;
    padding: 3px;
    margin: 1px;
    color: white;
  }
</style>

<div class="app">
  <p>Ovo je iz layouta</p>
  <div bind:this={el} class="chart" />
  <button on:click={addBar}>Add new bar</button>
  <section class="section">
    <Route {currentRoute} {params} />
  </section>
</div>
