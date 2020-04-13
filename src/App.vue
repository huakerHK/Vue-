<template>
  <div id="app">
		<!-- 路由导航 -->
		<header class="header">
			<nav class="row">
			<div>
			</div>
			<div class="col-lg-1 col-lg-offset-2" >
				<h3>残刀博客网</h3>
			</div>
				<div class="col-lg-1" id="nav">
					<router-link to='/' class="nav">首页</router-link>
				</div>
				<div class="col-lg-1" >
					<router-link to='/'>技术分享</router-link>
				</div>
				<div class="col-lg-1" >
					<router-link to='/'>资源共享</router-link>
				</div>
				<div class="col-lg-1" >
					<router-link to='/production'>作品</router-link>
				</div>
				<div class="col-lg-1">
					<router-link to='/infes'>随笔</router-link>
				</div>
				<div class="col-lg-1">
					<router-link to='/about'>关于</router-link>
				</div>
			</nav>
		</header>
		<!-- 路由出口 -->
		<section><router-view></router-view></section>
		<booter />
  </div>
</template>

<script>
import booter from './components/booter.vue'
import axios from 'axios'
export default {
  name: 'app',
  components: {
		booter,
  },
created(){
	this.reqData();
},
  methods:{
	reqData(){
		axios.get('/components/js.json')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
	}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header{
			border: 2px solid #f5f5f5;
			background:#FFFDFD;
		}
.header div{
			line-height: 58px;
			text-align: center;
		}
.header div a{
			color: black;
			font-size: 20px;
		}
</style>
