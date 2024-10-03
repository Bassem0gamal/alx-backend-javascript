
const assert = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('test SUM two positive numbers', () => {
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
  });

  it('test SUM two negative numbers', () => {
    expect(calculateNumber('SUM', -3, -4)).to.equal(-7);
  });

  it('test SUM one positive and one negative numbers', () => {
    expect(calculateNumber('SUM', 8, -9)).to.equal(-1);
  });

  it('test SUM two positive float numbers', () => {
    expect(calculateNumber('SUM', 10.1, 12)).to.equal(22);
  });

  it('test SUM two negative float numbers', () => {
    expect(calculateNumber('SUM', -13, -14.5)).to.equal(-27);
  });

  it('test SUM one positive float and one negative float numbers', () => {
    expect(calculateNumber('SUM', 16, -17.8)).to.equal(-2);
  });

  it('test SUM two zeros', () => {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });

  it('test SUBTRACT two positive numbers', () => {
    expect(calculateNumber('SUBTRACT', 19, 20)).to.equal(-1);
  });

  it('test SUBTRACT two negative numbers', () => {
    expect(calculateNumber('SUBTRACT', -21, -22)).to.equal(1);
  });

  it('test SUBTRACT one positive and one negative numbers', () => {
    expect(calculateNumber('SUBTRACT', 23, -24)).to.equal(47);
  });

  it('test SUBTRACT two positive float numbers', () => {
    expect(calculateNumber('SUBTRACT', 25.6, 27.8)).to.equal(-2);
  });

  it('test SUBTRACT two negative float numbers', () => {
    expect(calculateNumber('SUBTRACT', -29.3, -31.2)).to.equal(2);
  });

  it('test SUBTRACT one positive float and one negative float numbers', () => {
    expect(calculateNumber('SUBTRACT', 33.4, -35.6)).to.equal(69);
  });

  it('test SUBTRACT two zeros', () => {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
  });

  it('test DIVIDE two positive numbers', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });

  it('test DIVIDE two negative numbers', () => {
    expect(calculateNumber('DIVIDE', -4, -2)).to.equal(2);
  });

  it('test DIVIDE one positive and one negative numbers', () => {
    expect(calculateNumber('DIVIDE', 4, -2)).to.equal(-2);
  });

  it('test DIVIDE two positive float numbers', () => {
    expect(calculateNumber('DIVIDE', 4.3, 2.3)).to.equal(2);
  });

  it('test DIVIDE two negative float numbers', () => {
    expect(calculateNumber('DIVIDE', -4.5, -2.5)).to.equal(2);
  });

  it('test DIVIDE one positive float and one negative float numbers', () => {
    expect(calculateNumber('DIVIDE', 4.5, -2.5)).to.equal(-2.5);
  });

  it('test DIVIDE two zeros', () => {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });

  it('test DIVIDE by zero', () => {
    expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
  });

  it('test DIVIDE by rounded zero', () => {
    expect(calculateNumber('DIVIDE', 4, 0.2)).to.equal('Error');
  });

  it('test DIVIDE with zero', () => {
    expect(calculateNumber('DIVIDE', 0, 4)).to.equal(0);
  });
});
