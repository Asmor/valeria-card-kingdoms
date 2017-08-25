<script>
"use strict";

import card from "./components/card.vue";
import { getCardSet, cardData } from "./randomizer.js";

let setStorageKey = "the-duke:sets";
const setNames = {
	base: "Base",
	exp02: "Undead Samurai",
	exp04: "Peasants and Knights",
	flamesAndFrost: "Flames and Frost",
};
let setFilters = JSON.parse(window.localStorage[setStorageKey] || "{}");
Object.keys(setNames).forEach(key => {
	if ( !setFilters.hasOwnProperty(key) ) { setFilters[key] = true }
});

export default {
	name: "app",
	data () {
		return {
			cards: getCardSet(setFilters),
			cardData,
			setFilters,
			setNames,
			setKeys: Object.keys(setNames).sort((a, b) => setNames[a] > setNames[b]),
		};
	},
	methods: {
		randomize: function () {
			this.cards = getCardSet( this.setFilters );
		},
		saveFilters: function (key) {
			window.localStorage[setStorageKey] = JSON.stringify(this.setFilters);
		},
	},
	components: {
		card,
	},
};
</script>

<template>
	<div id="app">
		<b-navbar toggleable="md" type="dark" variant="dark" :sticky="true">
			<b-navbar-brand href="#">The Duke</b-navbar-brand>
			<b-button
				variant="secondary"
				v-b-modal.options-modal
			>Options</b-button>
			<b-nav is-nav-bar class="ml-auto">
				<b-button
					variant="primary"
					@click="randomize()"
				>Randomize</b-button>
			</b-nav>
		</b-navbar>
		<div class="card-list">
			<card
				v-for="card in cards"
				:key="card.name"
				:title="card.name"
				:image-src="card.imgSrc"
			></card>
		</div>
		<b-modal
			id="options-modal"
			ref="options-modal"
			title="Options"
			class="options-modal"
		>
			Sets
			<div
				class="custom-controls-stacked"
			>
				<!-- <b-button
					:variant="setFilters[set] ? 'success' : 'outline-success'"
					@click="toggleSet(set)"
				>{{ setNames[set] }}</b-button> -->
				<b-form-checkbox
					v-for="set in setKeys"
					:key="set"
					v-model="setFilters[set]"
					@change="saveFilters()"
				>{{ setNames[set] }}</b-form-checkbox>
			</div>
		</b-modal>
	</div>
</template>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	background: url("../images/grass-tile.jpg");
}

.card-list {
	margin-top: 10px;
}

.options-modal--set-button {
	margin: 5px 0;
}
</style>
