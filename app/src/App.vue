<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <!--3，将组件写入页面-->
    <BottomNav></BottomNav>
  </div>
</template>

<script>
  //1,导入组件
  import BottomNav from './components/BottomNav.vue'
export default {
  name: 'app',
  //2,注册组件
  components:{
    BottomNav
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
</style>
