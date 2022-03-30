<template>
	<div class="productUseTutorial">
		<ul>
			<li
				v-for="(val, index) in IMG"
				:key="index"
				@click="clickPlay(index)"
				@mouseover="mouseOver(index)"
				@mouseleave="mouseLeave"
			>
				<img :src="getImageUrl(val.imgUrl)" alt="" />
				<div v-show="val.IfShadow">
					<el-icon v-if="val.IfPlay" class="productUseTutorial-play"><video-play /></el-icon>
					<el-icon v-else class="productUseTutorial-play"><video-pause /></el-icon>
				</div>
				<p>{{ val.text }}</p>
			</li>
		</ul>
		<div>
			<p>{{ IMG[mp4index].text }}</p>
			<video ref="VideoMV" autoplay muted controls @canplay="onCanplay">
				<source type="video/mp4" />
			</video>
		</div>
	</div>
</template>

<script setup lang="ts" name="productUseTutorial">
import { VideoPause, VideoPlay } from '@element-plus/icons'
import { useI18n } from 'vue-i18n'
import { onMounted, ref, defineProps, watch, getCurrentInstance } from 'vue'

interface Props {
	uid: string | number
}
const props = withDefaults(defineProps<Props>(), {
	uid: 0,
})
const getImageUrl = (name: string) => new URL(`../../../assets/${name}`, import.meta.url).href
const videoMp4 = ref(getImageUrl('productUseTutorialMp4/jcgn.mp4'))
const { tm, rt } = useI18n()
const IMG: any = tm('community.imgList')

const mp4index = ref(0)
const VideoMV = ref(null)
const time = ref()
watch(
	() => props.uid,
	(count, prevCount) => {
		if (count === 7) {
			;(VideoMV.value as any).load()
		} else {
			clearTimeout(time.value)
		}
	},
)
onMounted(() => {
	;(VideoMV.value as any).src = videoMp4.value
})
const mouseOver = (index: number) => {
	for (let i = 0; i < IMG.length; i += 1) {
		if (index !== i) {
			IMG[i].IfShadow = false
		}
	}
	IMG[index].IfShadow = true
	clearTimeout(time.value)
}
const mouseLeave = () => {
	for (let i = 0; i < IMG.length; i += 1) {
		IMG[i].IfShadow = false
	}
	time.value = setTimeout(() => {
		IMG[mp4index.value].IfShadow = true
	}, 2000)
}
const clickPlay = (index: number) => {
	for (let i = 0; i < IMG.length; i += 1) {
		if (index !== i) {
			IMG[i].IfPlay = true
		}
	}
	;(VideoMV.value as any).src = getImageUrl(IMG[index].mp4Url)
	mp4index.value = index
}
const onCanplay = () => {
	IMG[mp4index.value].IfPlay = false
	IMG[mp4index.value].IfShadow = true
}
</script>

<style lang="scss" scoped>
.productUseTutorial {
	> ul {
		min-height: 550px;
		margin-top: 10px;
		padding: 0;
		li:hover > div {
			transition: opacity 0.4s ease;
		}
		> li {
			float: left;
			margin: 0 30px 60px 0;
			width: 335px;
			height: 220px;
			position: relative;
			> img {
				width: 100%;
				height: 100%;
				border-radius: 2px 2px 2px 2px;
			}
			> p {
				margin-top: 5px;
				text-align: center;
			}
			> div {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				filter: Alpha(opacity=60);
				background: rgba(0, 0, 0, 0.6);
				cursor: pointer;
				border-radius: 5px;
				transition: opacity 0.3s ease;
				animation: fadeOutFromAll 0.3s ease-in-out;
				.productUseTutorial-play {
					font-size: 50px;
					color: #fff;
					margin: 25% calc(50% - 25px);
				}
			}
		}
		> li:nth-child(5n) {
			margin-right: 0;
		}
	}
	> div {
		> p {
			margin: 20px 0;
			font-weight: 900;
			font-size: 30px;
		}
		> video {
			display: inline-block;
			width: 100%;
			height: 700px;
			text-align: center;
			line-height: 100px;
			border: 1px solid rgba(0, 0, 0, 0.2);
			border-radius: 4px;
			overflow: hidden;
			background: #fff;
			position: relative;
			box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
			margin-right: 4px;
		}
		margin: 30px 0;
	}
}
</style>
