<template>
	<div class="stocks">
		<h1>🐄 Stocks</h1>
		<ul class="key-cards">
			<Stock
				v-for="stock in getStocks"
				:key="stock.name"
				:stock="stock"
				:isBuyable="true"
			>
			</Stock>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Stock from '../components/Stock'

export default {
	computed: {
		...mapGetters(['getStocks']),
	},
	components: {
		Stock,
	},
}
</script>

<style lang="less">
input[type='number'] {
	padding: 3px 10px;
	font-size: 18px;
	width: 9ch;
}
</style>
