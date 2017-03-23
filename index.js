'use strict';

const alfy = require('alfy');
const colorNamer = require('color-namer');

const results = [];
let colors = [];

try {
	colors = colorNamer(alfy.input);
} catch (err) {
	results.push({
		title: 'No color name found 🤔'
	});
}

if (colors.ntc) {
	for (let i = 0; i < 5; i++) {
		results.push({
			title: colors.ntc[i].name.toLowerCase().replace(/\s/g, '-'),
			subtitle: 'approximate match: ' + (
				100 - (parseInt(colors.ntc[i].distance, 10))
			) + '%'
		});
	}
}

alfy.output(results);
