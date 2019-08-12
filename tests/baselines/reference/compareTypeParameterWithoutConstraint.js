//// [compareTypeParameterWithoutConstraint.ts]
// @strict

const isNum = (v: unknown) => {
  if (typeof v !== 'number') throw new Error('Not a number');
  return v;
};
const isString = (v: unknown) => {
  if (typeof v !== 'string') throw new Error('Not a string');
  return v;
};

// no errors on comparison
function makeExampleValue<T>(validator: (v: unknown) => T): unknown {
  if (validator === isNum) return 42;
  if (validator === isString) return 'something';
  throw new Error('unknown type');
}

/*
 * check and check2 should type-check identically
 */

const num = 1;
function check<T>(x: T) {
  return x === num; // no error
}
check(num);

function check2<T extends unknown>(x: T) {
  return x === num; // no error
}
check(num);


//// [compareTypeParameterWithoutConstraint.js]
// @strict
var isNum = function (v) {
    if (typeof v !== 'number')
        throw new Error('Not a number');
    return v;
};
var isString = function (v) {
    if (typeof v !== 'string')
        throw new Error('Not a string');
    return v;
};
// no errors on comparison
function makeExampleValue(validator) {
    if (validator === isNum)
        return 42;
    if (validator === isString)
        return 'something';
    throw new Error('unknown type');
}
/*
 * check and check2 should type-check identically
 */
var num = 1;
function check(x) {
    return x === num; // no error
}
check(num);
function check2(x) {
    return x === num; // no error
}
check(num);
