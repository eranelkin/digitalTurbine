const { vending, Product, Coin } = require("./code");

test("coinCounter test, insert coins should be reflect this object", () => {
  const myVending = new vending();
  myVending.insertCoin(Coin.ONE_CENT);
  myVending.insertCoin(Coin.FIVE_CENTS);
  expect(myVending.coinCounter).toEqual({ 1: 1, 5: 1 });
  myVending.insertCoin(Coin.TEN_CENTS);
  expect(myVending.coinCounter).toEqual({ 1: 1, 5: 1, 10: 1 });
});

test("buyProduct test, after insert coins. if true should return coins", () => {
  const myVending = new vending();
  myVending.insertCoin(Coin.ONE_CENT);
  myVending.insertCoin(Coin.FIVE_CENTS);
  expect(myVending.buyProduct(Product.MOVIE)).toBe(false);
  myVending.insertCoin(Coin.TEN_CENTS);
  expect(myVending.buyProduct(Product.MOVIE)).toBe(true);
  expect(myVending.lastReturnedCoins).toBe(6);
  expect(myVending.coinCounter).toEqual({});
});

test("inventory test, after buying products.", () => {
  const myVending = new vending();
  for (let i = 0; i < 2; i++) {
    myVending.insertCoin(Coin.TEN_CENTS);
    myVending.insertCoin(Coin.TEN_CENTS);
    myVending.buyProduct(Product.MOVIE);
  }
  for (let i = 0; i < 2; i++) {
    myVending.insertCoin(Coin.TEN_CENTS);
    myVending.insertCoin(Coin.TEN_CENTS);
    myVending.buyProduct(Product.BOOK);
  }
  expect(myVending.inventories).toEqual({
    [Product.MOVIE]: 2,
    [Product.BOOK]: 2,
  });
});

test("revenue test, after buying products.", () => {
  const myVending = new vending();
  for (let i = 0; i < 2; i++) {
    myVending.insertCoin(Coin.TEN_CENTS);
    myVending.insertCoin(Coin.TEN_CENTS);
    myVending.buyProduct(Product.MOVIE);
  }
  for (let i = 0; i < 2; i++) {
    myVending.insertCoin(Coin.TEN_CENTS);
    myVending.insertCoin(Coin.TEN_CENTS);
    myVending.buyProduct(Product.BOOK);
  }
  expect(myVending.revenue).toBe(30);
});

test("cancelTransaction test, should reset tcoinsCounter if any money in machine.", () => {
  const myVending = new vending();
  myVending.insertCoin(Coin.TEN_CENTS);
  myVending.insertCoin(Coin.FIVE_CENTS);
  myVending.insertCoin(Coin.TEN_CENTS);
  myVending.insertCoin(Coin.FIVE_CENTS);
  myVending.cancelTransaction();

  expect(myVending.lastReturnedCoins).toBe(30);
  expect(myVending.inventories).toEqual({});
});
