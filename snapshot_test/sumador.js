function sumador(a, b) {
    return {
      a,
      b,
      suma: a + b,
      timestamp: new Date().toISOString(),
    };
  }
  
  module.exports = sumador;