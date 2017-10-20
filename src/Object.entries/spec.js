import test from 'ava';
import entries from './entries';

test('should convert any object to a flat array consisting of its enumerable properties', t => {
	// key value object
	const keyVal = { foo: 'bar', baz: 42 };
	t.deepEqual( entries(keyVal), [ ['foo', 'bar'], ['baz', 42] ]);

	// array like object
	const obj = { 0: 'a', 1: 'b', 2: 'c' };
	t.deepEqual(entries(obj), [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]); //

	// array like object with random key ordering
	const anObj = { 100: 'a', 2: 'b', 7: 'c' };
	t.deepEqual(entries(anObj), [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]); //

	// getFoo is property which isn't enumerable
	const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
	myObj.foo = 'bar';
	t.deepEqual(entries(myObj), [ ['foo', 'bar'] ]); //

	// non-object argument will be coerced to an object
	t.deepEqual(entries('foo'), [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]); //

	// returns an empty array for any primitive type, since primitives have no own properties
	t.deepEqual(entries(100), [ ]);

	// iterate through key-value gracefully
	const iteration = { a: 5 };
	for (const [key, value] of entries(iteration)) {
		t.deepEqual(`${key} ${value}`, "a 5"); // "a 5"
	}

	// Or, using array extras
	entries(iteration).forEach(([key, value]) => {
		t.deepEqual(`${key} ${value}`, "a 5"); // "a 5"
	});
});

