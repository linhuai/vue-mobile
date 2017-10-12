<template>
	<header class="header">
		<div class="w">
			<div class="logo"></div>
		</div>
		<nav class="nav">
			<ul>
				<li><router-link to="/">首页</router-link></li>
				<li><router-link to="/about">公司简介</router-link></li>
				<li><router-link to="/product">产品展示</router-link></li>
				<li><router-link to="/news">新闻动态</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<style lang="less" scoped>
.header{
	position: fixed;
	width: 10rem;
	height: 2.3rem;
	box-shadow: 2px 2px #ccc;
	background-color: #fff;
	z-index: 9999;

	.logo{
		height: 1.5rem;
		background: url(../assets/images/logo.png) no-repeat center left;
		background-size: auto 60%;
	}

}
.nav{
	height: 0.8rem;
	line-height: 0.8rem;
	background-color: #333;

	ul{
		overflow: hidden;
	}
	li{
		width: 20%;
		float: left;
		a{
			display: block;
			color: #fff;
			text-align: center;
		}
	}
}
</style>