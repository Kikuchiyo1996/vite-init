<template>
	<div class="community">
		<div class="community-content">
			<el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
				<el-tab-pane :label="$t('community.communityTabs.ProductUseTutorial')" name="ProductUseTutorial">
					<ProductUseTutorial :uid="uid" />
				</el-tab-pane>
				<el-tab-pane :label="$t('community.communityTabs.communityActivity')" name="communityActivity">
					<CommunityActivity :uid="uid" />
				</el-tab-pane>
				<el-tab-pane :label="$t('community.communityTabs.course')" name="course">
					<Course />
				</el-tab-pane>
				<el-tab-pane :label="$t('community.communityTabs.TheUserWorks')" name="TheUserWorks">
					<TheUserWorks />
				</el-tab-pane>
				<el-tab-pane :label="$t('community.communityTabs.ForGoods')" name="ForGoods">
					<ForGoods />
				</el-tab-pane>
			</el-tabs>
		</div>
		<div class="community-operation">
			<el-icon class="community-operation-icon" :size="45" @click="ifUserList = !ifUserList">
				<user-filled />
			</el-icon>
			<el-icon class="community-operation-icon" :size="45">
				<circle-plus-filled />
			</el-icon>
			<ul v-show="ifUserList">
				<li
					v-for="(val, index) in userList"
					:key="index"
					:class="val.clickColor ? 'clickColor' : ''"
					@click="clickUserList(index)"
				>
					{{ val.name }}
				</li>
			</ul>
		</div>
		<Footer />
	</div>
</template>
<script setup lang="ts" name="community">
import { reactive, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { UserFilled, CirclePlusFilled } from '@element-plus/icons'
import Footer from '../../components/footer.vue'
import ProductUseTutorial from './subpage/productUseTutorial.vue'
import CommunityActivity from './subpage/communityActivity.vue'
import Course from './subpage/course.vue'
import TheUserWorks from './subpage/theUserWorks.vue'
import ForGoods from './subpage/forGoods.vue'

const activeName = ref('ProductUseTutorial')
const ifUserList = ref(false)
const uid = ref()
const handleClick = (tab: TabsPaneContext, event: Event) => {
	// console.log(tab.uid, event)
	uid.value = tab.uid
	console.log(uid.value)
}
const { tm, rt } = useI18n()
const userList: any = tm('community.communityUserList')

const clickUserList = (index: number) => {
	for (let i = 0; i < userList.length; i += 1) {
		console.log(userList)
		userList[i].clickColor = false
	}
	userList[index].clickColor = true
}
</script>
<style lang="scss" scoped>
@import '//at.alicdn.com/t/font_3270499_4techzfjvqm.css';
.community {
	width: 100%;
	.community-content {
		margin: 0 3%;
	}
	.community-operation {
		position: fixed;
		right: 100px;
		top: 40%;
		z-index: 9999;
		.community-operation-icon {
			cursor: pointer;
			margin: 30px 0;
			display: block;
			color: #666;
		}
		> ul {
			position: fixed;
			right: 190px;
			top: 29%;
			border: 1px solid #666;
			width: 190px;
			height: 290px;
			text-align: left;
			padding: 0;
			background: #fff;
			> li {
				padding: 0 15px;
				height: 30px;
				line-height: 30px;
				cursor: pointer;
			}
			.clickColor {
				background: #41c7db;
			}
		}
	}
}
</style>
