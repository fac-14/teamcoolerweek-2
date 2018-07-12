var test = require('tape');
var logic = require('./logic');
const todoDummyArray = [
  { id: -3, description: 'first todo', done: false, priority: 'now' },
  { id: -2, description: 'second todo', done: false, priority: 'today' },
  { id: -1, description: 'third todo', done: false, priority: 'none' }
];
const newtodoDummy = { id: 0, description: 'fourth todo', done: false, priority: 'none' };
const dummyID = -2;

test('Testing Tape is working', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end();
});

test('Testing addTodo return value', function(t) {
  const actual = logic.addTodo(todoDummyArray, newtodoDummy);
  const expected = [
    { id: -3, description: 'first todo', done: false, priority: 'now' },
    { id: -2, description: 'second todo', done: false, priority: 'today' },
    { id: -1, description: 'third todo', done: false, priority: 'none' },
    { id: 0, description: 'fourth todo', done: false, priority: 'none' }
    ];
  t.deepEqual(actual, expected, 'new item added to array');
  t.end();
});

test('Testing original array', function(t) {
  const actual = todoDummyArray;
  const expected = [
    { id: -3, description: 'first todo', done: false, priority: 'now' },
    { id: -2, description: 'second todo', done: false, priority: 'today' },
    { id: -1, description: 'third todo', done: false, priority: 'none' }
  ];
  t.deepEqual(actual, expected, 'original array has stayed the same');
  t.end();
});

test('speific item has been deleted',function(t){
  const actual = logic.deleteTodo(todoDummyArray, dummyID);
  const expected = [
    { id: -3, description: 'first todo', done: false, priority: 'now' },
    { id: -1, description: 'third todo', done: false, priority: 'none' }
  ];
  t.deepEqual(actual, expected, 'ID item has been deleted');
  t.end();
})

test('Testing marktodo output', function(t) {
  const actual = logic.markTodo(todoDummyArray, dummyID);
  const expected = [
    { id: -3, description: 'first todo', done: false, priority: 'now' },
    { id: -2, description: 'second todo', done: true, priority: 'today' },
    { id: -1, description: 'third todo', done: false, priority: 'none' }
  ];
  t.deepEqual(actual, expected, 'Done Value now equals true');
  t.end();
})