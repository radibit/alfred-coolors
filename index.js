'use strict';

const alfy = require('alfy');
const colorNamer = require('color-namer');
const alfredNotifier = require('alfred-notifier');

alfredNotifier();

const colors = colorNamer(alfy.input);
const results = [];

if (colors.ntc) {
	results.push({
		title: colors.ntc[0].name
	});
} else {
	results.push({
		title: 'Unknown color 🤔'
	});
}

alfy.output(results);
