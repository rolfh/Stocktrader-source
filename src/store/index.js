import Vue from 'vue'
import Vuex from 'vuex'
import * as stocks from './stocks.json'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		funds: 10000,
		stocks: stocks.default,
		portfolio: [{ name: '🍏 Apple', amount: 10 }],
	},
	getters: {
		getFunds(state) {
			return state.funds
		},
		getStocks(state) {
			return state.stocks
		},
		getPortfolio(state) {
			return state.portfolio
		},
	},
	mutations: {
		replaceStocks(state, newStocks) {
			state.stocks = newStocks
		},
		buyStock(state, { name, amount, price }) {
			var stockInPortfolio = state.portfolio.find((stock) => stock.name == name)
			if (stockInPortfolio) {
				stockInPortfolio.amount += amount
			} else {
				state.portfolio.push({ name: name, amount: amount })
			}
			state.funds -= price * amount
		},
		setStocks(state, payload) {
			state.stocks = payload
		},
		mutateFunds(state, payload) {
			state.funds += payload
		},
		setFunds(state, payload) {
			state.funds = payload
		},
		sellStock(state, { name, amount, price }) {
			state.portfolio.find((x) => x.name == name).amount -= amount
			state.funds += price
		},
	},
	actions: {
		endDay({ commit, getters }) {
			var updatedStocks = getters.getStocks.map((stock) => {
				stock.price = stock.price += getRandomArbitraryFromStockprice(
					stock.price
				)
				return stock
			})
			commit('replaceStocks', updatedStocks)
		},
	},
	modules: {},
})

function getRandomArbitraryFromStockprice(stockprice) {
	var min = stockprice * -0.1
	var max = stockprice * 0.1
	var result = Math.random() * (max - min) + min
	return Math.round((result + Number.EPSILON) * 100) / 100
}
