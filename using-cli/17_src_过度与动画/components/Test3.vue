<!-- 使用第三方动画组件 npm install animate.css --save && yarn add animate.css -->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group 
        appear
        name="animate__animated animate__bounce" 
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
        >
      <h1 v-show="isShow" key="1">hello</h1>
      <h1 v-show="!isShow" key="2">vue</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'Test3',
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style>
  h1 {
    background: orange;
  }

</style>