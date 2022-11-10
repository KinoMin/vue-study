<template>
  <div>
    <h1>我是 Home 的内容</h1>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link active-class="active" class="list-group-item" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link active-class="active" class="list-group-item" to="/home/message">Message</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>