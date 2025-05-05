class FunkoShop {
    constructor(funkoRepository) {
        this.funkoRepository = funkoRepository;
    }

    async buy(funkoName) {
        const funko = await this.funkoRepository.findByName(funkoName);
        if (!funko) {
            throw new Error('Funko not found');
        }
        if (!funko.isAvailable) {
            throw new Error('Funko not available');
        }
        funko.isAvailable = false;
        this.funkoRepository.save(funko);
        return funko;
    }
}

module.exports = { FunkoShop };