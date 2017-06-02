<template lang="html">
  <ul v-show="show" class="menu-ismenu">
    <li v-for="item in menuItem"><router-link :to="item.to">{{item.label}}</router-link></li>
  </ul>
</template>

<script>
export default {
  props: {
    menuItem:{
      type: Array,
      default:[]
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
.menu-ismenu{
  position: absolute;
  width:100%;
  height:2rem;
  background-color: #000;
  opacity: 0.5;
  color: #fff;
  text-align: center;
  z-index:100;
  li{
      height:.6rem;
      line-height:.6rem;
  }
}
</style>
