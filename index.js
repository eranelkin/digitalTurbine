const { vending, Product, Coin } = require("./code");

const myVending = new vending();
myVending.insertCoin(Coin.ONE_CENT);
myVending.insertCoin(Coin.ONE_CENT);
myVending.insertCoin(Coin.ONE_CENT);
myVending.insertCoin(Coin.FIVE_CENTS);
myVending.insertCoin(Coin.TEN_CENTS);
let output = myVending.buyProduct(Product.MOVIE);
console.log(`purchase state - ${output}`);
