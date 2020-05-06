<template>
	<div class="portfolio">
		<h1>💼 Portfolio</h1>
		<div class="key-cards">
			<PortfolioStock
				v-for="stock in getPortfolio"
				:stock="stock"
				:key="stock.name"
				v-show="stock.amount > 0"
			/>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import PortfolioStock from '../components/PortfolioStock'

export default {
	computed: {
		...mapGetters(['getPortfolio']),
	},
	components: { PortfolioStock },
}
</script>
