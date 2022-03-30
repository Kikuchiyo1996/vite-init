<template>
	<div class="communityActivity">
		<div class="communityActivity-top">
			<el-carousel indicator-position="outside" loop height="500px" type="card">
				<el-carousel-item v-for="(item, index) in slideshow" :key="index">
					<img :src="getImageUrl(item.imgUrl)" alt="" />
				</el-carousel-item>
			</el-carousel>
		</div>
		<h3>社区视频</h3>
		<ul>
			<li
				v-for="(val, index) in ActivityIMG"
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
		<div class="communityActivity-play">
			<VideoMV />
		</div>
	</div>
</template>

<script setup lang="ts" name="communityActivity">
import { VideoPause, VideoPlay } from '@element-plus/icons'
import { useI18n } from 'vue-i18n'
import { watch, defineProps } from 'vue'
import VideoMV from '../../../components/videoMV.vue'

const { tm } = useI18n()
const slideshow: any = tm('community.communityActivityImg')
const ActivityIMG: any = tm('community.imgList')
const getImageUrl = (name: string) => new URL(`../../../assets/${name}`, import.meta.url).href
interface Props {
	uid: string | number
}
const props = withDefaults(defineProps<Props>(), {
	uid: 0,
})
watch(
	() => props.uid,
	(count, prevCount) => {
		if (count === 29) {
			ActivityIMG[0].IfPlay = true
			ActivityIMG[0].IfShadow = false
		}
	},
)
const mouseOver = (index: number) => {
	for (let i = 0; i < ActivityIMG.length; i += 1) {
		if (index !== i) {
			ActivityIMG[i].IfShadow = false
		}
	}
	ActivityIMG[index].IfShadow = true
}
const mouseLeave = () => {
	for (let i = 0; i < ActivityIMG.length; i += 1) {
		ActivityIMG[i].IfShadow = false
	}
}
const clickPlay = (index: number) => {
	for (let i = 0; i < ActivityIMG.length; i += 1) {
		if (index !== i) {
			ActivityIMG[i].IfPlay = true
		}
	}
}
</script>
<style lang="scss" scoped>
.communityActivity {
	h3 {
		margin: 20px 0;
	}
	.communityActivity-top {
		margin: 30px 0;
		img {
			width: 100%;
			height: 500px;
		}
	}
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
	.communityActivity-play {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #48474c;
		z-index: 99999;
	}
}
</style>
