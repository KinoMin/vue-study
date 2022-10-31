<template>
  <!-- <div class="category">
    <h3>{{ title }}分类</h3>
    <ul 
      v-for="info in infos"
      >
      <li>{{ info }}</li>
    </ul>
  </div> -->

  <!-- 使用插槽 -->
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot>我是一个默认值, 当没有传递具体结构时, 才会出现</slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['infos', 'title']
}
</script>

<style scoped>
	.category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>