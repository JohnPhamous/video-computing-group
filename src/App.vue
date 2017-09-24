<template>
  <div id="app" class="container inherit-height">
    <Header></Header>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>