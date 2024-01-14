// __tests__/server.test.js

const { add, multiply } = require('../server');

test('add function should add two numbers correctly', () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});

test('multiply function should multiply two numbers correctly', () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test('add function should handle negative numbers', () => {
  const result = add(-3, 7);
  expect(result).toBe(4);
});

test('multiply function should handle zero as one of the operands', () => {
  const result = multiply(5, 0);
  expect(result).toBe(0);
});

