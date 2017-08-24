<script>
"use strict";

import card from "./components/card.vue";
import { cards, cardData } from "./randomizer.js";

export default {
	name: "app",
	data () {
		return {
			cards,
			cardData,
		};
	},
	components: {
		card,
	},
};
</script>

<template>
	<div id="app">
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
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}
</style>
