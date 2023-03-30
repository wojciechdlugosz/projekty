const Quote = require("../model/quoteModel");

async function getQuotes() {
  try {
    const quotes = await Quote.getAll();
    return quotes;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getQuote(id) {
  try {
    const quote = await Quote.getById(id);
    return quote;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getRandom() {
  try {
    const quotes = await getQuotes();
    if (quotes) {
      return quotes[Math.floor(Math.random() * quotes.length)];
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = {
  getQuotes,
  getQuote,
  getRandom,
};
