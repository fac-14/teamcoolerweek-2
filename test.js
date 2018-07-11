var test = require('tape');
var logic = require('./logic');
const todoDummyArray = [
  { id: -3, description: 'first todo' },
  { id: -2, description: 'second todo' },
  { id: -1, description: 'third todo' }
];
const newtodoDummy = { id: 0, description: 'fourth todo' };

test('Testing Tape is working', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end();
});

test('Testing addTodo return value', function(t) {
  const actual = logic.addTodo(todoDummyArray, newtodoDummy);
  const expected = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
    { id: 0, description: 'fourth todo' }
    ];
  t.deepEqual(actual, expected, 'new item added to array');
  t.end();
});

test('Testing original array', function(t) {
  const actual = todoDummyArray;
  const expected = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' }
  ];
  t.deepEqual(actual, expected, 'original array has stayed the same');
  t.end();
});