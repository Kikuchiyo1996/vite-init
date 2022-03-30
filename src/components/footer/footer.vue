<template>
	<div class="footerWrap">
		<div class="footer_nav">
			<div class="left">
				<img src="@/assets/home_Images/logo.png" @click="router.push('/')" />
				<ul class="navList">
					<li
						v-for="(item, index) in footerList"
						:key="index"
						:class="{ active: activeIndex == index }"
						@click="activeIndex = index"
					>
						{{ item.title }}
					</li>
				</ul>
			</div>

			<ul class="right">
				<li v-for="item in mediaList" :key="item.imageUrl">
					<img :src="item.imageUrl" />
				</li>
			</ul>
		</div>
		<div class="footer_terms">
			<ul class="terms">
				<li v-for="(item, index) in footerTerms" :key="index">{{ item.title }}</li>
			</ul>
			<div class="termsTheAgreement">Copyright©2022 robosen lnc.All rights reserved</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="Footer">
import wechat from '@/assets/home_Images/微信.svg'
import weibo from '@/assets/home_Images/微博.svg'
import trill from '@/assets/home_Images/抖音.svg'
import bStation from '@/assets/home_Images/哔哩哔哩.svg'
import tencentVideo from '@/assets/home_Images/腾讯视频.svg'
import toutiao from '@/assets/home_Images/头条.svg'
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import type { FooterList, FooterTerms } from '@/lang/home/types'

interface MediaList {
	imageUrl: string
	linkAddress?: string
}

const { tm } = useI18n()
const router = useRouter()
const activeIndex = ref<number>()
const footerList = computed(() => reactive(tm('home.footerList') as Array<FooterList>))
const footerTerms = computed(() => reactive(tm('home.footerTerms') as Array<FooterTerms>))
const mediaList: Array<MediaList> = reactive([
	{ imageUrl: wechat, linkAddress: '' },
	{ imageUrl: weibo, linkAddress: '' },
	{ imageUrl: trill, linkAddress: '' },
	{ imageUrl: bStation, linkAddress: '' },
	{ imageUrl: tencentVideo, linkAddress: '' },
	{ imageUrl: toutiao, linkAddress: '' },
])
</script>

<style lang="scss" scoped>
.footerWrap {
	width: 100%;
	background-color: #000;
	color: #fff;
	margin: 0 auto;
	padding: 20px 50px;
	.footer_nav {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 65px;
		align-items: center;
		border-bottom: 2px solid #fff;

		.left {
			display: flex;
			align-items: center;
			img {
				cursor: pointer;
				width: 125px;
				height: 38px;
				margin-right: 1vw;
			}
			height: 100%;
			.navList {
				box-sizing: border-box;
				padding: 10px 0;
				height: 100%;
				display: flex;
				align-items: center;

				li {
					display: flex;
					align-items: center;
					height: 100%;
					transition: all 0.3s;
					cursor: pointer;
					box-sizing: border-box;
					padding: 0 1.5vw;
					border-radius: 5px;
					&:hover {
						color: rgba(193, 197, 201, 0.726);
					}
				}

				// .active {
				// 	background-color: rgba(132, 134, 136, 0.726);
				// }
			}
		}
		.right {
			display: flex;
			align-items: center;
			height: 100%;
			li {
				display: flex;
				align-items: center;
				padding: 0 12px;
				&:last-child {
					padding-right: 0;
				}
				img {
					cursor: pointer;
					width: 18px;
					height: 18px;
				}
			}
		}
	}
	.footer_terms {
		margin-top: 10px;
		width: 100%;
		height: 100px;
		.terms {
			box-sizing: border-box;
			padding: 10px 0;
			height: 50px;
			display: flex;
			align-items: center;
			li {
				display: flex;
				align-items: center;
				height: 100%;
				transition: all 0.3s;
				cursor: pointer;
				box-sizing: border-box;
				padding: 0 1vw;
				border-radius: 5px;
				&:first-child {
					padding-left: 0;
				}
			}
		}
		.termsTheAgreement {
			width: 100%;
			line-height: 50px;
		}
	}
}
</style>
