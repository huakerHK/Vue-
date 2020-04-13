<template>
  <div>
    <section class="main-content" id="show-main">
<div class="row">
<div class="col-lg-4 col-md-4 col-lg-offset-3 col-md-offset-3">
	<div :class="style" v-for='(article,index) in article' :key='index'>
		<h2><a href="" :class="btn_tittle_color">{{article.tittle}}</a></h2>
		<div>
			<p>作者：<a href="" :class="auther_color">{{article.auther}}</a>&nbsp;&nbsp;时间：{{article.date}}</p>
		</div>
		<div :class="main_info">
			<p>{{article.info}}</p>
		</div>
		<div class="read">
			<p><a href="" class="btn btn-default">阅读全文</a></p>
		</div>
	</div>
</div>

<aside class="col-md-2 sidebar">
    <div class="widget">
<h4 class="title">公告</h4>
<div class="content community">
<div>本站主要有以下内容</div>
<p>
<a href="" class="btn" v-for='(aside_course,index) in aside_course' :key='index' :class="btn_tittle_color">{{aside_course.course}}</a>
</p>
</div>
    </div>
    </aside>
</div>
<p>
<ul class="pager">
<li><a href="">上一页</a></li>
<li><a href="">下一页</a></li>
</ul>
</p>
</section>
  </div>
</template>

<script>
export default{
		name:'home',
		data(){
			return{
				style:'style',
				btn_tittle_color:'btn_tittle_color',
				auther_color:'btn_tittle_color',
				main_info:'main_info',
				article:[
					{tittle:'ListView',auther:'残刀',date:'2020.2.08',info:'ListView的创建需要3个元素'},
					{tittle:'ListView',auther:'残刀',date:'2020.2.08',info:'ListView的创建需要3个元素'},
					{tittle:'ListView',auther:'残刀',date:'2020.2.08',info:'ListView的创建需要3个元素'},
					{tittle:'ListView',auther:'残刀',date:'2020.2.08',info:'ListView的创建需要3个元素'},
					{tittle:'ListView',auther:'残刀',date:'2020.2.08',info:'ListView的创建需要3个元素'},
					{tittle:'ListView',auther:'残刀',date:'2020.2.08',info:'ListView的创建需要3个元素'},
					{tittle:'ListView',auther:'残刀',date:'2020.2.08',info:'ListView的创建需要3个元素'},
				],
				aside_course:[
					{course:'Android'},
					{course:'html/css'},
					{course:'Vue.js'},
					{course:'JAVA'},
					{course:'C#/C++'},
					{course:'Android'},
					{course:'html/css'},
					{course:'Android'},
					{course:'html/css'}
				]
			}
		}
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.style{
	border-radius: 4px;
	color: #000000;
	background:#FFFDFD;
	margin: 10px auto;
}
.style:hover{
	box-shadow:1px 1px 6px 2px #FFFDFD ;
}
.btn_tittle_color{
		color: #000000;
	}
.main_info{
	height: 200px;
}
.sidebar{
	border-radius: 4px;
	background:#FFFDFD;
	margin-top: 20px;
}
</style>
