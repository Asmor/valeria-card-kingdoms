<script>
"use strict";

export default {
	name: "card",
	data () {
		return {};
	},
	props: ["title", "imageSrc"],
};
</script>

<template>
	<div class="card-display">
		<div class="card-display--title">{{ title }}</div>
		<img class="card-display--image" :src="imageSrc">
	</div>
</template>

<style lang="scss">
.card-display {
	max-width: 20%;
	text-align: center;
	display: inline-block;

	.card-display--title {
		text-align: center;
		font-family: sans-serif;
		font-size: 16px;
		font-weight: bold;
		color: #eee;
	}

	.card-display--image {
		max-height: 100%;
		max-width: 100%;
		box-sizing: border-box;
		padding: 5px;
		border-radius: 7%;
	}
}
</style>
