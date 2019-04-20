<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

      <div>
          <small>Raised</small>
          <md-button class="md-raised">Default</md-button>
          <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
          <md-button class="md-raised md-primary">Primary</md-button>
          <md-button class="md-raised md-accent">Accent</md-button>
          <md-button class="md-raised" disabled>Disabled</md-button>
      </div>

      <div>
          <div>
              <small>Regular</small>
              <md-button class="md-fab">
                  <md-icon>menu</md-icon>
              </md-button>
              <md-button class="md-fab md-primary">
                  <md-icon>add</md-icon>
              </md-button>
              <md-button class="md-fab md-plain">
                  <md-icon>edit</md-icon>
              </md-button>
          </div>

          <div>
              <small>Mini/Dense</small>
              <md-button class="md-fab md-mini">
                  <md-icon>menu</md-icon>
              </md-button>
              <md-button class="md-fab md-mini md-primary">
                  <md-icon>add</md-icon>
              </md-button>
              <md-button class="md-fab md-mini md-plain">
                  <md-icon>edit</md-icon>
              </md-button>
          </div>
      </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

small {
    display: block;
}
</style>
