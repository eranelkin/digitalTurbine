const Coin = {
  ONE_CENT: 1,
  FIVE_CENTS: 5,
  TEN_CENTS: 10,
};

const Product = {
  BOOK: 5,
  MOVIE: 10,
};

function vending() {
  this.coinCounter = {};
  this.inventories = {};
  this.lastReturnedCoins = 0;
  this.revenue = 0;

  this.insertCoin = (coin) => {
    this.coinCounter = {
      ...this.coinCounter,
      [coin]: this.coinCounter[coin] ? ++this.coinCounter[coin] : 1,
    };
  };

  const getTotal = () => {
    return Object.keys(this.coinCounter).reduce((all, curr) => {
      return all + this.coinCounter[curr] * curr;
    }, 0);
  };

  this.buyProduct = (product) => {
    const total = getTotal();
    if (total > product) {
      this.lastReturnedCoins = total - product;
      this.revenue += product;
      this.coinCounter = {};
      this.inventories = {
        ...this.inventories,
        [product]: this.inventories[product] ? ++this.inventories[product] : 1,
      };
    }
    return total >= product;
  };

  this.cancelTransaction = () => {
    const total = getTotal();
    if (total > 0) {
      this.lastReturnedCoins = total;
      this.coinCounter = {};
    }
    return total > 0;
  };
}

module.exports = { vending, Product, Coin };
