package es.codeurjc.test.exam.FunkoShop;

import java.util.Optional;

public class FunkoShop {

    private FunkoRepository funkoRepository;
    
    public FunkoShop(FunkoRepository funkoRepository){
        this.funkoRepository = funkoRepository;
    }

    public Funko buy(String funkoName){
        Optional<Funko> optional = funkoRepository.findByName(funkoName);
        if(optional.isPresent()){
            Funko funko = optional.get();
            if(funko.isAvailable()){
                funko.setAvailable(false);
                funkoRepository.save(funko);
                return funko;
            }else{
                throw new RuntimeException("Funko not available");
            }
        }else{
            throw new RuntimeException("Funko not found");
        }
    }
}
