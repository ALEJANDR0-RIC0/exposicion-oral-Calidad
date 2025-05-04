package es.codeurjc.test.exam.FunkoShop;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.*;

public class FunkoShopTest {

    private FunkoRepository funkoRepository;
    private FunkoShop funkoShop;

    @BeforeEach
    public void setUp() {
        funkoRepository = mock(FunkoRepository.class);
        funkoShop = new FunkoShop(funkoRepository);
    }

    @Test
    public void testBuyFunkoSuccessfully() {
        // Arrange
        Funko funko = new Funko("Batman", "15.99", true);
        when(funkoRepository.findByName("Batman")).thenReturn(Optional.of(funko));

        // Act
        Funko purchasedFunko = funkoShop.buy("Batman");

        // Assert
        assertNotNull(purchasedFunko);
        assertEquals("Batman", purchasedFunko.getName());
        assertFalse(purchasedFunko.isAvailable());
        verify(funkoRepository).save(funko);
    }

    @Test
    public void testBuyFunkoNotAvailable() {
        // Arrange
        Funko funko = new Funko("Superman", "12.99", false);
        when(funkoRepository.findByName("Superman")).thenReturn(Optional.of(funko));

        // Act & Assert
        RuntimeException exception = assertThrows(RuntimeException.class, () -> funkoShop.buy("Superman"));
        assertEquals("Funko not available", exception.getMessage());
        verify(funkoRepository, never()).save(any());
    }

    @Test
    public void testBuyFunkoNotFound() {
        // Arrange
        when(funkoRepository.findByName("Wonder Woman")).thenReturn(Optional.empty());

        // Act & Assert
        RuntimeException exception = assertThrows(RuntimeException.class, () -> funkoShop.buy("Wonder Woman"));
        assertEquals("Funko not found", exception.getMessage());
        verify(funkoRepository, never()).save(any());
    }
}