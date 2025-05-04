class FilteredSet {
  constructor(filter) {
    this.filter = filter;
    this.set = new Set();
  }

  add(element) {
    if (this.filter(element)) {
      this.set.add(element);
      return true;
    }
    return false;
  }

  size() {
    return this.set.size;
  }
}

describe('FilteredSetMockTest', () => {
  test('notAllowedElementTest', () => {
    const filter = jest.fn().mockReturnValue(false);

    const fSet = new FilteredSet(filter);
    const changed = fSet.add('elem');

    expect(filter).toHaveBeenCalledWith('elem');
    expect(changed).toBe(false);
    expect(fSet.size()).toBe(0);
  });

  test('notAllowedElementsTest', () => {
    const filter = jest.fn().mockReturnValue(false);

    const fSet = new FilteredSet(filter);
    const changed1 = fSet.add('elem1');
    const changed2 = fSet.add('elem2');
    const changed3 = fSet.add('elem3');

    expect(filter).toHaveBeenCalledWith('elem1');
    expect(filter).toHaveBeenCalledWith('elem2');
    expect(filter).toHaveBeenCalledWith('elem3');
    expect(changed1).toBe(false);
    expect(changed2).toBe(false);
    expect(changed3).toBe(false);
    expect(fSet.size()).toBe(0);
  });

  test('allowedElementsTest', () => {
    const filter = jest.fn().mockReturnValue(true);

    const fSet = new FilteredSet(filter);
    const changed1 = fSet.add('elem1');
    const changed2 = fSet.add('elem2');
    const changed3 = fSet.add('elem3');

    expect(filter).toHaveBeenCalledWith('elem1');
    expect(filter).toHaveBeenCalledWith('elem2');
    expect(filter).toHaveBeenCalledWith('elem3');
    expect(changed1).toBe(true);
    expect(changed2).toBe(true);
    expect(changed3).toBe(true);
    expect(fSet.size()).toBe(3);
  });

  test('allowedElementTest', () => {
    const filter = jest.fn().mockReturnValue(true);

    const fSet = new FilteredSet(filter);
    const changed = fSet.add('elem');

    expect(filter).toHaveBeenCalledWith('elem');
    expect(changed).toBe(true);
    expect(fSet.size()).toBe(1);
  });
});