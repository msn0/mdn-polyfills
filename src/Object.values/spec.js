import test from 'ava';
import values from './values';

test('should convert any object to a flat array consisting of it`s values', t => {
	// key value object
	const keyVal = { foo: 'bar', baz: 42 };
	t.deepEqual( values(keyVal), [ 'bar', 42 ]);

	// array like object
	const obj = { 0: 'a', 1: 'b', 2: 'c' };
	t.deepEqual(values(obj), [ 'a', 'b', 'c' ]);

	// array like object with random key ordering
	const anObj = { 100: 'a', 2: 'b', 7: 'c' };
	t.deepEqual(values(anObj), [ 'b', 'c', 'a' ]);

	// getFoo is property which isn't enumerable
	const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
	myObj.foo = 'bar';
	t.deepEqual(values(myObj), [ 'bar' ]);

	// non-object argument will be coerced to an object
	t.deepEqual(values('foo'), [ 'f', 'o', 'o' ]);

	// returns an empty array for any primitive type, since primitives have no own properties
	t.deepEqual(values(100), [ ]);
});

