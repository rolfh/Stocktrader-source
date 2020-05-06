<template>
	<div class="stock key-card" :class="{ lowFunds: !canBuy }">
		<h3 class="stock-name">{{ stock.name }}</h3>
		<p class="stock-price">
			<span class="dollar">$</span>{{ stock.price.toLocaleString() }}

			<span class="stock-calc" v-show="amount > 0">
				* {{ amount }} = <span class="dollar">$</span
				>{{ (stock.price * amount).toLocaleString() }}
			</span>
		</p>
		<div class="amount-basket">
			<button
				:class="{
					active: amount == 0,
					buyable: true,
				}"
				@click="amount = 0"
				v-text="0"
			></button>
			<button
				v-for="possible in possibleAmount"
				:key="possible"
				:class="{
					active: amount == possible,
					buyable: possible * stock.price <= getFunds,
				}"
				@click="amount = possible"
				v-text="possible"
			></button>
		</div>
		<button @click="buy" class="buy-btn" :class="{ active: amount > 0 }">
			💸Buy
		</button>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters(['getFunds']),
		canBuy() {
			return this.getFunds >= this.stock.price * this.amount
		},
	},
	data: () => ({
		amount: 0,
		possibleAmount: 50,
	}),
	props: {
		stock: { type: Object, required: true },
	},
	methods: {
		buy() {
			if (!this.canBuy) {
				console.warn('Low funds!')
				return
			}
			this.$store.commit('buyStock', {
				name: this.stock.name,
				price: this.stock.price,
				amount: this.amount,
			})
			this.amount = 0
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3.stock-name {
	margin: 20px 0 0;
}
p.stock-price {
	span.dollar {
		color: rgba(0, 0, 0, 0.8);
		font-size: 0.8em;
		margin-right: 0.3em;
	}
}
.amount-basket {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(25px, 1fr));
	background-color: white;
	border-radius: 10px;
	button {
		font-family: 'SF Mono', monospace;
		font-size: 15px;
		padding: 6px 3px;
		line-height: 0.8em;
		border-radius: 0;
		color: grey;
		&.buyable {
			color: black;
		}
		&.active {
			font-weight: bold;
			background: #057241;
			color: white;
			border-radius: 36px;
		}
		&:focus {
			z-index: 2;
			outline: none;
		}
	}
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
