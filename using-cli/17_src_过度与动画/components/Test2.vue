<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear: 渲染完成就加载进入事件 -->
    <transition-group name="kino" appear>
      <h1 key="1" v-show="isShow">hello</h1>
      <h1 key="2" v-show="!isShow">vue</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
  h1 {
    background: orange;
  }
  /** 进入的起点, 离开的终点 */
  .kino-enter, .kino-leave-to {
    transform: translateX(-100%);
  }
  /** 进入的终点，离开的起点 */
  .kino.enter-to, .kino-leave {
    transform: translateX(0px);
  }
  .kino-enter-active, kino.leave-active {
    transition: 0.5s, linear;
  }
</style>