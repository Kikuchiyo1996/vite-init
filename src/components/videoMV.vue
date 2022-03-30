<template>
	<div class="videoMV">
		<div class="videoMV-mv">
			<video controls>
				<source type="video/mp4" src="" />
			</video>
		</div>
		<div class="videoMV-user">
			<div></div>
			<div></div>
		</div>
		<div class="videoMV-on">
			<el-icon><close /></el-icon>
		</div>
	</div>
</template>

<script setup lang="ts" name="community">
import { Close } from '@element-plus/icons'
</script>

<style lang="scss" scoped>
:hover .videoMV-on {
	background-color: #9a9a9b;
}
.videoMV {
	display: flex;
	position: relative;
	top: 0.1px;
	left: 0;
	height: 100%;
	.videoMV-mv {
		height: 100%;
		flex: 0.79;
		> video {
			display: inline-block;
			width: calc(100% - 10px);
			height: calc(100% - 10px);
			text-align: center;
			line-height: 100px;
			border-radius: 4px;
			overflow: hidden;
			background: #fff;
			position: relative;
			margin: 5px;
		}
	}
	.videoMV-user {
		flex: 0.21;
		height: 100%;
		background-color: #222;
		padding: 30px 60px 0 40px;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.videoMV-on {
		width: 56px;
		height: 56px;
		line-height: 65px;
		position: absolute;
		top: 30px;
		left: 30px;
		border-radius: 100%;
		cursor: pointer;
		background-color: #6d6d6f;
		text-align: center;
		> i {
			color: #fff;
			font-weight: 100;
			font-size: 22px;
		}
	}
	.videoMV-on:hover {
		background-color: #9a9a9b;
	}
}
</style>
