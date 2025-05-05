const sumador = require('./sumador');

test('resultado del sumador coincide con snapshot', () => {
  const resultado = sumador(2, 3);

  delete resultado.timestamp;

  expect(resultado).toMatchSnapshot();
});