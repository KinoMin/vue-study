<template>
  <div class="container">
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" >
      <a href="www.google.com" slot="footer">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="www.baidu.com">单机游戏</a>
        <a href="www.google.com">网络游戏</a>
      </div>
    </Category>
    <Category>
      <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" slot="center" controls></video>
      <div class="foot" slot="footer">
        <a href="https://www.google.com">经典</a>
        <a href="https://www.baidu.com">热门</a>
        <a href="https://www.biying.com">推荐</a>
      </div>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category';
export default {
  name: 'App',
  components: {
    Category
  },
  data () {
    return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
    }
  }
}
</script>

<style scoped>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>