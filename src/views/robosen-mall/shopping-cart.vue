<template>
	<div class="cart">
		<!-- 标题 -->
		<el-row>
			<h2>
				{{ $t('mall.shopping_cart_title') }}
			</h2>
			<el-alert center>
				<slot name="title">
					<span class="cart-tips">
						<el-icon color="red">
							<document-copy />
						</el-icon>
						Pay $83.25/mo.per month at 0% APR for eligible items in your order with Apple Card Monthly Installments.◊
					</span>
				</slot>
			</el-alert>
		</el-row>
	</div>
</template>

<script setup lang="ts" name="cart">
import { DocumentCopy } from '@element-plus/icons-vue'

import { ref, reactive } from 'vue'
</script>

<style lang="scss" scoped>
.cart-tips {
	color: black;
}
</style>
