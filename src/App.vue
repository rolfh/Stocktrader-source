<template>
	<div id="app">
		<div class="header">
			<router-link to="/" class="logo">
				<span class="icon">👑</span>
				<span class="name">
					<span class="first">Stock</span>
					<br />
					<span class="last">Trader</span>
				</span>
			</router-link>
			<span id="nav">
				<router-link :to="{ name: 'Stocks' }">🐄 Stocks</router-link>
				<span class="line">||</span>
				<router-link :to="{ name: 'Portfolio' }">💼 Portfolio</router-link>
			</span>
			<button @click="endDay">🎬 End day</button>
			<span class="dropdown" :class="{ open: toggleOpen }">
				<button @click="toggleOpen = !toggleOpen">
					🔥 Dropdown <span class="arrow">▾</span>
				</button>
				<ul>
					<li><button @click="save">💾 Save</button></li>
					<li><button @click="load">🪐 Load</button></li>
				</ul>
			</span>
			<span>💰 Funds: ${{ getFunds.toLocaleString() }} </span>
		</div>
		<transition name="fade" mode="out-in">
			<router-view :key="$route.path" class="content" />
		</transition>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters(['getFunds', 'getStocks']),
	},
	data: () => ({
		toggleOpen: false,
		endpoint: 'https://crudpi.io/31f660/stocktrader',
	}),
	methods: {
		endDay() {
			this.$store.dispatch('endDay')
		},
		save() {
			console.log('Saving...')
			var postData = {
				funds: this.getFunds,
				stocks: this.getStocks,
			}
			postData = JSON.stringify(postData)
			fetch(this.endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: postData,
			})
				.then((response) => {
					if (response.status == 200) {
						console.log('Saved...')
					}
				})
				.catch((error) => {
					console.warn(error)
				})
		},
		load() {
			console.log('Loading...')
			fetch(this.endpoint)
				.then((x) => x.json())
				.then((data) => {
					data = data[data.length - 1]
					this.$store.commit('setFunds', data.funds)
					this.$store.commit('setStocks', data.stocks)
				})
		},
	},
}
</script>

<style lang="less">
:root {
	--lightgrey: #efefef;
	--green: #42b983;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: flex-start;
	font-size: 18px;
}

* {
	box-sizing: border-box;
}

body {
	margin: 0;
	border: 20px solid var(--lightgrey);
	min-height: 100vh;
}

.header {
	background: var(--lightgrey);
	padding: 30px 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (min-width: 500px) {
		padding: 20px 0;
		flex-wrap: wrap;
	}
}

.logo {
	text-decoration: none;
	color: var(--green);
	font-weight: bold;
	&:visited {
		color: var(--green);
	}
	display: flex;
	font-size: 30px;
	.name {
		text-align: left;
		line-height: 1em;
	}
	.first {
		color: #057241;
	}
	.icon {
		font-size: 70px;
		margin-right: 15px;
		line-height: 0.8em;
	}
}

#nav {
	.line {
		color: grey;
	}
	a {
		text-decoration: none;
		font-weight: bold;
		color: #2c3e50;
		padding: 4px 15px;
		&.router-link-exact-active {
			color: var(--green);
		}
	}
}
button {
	padding: 5px 10px;
	display: inline-block;
	border-radius: 3px;
	border: none;
	background: transparent;
	cursor: pointer;
	font-size: 1em;
}
.dropdown {
	position: relative;
	.arrow {
		display: inline-block;
		transition: transform 0.2s ease-out;
		width: 15px;
		height: 15px;
		font-size: 1em;
		line-height: 0.75em;
	}
	ul {
		position: absolute;
		top: 100%;
		left: 0;
		list-style: none;
		background: white;
		border: 1px solid #d2d2d2;
		padding: 4px 0;
		margin: 0;
		button {
			display: block;
			width: 150px;
			text-align: left;
			font-size: 16px;
			border-radius: 0;
			&:hover {
				background-color: #ffea92;
			}
		}
	}
	&:not(.open) {
		ul {
			display: none;
		}
	}
	&.open {
		.arrow {
			transform: rotate(-180deg);
		}
	}
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.075s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
hr {
	border: none;
	border-top: 5px dashed #eff0f1;
	margin: 30px;
}

.key-cards {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 10px;
	list-style: none;
	margin: 0;
	padding: 20px;
}
.key-card {
	padding: 15px;
	background: #e3efe9;
	border-radius: 3px;
}
.content {
	padding: 15px;
}

.buy-btn {
	margin-top: 20px;
	background-color: #ffffff;
	border-radius: 92px;
	padding: 9px 30px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 4px;
	color: grey;
	transition: 0.2s ease-out;
	pointer-events: none;
	opacity: 0.7;
	cursor: not-allowed;
	&:hover {
		background: goldenrod;
		color: white;
		text-shadow: 0 2px 1px #7c5900;
		box-shadow: 0 5px 0px #daa5204a;
		transform: scale(1.05);
	}
	&.active {
		cursor: pointer;
		opacity: 1;
		pointer-events: auto;
	}
}
</style>
