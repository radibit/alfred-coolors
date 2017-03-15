import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('#480607');

	t.deepEqual(result, [
		{
			title: 'Bulgarian Rose'
		}
	]);
});
