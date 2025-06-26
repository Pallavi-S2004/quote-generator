let quotes = [];
let usedIndexes = new Set();
let currentQuote = "";
let currentAuthor = "";

// Fetch more quotes (let's get first 3 pages = ~300 quotes)
async function fetchQuotesList() {
  let allQuotes = [];
  for (let page = 1; page <= 3; page++) {
    try {
      const response = await fetch(`https://api.quotable.io/quotes?page=${page}&limit=100`);
      const data = await response.json();
      allQuotes = allQuotes.concat(data.results);
    } catch (error) {
      console.error("Error fetching page " + page, error);
    }
  }
  quotes = allQuotes;
  displayRandomQuote();
}

function getRandomIndex() {
  if (usedIndexes.size === quotes.length) {
    // Reset if all quotes used
    usedIndexes.clear();
  }

  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (usedIndexes.has(index));

  usedIndexes.add(index);
  return index;
}

function displayRandomQuote() {
  if (quotes.length === 0) {
    document.getElementById("quote").innerText = "Quotes are loading...";
    document.getElementById("author").innerText = "";
    return;
  }

  const randomIndex = getRandomIndex();
  const quote = quotes[randomIndex];

  document.getElementById("quote").innerText = quote.content;
  document.getElementById("author").innerText = `— ${quote.author}`;

  currentQuote = quote.content;
  currentAuthor = quote.author;

  // Trigger fade-in animation
  const quoteBox = document.querySelector(".quote-box");
  quoteBox.classList.remove("fade-in");
  void quoteBox.offsetWidth;
  quoteBox.classList.add("fade-in");
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Keyboard shortcut for Space or Enter
document.addEventListener("keydown", function(event) {
  if (event.code === "Space" || event.code === "Enter") {
    displayRandomQuote();
  }
});

// Button click listeners
document.getElementById("generate").addEventListener("click", displayRandomQuote);
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// Fetch quotes on page load
fetchQuotesList();
