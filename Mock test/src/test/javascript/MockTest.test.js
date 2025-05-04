describe('MockTest', () => {
  test('testList', () => {
    // mock creation
    const mockedList = {
      add: jest.fn(),
      clear: jest.fn(),
    };

    // using mock object
    mockedList.add('one');
    mockedList.clear();

    // verification
    expect(mockedList.add).toHaveBeenCalledWith('one');
    expect(mockedList.clear).toHaveBeenCalled();
  });
});