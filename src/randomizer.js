"use strict";

import cardData from "./data.json";

var buckets = {
	"monster": [],
	"01": [],
	"02": [],
	"03": [],
	"04": [],
	"05": [],
	"06": [],
	"07": [],
	"08": [],
	"09": [],
	"11": [],
};

cardData.forEach(data => buckets[data.bucket].push(data));

var randomizer;

// Fisher-Yates shuffle via https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
	var m = array.length, t, i;

	// While there remain elements to shuffle…
	while (m) {

		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}

function getCardSet() {
	var cards = [];

	var shuffledMonsters = shuffle(buckets.monster);
	shuffledMonsters
		.slice(0,5)
		.sort((a, b) => a.sortOrder - b.sortOrder)
		.forEach(card => cards.push(card));

	["01", "02", "03", "04", "05", "06", "07", "08", "09", "11"].forEach(key => {
		let list = buckets[key];
		cards.push(list[Math.floor(Math.random() * list.length)]);
	});

	return cards;
}


export {
	cardData,
	getCardSet,
};
