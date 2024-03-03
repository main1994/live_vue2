<template>
  <div id="app">
    <HeaderTitle :name="name"></HeaderTitle>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderTitle from './components/HeaderTitle/HeaderTitle.vue'
export default {
  name: 'App',
  data() {
    return {
      name: this.$router.currentRoute.meta.name,
    }
  },
  components: {
    HeaderTitle
  },
}
</script>

<style>
body {
  overflow-y: hidden;
}
</style>