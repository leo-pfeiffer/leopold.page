<template>
  <div id="app">
    <vue-flashcard id="card">
    </vue-flashcard>
  </div>
</template>

<script>
import vueFlashcard from "@/components/flashcard";

export default {
  name: 'App',
  components: {
    vueFlashcard,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #42b983;
  width: 100%;
  height: 100%;
}

#card {
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

</style>
