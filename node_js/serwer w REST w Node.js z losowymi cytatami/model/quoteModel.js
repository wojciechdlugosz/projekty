let quotes = require("../data/quotes.json");

function getAll() {
  return new Promise((resolve, reject) => {
    resolve(quotes);
  });
}

function getById(id) {
  return new Promise((resolve, reject) => {
    const quote = quotes.find((q) => q.id === parseInt(id));
    if (quote) {
      resolve(quote);
    } else {
      reject(`Quote with ${id} not found`);
    }
  });
}

module.exports = {
  getAll,
  getById
}