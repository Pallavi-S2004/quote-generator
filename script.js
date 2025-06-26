let quotes = [];
let currentQuote = "";
let currentAuthor = "";

// Fetch a large list of quotes once (100 quotes)
function fetchQuotesList() {
  fetch('https://api.quotable.io/quotes?limit=100')
    .then(response => response.json())
    .then(data => {
      quotes = data.results;
      displayRandomQuote();
    })
    .catch(error => {
      console.error("Error fetching quotes:", error);
      document.getElementById("quote").innerText = "Failed to load quotes.";
      document.getElementById("author").innerText = "";
    });
}

function displayRandomQuote() {
  if (quotes.length === 0) {
    document.getElementById("quote").innerText = "Quotes list is empty.";
    document.getElementById("author").innerText = "";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
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

// Fetch quotes list on page load
fetchQuotesList();
