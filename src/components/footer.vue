<template>
	<div class="footer">
		<div class="footer-top">
			<img src="../assets/footer/footerImg.png" alt="" />
			<ul>
				<li v-for="(val, index) in pageFooting.list" :key="index" @click="$router.push(val.url)">
					{{ val.name }}
				</li>
			</ul>
			<div>
				<i class="iconfont icon-wechat"></i>
				<i class="iconfont icon-xinlangweibo"></i>
				<i class="iconfont icon-douyin"></i>
				<i class="iconfont icon-bilibili-line"></i>
				<i class="iconfont icon-tengxunshipin"></i>
				<i class="iconfont icon-toutiao"></i>
			</div>
		</div>
		<div class="footer-middle"></div>
		<div class="footer-bottom">
			<ul>
				<li v-for="(val, index) in pageFooting.clauseList" :key="index" @click="$router.push(val.url)">
					{{ val.name }}
				</li>
			</ul>
			<p>Copyright©2022 robosen lnc.All rights reserved.</p>
		</div>
	</div>
</template>

<script setup lang="ts" name="footer">
import { reactive } from 'vue'

const pageFooting = reactive({
	list: [
		{
			name: '维修计划',
			url: '',
		},
		{
			name: '加入我们',
			url: '',
		},
		{
			name: '热门活动',
			url: '',
		},
		{
			name: '下载中心',
			url: '',
		},
		{
			name: 'PC软件',
			url: '',
		},
		{
			name: '使用说明',
			url: '',
		},
		{
			name: '社区',
			url: '',
		},
	],
	clauseList: [
		{
			name: '隐私条款',
			url: '',
		},
		{
			name: '使用条款',
			url: '',
		},
		{
			name: '法律服务',
			url: '',
		},
	],
})
</script>

<style lang="scss" scoped>
.footer {
	width: calc(100% - 6%);
	margin: 30px 3%;
	.footer-top {
		margin: 10px 0;
		display: flex;
		> img {
			flex: 0.1;
			width: 7.5%;
		}
		> ul {
			flex: 0.75;
			display: flex;
			line-height: 52px;
			height: 52px;
			text-align: center;
			> li {
				flex: 1;
				cursor: pointer;
			}
		}
		> div {
			flex: 0.15;
			line-height: 50px;
			text-align: right;
			> i {
				margin: 10px;
				font-size: 24px;
			}
		}
	}
	.footer-middle {
		margin: 10px 0;
		width: 100%;
		height: 5px;
		background: #666666;
	}
	.footer-bottom {
		margin-top: 30px;
		text-align: left;
		> ul {
			display: block;
			padding: 0;
			text-align: left;
			> li {
				display: inline-block;
				cursor: pointer;
				margin-right: 40px;
			}
		}
		> p {
			margin-top: 20px;
		}
	}
}
</style>
