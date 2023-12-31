/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
var Float64Array = require( '@stdlib/array-float64' );
var groupEntriesBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof groupEntriesBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function groups array element entries according to an indicator function', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 'beep', 'boop', 'foo', 'bar' ];

	expected = {
		'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ],
		'f': [ [ 2, 'foo' ] ]
	};
	out = groupEntriesBy( x, indicator );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function indicator( v ) {
		return v[ 0 ];
	}
});

tape( 'the function groups array element entries according to an indicator function (typed arrays)', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 3.14, 4.2, -1.0, -10.2 ] );

	expected = {
		'1': [ [ 2, -1.0 ], [ 3, -10.2 ] ],
		'2': [ [ 0, 3.14 ], [ 1, 4.2 ] ]
	};
	out = groupEntriesBy( x, indicator );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function indicator( v, i ) {
		if ( i < 2 ) {
			return 2;
		}
		return 1;
	}
});

tape( 'the function groups array element entries according to an indicator function (array-like objects)', function test( t ) {
	var expected;
	var out;
	var x;

	x = {
		'length': 4,
		'0': 'beep',
		'1': 'boop',
		'2': 'foo',
		'3': 'bar'
	};

	expected = {
		'be': [ [ 0, 'beep' ] ],
		'bo': [ [ 1, 'boop' ] ],
		'fo': [ [ 2, 'foo' ] ],
		'ba': [ [ 3, 'bar' ] ]
	};
	out = groupEntriesBy( x, indicator );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function indicator( v ) {
		return v.slice( 0, 2 );
	}
});

tape( 'the function groups array element entries according to an indicator function (accessor arrays)', function test( t ) {
	var expected;
	var out;
	var x;

	x = toAccessorArray( [ 'beep', 'boop', 'foo', 'bar' ] );

	expected = {
		'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ],
		'f': [ [ 2, 'foo' ] ]
	};
	out = groupEntriesBy( x, indicator );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function indicator( v ) {
		return v[ 0 ];
	}
});

tape( 'the function groups array element entries according to an indicator function (string serialization)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 'beep', 'boop', 'foo', 'bar' ];

	expected = {
		'[object Object]': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 2, 'foo' ], [ 3, 'bar' ] ]
	};
	out = groupEntriesBy( x, indicator );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();

	function indicator() {
		return {};
	}
});

tape( 'the function returns an empty object if provided an empty array', function test( t ) {
	var expected;
	var actual;

	expected = {};
	actual = groupEntriesBy( [], indicator );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function indicator( v ) {
		t.fail( 'should not be called' );
		return v;
	}
});
