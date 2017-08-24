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
		<div class="card--title"> {{ title }} </div>
		<img class="card--image" src="images/01-cleric.png">
	</div>
</template>

<style lang="scss">
.card {
	.card--image {
		max-height: 100%;
		max-width: 100%;
		box-sizing: border-box;
		padding: 5px;
		border-radius: 7%;
	}
}
</style>
