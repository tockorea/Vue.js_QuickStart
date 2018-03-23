<template>
  <div id="app">
    <regions-button></regions-button>
    <country-list></country-list>
  </div>
</template>

<script>
import RegionsButton from "./components/RegionsButton";
import CountryList from "./components/CountryList";

export default {
  name: "app",
  components: { RegionsButton, CountryList }
};
</script>