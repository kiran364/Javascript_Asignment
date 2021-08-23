const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]
const count = countries.map((x) => {
  const leters = x.substring(0, 3);
  return [x, leters, x.length];
})
console.log(count);

