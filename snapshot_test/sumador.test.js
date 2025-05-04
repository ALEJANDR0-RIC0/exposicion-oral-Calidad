const sumador = require('./sumador');

test('resultado del sumador coincide con snapshot', () => {
  const resultado = sumador(2, 3);

  // Para evitar fallos por el timestamp cambiante, lo eliminamos antes del snapshot
  delete resultado.timestamp;

  expect(resultado).toMatchSnapshot();
});