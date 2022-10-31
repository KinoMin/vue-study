<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="keyWord" @keyup.enter="searchUsers"/>&nbsp;
			<button @click="searchUsers">Search</button>
		</div>
	</section>
</template>

<script>
	import axios from 'axios';
	export default {
		name:'Search',
		data() {
			return {
				keyWord:''
			}
		},
		methods: {
      searchUsers() {
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
						// this.$bus.$emit('updateListData', response.data.items);
						this.$bus.$emit('updateListData', {isLoding: false, errMsg: '', users: response.data.items})
          },
          error => {
            // console.log(error.message);
						this.$bus.$emit('updateListData', {isLoding: false, errMsg: error.message, users: []})
          }
        );
      }
		},
	}
</script>
