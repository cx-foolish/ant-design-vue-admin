<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <SiderBar ref="siderBar" />
    <a-layout
      :style="{
        background: '#eaeaea'
      }"
    >
      <HeaderComponent />
      <Nav />
      <Container />
    </a-layout>
  </a-layout>
</template>
<script>
import SiderBar from '../specical/siderBar'
import HeaderComponent from '../specical/headerComponent'
import Container from '../specical/container'
import Nav from '../specical/nav'
export default {
  name: 'home',
  components: {
    SiderBar,
    HeaderComponent,
    Container,
    Nav
  },
  computed: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style>
#components-layout-demo-custom-trigger {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
