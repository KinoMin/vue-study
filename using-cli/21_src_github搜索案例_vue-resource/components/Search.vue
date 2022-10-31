<template>
  <div>
    <h3>Search Gtihub Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord" @keyup.enter="searchUsers">
      <button @click="searchUsers">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      keyWord: ''
    }
  },
  methods: {
    searchUsers() {
      this.$bus.$emit('updateListData', {isFirst:false, isLoding: true, users: []});
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          this.$bus.$emit('updateListData', {isFirst:false, isLoding: false, users: response.data.items})
        },
        error => {
          this.$bus.$emit('updateListData', {isFirst:false, isLoding: false, users:[], errMsg: error.message})
        }
      );
    }
  }
}
</script>

<style>

</style>