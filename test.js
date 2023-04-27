const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require ('./app.js');

test('1 dollar es igual a 133.52 yenes', () => {
  expect(fromDollarToYen(2)).toBe(267.04);
});

test('1 euro es igual a 1.10 dolaes', () => {
  expect(fromEuroToDollar(2)).toBe(2.2);
});

test('1 yen es igual a 0.006 libras', () => {
  expect(fromYenToPound(2)).toBe(0.012);
});