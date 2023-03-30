class RandomQuote {
  constructor() {
    this.init();
  }

  init() {
    this.quoteContainer = document.getElementById("quote-container");
    this.quote = document.getElementById("quote");
    this.author = document.getElementById("author");
    this.quoteBtn = document.getElementById("next-quote");

    this.addListeners();
  }

  addListeners() {
    this.quoteBtn.addEventListener("click", this.getQuote);    
    document.addEventListener("keyup", e => {
      if (e.code === "Space") {
        this.getQuote();
      }
    });

    this.getQuote();
  }

  getQuote = async () => {
    const apiUrl = "/api/quotes/random";
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      this.quote.textContent = `"${data.text}"`;
      this.author.textContent = data.author;
    } catch (error) {
      this.quote.textContent = `Server erorr: ${error}`;
    }
  }
}

const randomQuote = new RandomQuote();
