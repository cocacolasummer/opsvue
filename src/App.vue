<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
*{margin:0;padding:0;}
html,body,#app,.wrapper{
    width:100%;
    height:100%;
    overflow: hidden;
    color: #393939;
}
body{
    font-family:"Helvetica Neue",Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
}
a{text-decoration: none}
</style>
