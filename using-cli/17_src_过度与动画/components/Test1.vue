<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="kino">
      <h1 v-show="isShow">hello vue</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test1',
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
  .kino-enter-active {
    animation: kino 0.5s linear;
  }
  .kino-leave-active {
    animation: kino 0.5s linear reverse;
  }
  @keyframes kino {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>