const fizzbuzz = require('./fizzbuzz');

test('input 1 is 1', () => {
    expect(fizzbuzz('1')).toBe('1');
});

test('input 3 is fizz', () => {
    expect(fizzbuzz('3')).toBe('fizz');
});

test('input 6 is fizz', () => {
    expect(fizzbuzz('6')).toBe('fizz');
});

test('input 5 is buzz', () => {
    expect(fizzbuzz('5')).toBe('buzz');
});

test('input 10 is buzz', () => {
    expect(fizzbuzz('10')).toBe('buzz');
});

test('input 15 is fizzbuzz', () => {
    expect(fizzbuzz('15')).toBe('fizzbuzz');
});

test('input test is ', () => {
    expect(fizzbuzz('test')).toBe('');
});