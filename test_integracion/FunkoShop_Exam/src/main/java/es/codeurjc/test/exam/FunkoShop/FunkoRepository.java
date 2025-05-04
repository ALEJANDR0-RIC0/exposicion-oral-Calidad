package es.codeurjc.test.exam.FunkoShop;

import java.util.Optional;

public interface FunkoRepository {

    Optional<Funko> findByName(String funkoName);

    void save(Funko funko);
    
}
