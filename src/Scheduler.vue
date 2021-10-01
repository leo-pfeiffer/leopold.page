<template>
  <div id="app">
    <vue-calendly id="scheduler" url="https://calendly.com/leo-pfeiffer?hide_gdpr_banner=1" :height="600">
    </vue-calendly>
  </div>
</template>

<script>

export default {
  name: 'Scheduler',
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

#scheduler {
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 620px;
  max-width: 90vw;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  border-radius: 10px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
  padding: 10px;
  text-align: center;
}

</style>
