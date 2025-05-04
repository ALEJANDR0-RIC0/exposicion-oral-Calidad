const { FunkoShop } = require('../src/FunkoShop'); // Ajusta la ruta según tu proyecto
const { FunkoRepository } = require('../src/FunkoRepository'); // Ajusta la ruta según tu proyecto
const { Funko } = require('../src/Funko'); // Ajusta la ruta según tu proyecto

jest.mock('../src/FunkoRepository'); // Mock del repositorio

describe('FunkoShop', () => {
  let funkoRepository;
  let funkoShop;

  beforeEach(() => {
    funkoRepository = new FunkoRepository();
    funkoShop = new FunkoShop(funkoRepository);
  });

  test('should buy a Funko successfully', () => {
    // Arrange
    const funko = new Funko('Batman', '15.99', true);
    funkoRepository.findByName = jest.fn().mockReturnValue(Promise.resolve(funko));
    funkoRepository.save = jest.fn();

    // Act
    return funkoShop.buy('Batman').then((purchasedFunko) => {
      // Assert
      expect(purchasedFunko).not.toBeNull();
      expect(purchasedFunko.name).toBe('Batman');
      expect(purchasedFunko.isAvailable).toBe(false);
      expect(funkoRepository.save).toHaveBeenCalledWith(funko);
    });
  });

  test('should throw an error if the Funko is not available', () => {
    // Arrange
    const funko = new Funko('Superman', '12.99', false);
    funkoRepository.findByName = jest.fn().mockReturnValue(Promise.resolve(funko));

    // Act & Assert
    return expect(funkoShop.buy('Superman')).rejects.toThrow('Funko not available');
  });

  test('should throw an error if the Funko is not found', () => {
    // Arrange
    funkoRepository.findByName = jest.fn().mockReturnValue(Promise.resolve(null));

    // Act & Assert
    return expect(funkoShop.buy('Wonder Woman')).rejects.toThrow('Funko not found');
  });
});