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
	<div class="card">
		<div class="card--title">{{ title }}</div>
		<img class="card--image" :src="imageSrc">
	</div>
</template>

<style lang="scss">
.card {
	max-width: 20%;
	max-height: 25%;
	flex: 0 0 20%;
	text-align: center;

	.card--title {
		text-align: center;
		font-family: sans-serif;
		font-size: 16px;
		font-weight: bold;
		color: #eee;
	}

	.card--image {
		max-height: 100%;
		max-width: 100%;
		box-sizing: border-box;
		padding: 5px;
		border-radius: 7%;
	}
}
</style>
