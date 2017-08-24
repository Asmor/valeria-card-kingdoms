<script>
"use strict";

import card from "./components/card.vue";
import { getCardSet, cardData } from "./randomizer.js";

export default {
	name: "app",
	data () {
		return {
			cards: getCardSet(),
			cardData,
		};
	},
	methods: {
		randomize: function () {
			this.cards = getCardSet();
		}
	},
	components: {
		card,
	},
};
</script>

<template>
	<div id="app">
		<b-navbar toggleable="md" type="dark" variant="dark" sticky="true">
			<!-- <b-nav-toggle target="nav-collapse"></b-nav-toggle> -->
			<b-navbar-brand href="#">The Duke</b-navbar-brand>
			<b-nav is-nav-bar class="ml-auto">
				<b-button
					variant="primary"
					@click="randomize()"
				>Randomize</b-button>
			</b-nav>
			<!-- <b-collapse is-nav id="nav-collapse"></b-collapse> -->
		</b-navbar>
		<div class="card-list">
			<card
				v-for="card in cards"
				:key="card.name"
				:title="card.name"
				:image-src="card.imgSrc"
			></card>
		</div>
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
</style>
