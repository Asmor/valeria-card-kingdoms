<script>
import card from "./components/card.vue";
export default {
	name: "app",
	data () {
		return {
			msg: "Hello, world!",
		};
	},
	components: {
		card,
	},
};
</script>

<template>
	<div id="app">
		<h1>
			Hello?
		</h1>
		<card :title="msg"></card>
	</div>
</template>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
</style>
