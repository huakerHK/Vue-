<template>
	<div>
			<div  class="row">
				<div class="col-lg-6 col-lg-offset-3" :class="bg_color">
					<div v-for='(box,index) in box' :key='index' :class="v_box_style">
						<img v-bind:src="box.src" alt="图片加载失败" :class="img">
						<p>名称：{{box.name}}</p>
						<p>作者：{{box.auther}}</p>
						<p><a href="" class="btn_style">查看</a></p>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
	export default{
		name:'prodction',
		data(){
			return{
				bg_color:'bg_color',
				v_box_style:'v_box_style',
				img:'img',
				btn_style:'btn_style',
				box:[
					{name:'登录窗体',src:'../img/01.jpeg',auther:'残刀'},
					{name:'登录窗体',src:'../img/02.jpeg',auther:'残刀'},
					{name:'登录窗体',src:'../img/03.jpeg',auther:'残刀'},
					{name:'登录窗体',src:'../img/04.jpeg',auther:'残刀'},
					{name:'登录窗体',src:'../img/05.jpeg',auther:'残刀'},
					{name:'登录窗体',src:'../img/06.jpeg',auther:'残刀'},
					{name:'登录窗体',src:'../img/07.jpeg',auther:'残刀'},
					{name:'登录窗体',src:'../img/08.jpeg',auther:'残刀'},
					{name:'登录窗体',src:'../img/09.jpeg',auther:'残刀'},
					{name:'登录窗体',src:'../img/woman-in-pool.jpg',auther:'残刀'},
					{name:'登录窗体',src:'../img/zhang-kaiyv-9X7TO7f8YFY-unsplash.jpg',auther:'残刀'},
					{name:'登录窗体',src:'../img/zhang-kaiyv-QONtMG2_ta8-unsplash.jpg',auther:'残刀'},
					{name:'登录窗体',src:'',auther:'残刀'},
					]
			}
		}
	}
</script>

<style scoped>
.bg_color{
	margin-top: 10px;
	padding: 10px;
	border-radius: 4px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	background:#FFFDFD;
}
.v_box_style{
	margin: 10px 10px;
	padding: 10px;
	border: 1px #ADADAD solid;
	border-radius: 10px;
	background-color: #f1f2f6;
}
.v_box_style:hover{
	background-color: #F1F2F6;
	box-shadow: 0px 0px 6px 2px #B9DEF0;
}
.img{
	width:180px;
	height: 200px;
}
.btn_style{
	border: 1px #ADADAD solid;
	text-decoration: none;
	color: #000000;
	padding: 4px 75px;
	border-radius: 10px;
	background:#FFFDFD;
}
.btn_style:hover{
	
	box-shadow: 0px 0px 6px 4px #B9DEF0 inset;
}
</style>
