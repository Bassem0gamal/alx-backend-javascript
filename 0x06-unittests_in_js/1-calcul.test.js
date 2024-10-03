
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('test SUM two positive numbers', () => {
    assert.equal(calculateNumber('SUM', 1, 2), 3);
  });

  it('test SUM two negative numbers', () => {
    assert.equal(calculateNumber('SUM', -3, -4), -7);
  });

  it('test SUM one positive and one negative numbers', () => {
    assert.equal(calculateNumber('SUM', 8, -9), -1);
  });

  it('test SUM two positive float numbers', () => {
    assert.equal(calculateNumber('SUM', 10.1, 12), 22);
  });

  it('test SUM two negative float numbers', () => {
    assert.equal(calculateNumber('SUM', -13, -14.5), -27);
  });

  it('test SUM one positive float and one negative float numbers', () => {
    assert.equal(calculateNumber('SUM', 16, -17.8), -2);
  });

  it('test SUM two zeros', () => {
    assert.equal(calculateNumber('SUM', 0, 0), 0);
  });

  it('test SUBTRACT two positive numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 19, 20), -1);
  });

  it('test SUBTRACT two negative numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', -21, -22), 1);
  });

  it('test SUBTRACT one positive and one negative numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 23, -24), 47);
  });

  it('test SUBTRACT two positive float numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 25.6, 27.8), -2);
  });

  it('test SUBTRACT two negative float numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', -29.3, -31.2), 2);
  });

  it('test SUBTRACT one positive float and one negative float numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 33.4, -35.6), 69);
  });

  it('test SUBTRACT two zeros', () => {
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
  });

  it('test DIVIDE two positive numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
  });

  it('test DIVIDE two negative numbers', () => {
    assert.equal(calculateNumber('DIVIDE', -4, -2), 2);
  });

  it('test DIVIDE one positive and one negative numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 4, -2), -2);
  });

  it('test DIVIDE two positive float numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 4.3, 2.3), 2);
  });

  it('test DIVIDE two negative float numbers', () => {
    assert.equal(calculateNumber('DIVIDE', -4.5, -2.5), 2);
  });

  it('test DIVIDE one positive float and one negative float numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 4.5, -2.5), -2.5);
  });

  it('test DIVIDE two zeros', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
  });

  it('test DIVIDE by zero', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 0), 'Error');
  });

  it('test DIVIDE by rounded zero', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 0.2), 'Error');
  });

  it('test DIVIDE with zero', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 4), 0);
  });
});