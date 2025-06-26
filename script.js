const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  // ✅ You can add more quotes here
];

let currentQuote = "";
let currentAuthor = "";

// Function to display a random quote
function displayQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  document.getElementById("quote").innerText = quote.text;
  document.getElementById("author").innerText = `— ${quote.author}`;

  currentQuote = quote.text;
  currentAuthor = quote.author;

  // Trigger fade-in animation
  const quoteBox = document.querySelector(".quote-box");
  quoteBox.classList.remove("fade-in");
  void quoteBox.offsetWidth;  // Restart animation trick
  quoteBox.classList.add("fade-in");
}

// Theme toggle function
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Keyboard shortcut for Space or Enter
document.addEventListener("keydown", function(event) {
  if (event.code === "Space" || event.code === "Enter") {
    displayQuote();
  }
});

// Event listeners for buttons
document.getElementById("generate").addEventListener("click", displayQuote);
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

