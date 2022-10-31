<template>
  <div class="container">
    <!-- <Category title="美食" :infos="foods"/>
    <Category title="游戏" :infos="games"/>
    <Category title="电影" :infos="films"/> -->

    <!-- 使用插槽 -->
		<Category title="美食" >
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
		</Category>
    <Category title="游戏">
      <ul>
        <li v-for="(info, index) in games" :key="index">{{ info }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category';
export default {
  name: 'App',
  data () {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排', '猪脚'],
      games: ['game1', 'game2', 'game3', 'game4'],
      films: ['《film1》','《film2》','《film3》','《film4》']
    }
  },
  components: {
    Category
  }
}
</script>

<style scoped>
	.container{
		display: flex;
		justify-content: space-around;
	}
</style>
