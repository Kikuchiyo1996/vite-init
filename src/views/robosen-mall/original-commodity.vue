<template>
	<div class="mall-home">
		<!-- 标题 -->
		<el-row>
			<h2>
				{{ $t('mall.original_title') }}
			</h2>
		</el-row>
		<!-- 商品内容 -->
		<el-row>
			<el-col v-for="commodity in commodityList" :key="commodity.image_url" class="" :span="8">
				<el-card class="commodity-card" shadow="hover" @mouseover="isCover = true">
					<h2>{{ commodity.title }}</h2>
					<!-- 图片 -->
					<div class="commodity-img-container">
						<img
							class="commodity-img"
							src="https://img14.360buyimg.com/n0/jfs/t1/179717/18/20140/246273/611e2305E6da63290/5933f1e5000960dc.jpg"
						/>
					</div>
					<!-- 底部 -->
					<div class="bottom">
						<p>
							robosen人车自动变形g1擎天柱汽车人智能机器人 现仅需
							<span class="eye-catching">{{ commodity.price }}</span>
							￥
							<router-link class="transition-btn pink-btn" to="/shopping-cart">
								{{ $t('mall.addStoreBtn') }}
							</router-link>
						</p>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts" name="mall-home">
import { useI18n } from 'vue-i18n'
import { ref, reactive } from 'vue'

import { getOriginalCommodityList } from '@/axios/api/robosen-mall'

const { tm, rt } = useI18n()

// ? 商品数据接口
interface commodityListType {
	page?: number
	limit?: number
	title: string
	description: string
	image_url: string
	price: number
}
// ? 获取商品数据
const commodityList: Array<commodityListType> = reactive([])
getOriginalCommodityList({ type: 'original' }).then((res) => {
	commodityList.push(...res.data.original_list)
})
// 控制是否显示详情
const isCover = ref(false)
</script>

<style lang="scss" scoped>
// 商品卡片
.commodity-card {
	border-radius: 10px;
	height: 400px;
	margin: 20px;
}
// 商品图片
.commodity-img-container {
	display: flex;
	justify-content: center;
	.commodity-img {
		width: 250px;
		height: 250px;
	}
}
// 底部
.bottom {
}
</style>
