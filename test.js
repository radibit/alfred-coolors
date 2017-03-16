import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('#480607');

	t.deepEqual(result, [
		{
			title: 'bulgarian-rose',
			subtitle: 'approximate match: 100%'
		},
		{
			title: 'rustic-red',
			subtitle: 'approximate match: 99%'
		},
		{
			title: 'burnt-maroon',
			subtitle: 'approximate match: 98%'
		},
		{
			title: 'mahogany',
			subtitle: 'approximate match: 97%'
		},
		{
			title: 'heath',
			subtitle: 'approximate match: 96%'
		}
	]);
});
