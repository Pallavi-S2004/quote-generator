const quotes = [
  // 🎯 Core quotes (feel free to add or edit)
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Act only according to that maxim whereby you can, at the same time, will that it become a universal law.", author: "Immanuel Kant" },
  { text: "Imperfection is beauty, madness is genius and it’s better to be absolutely ridiculous than absolutely boring.", author: "Marilyn Monroe" },
  { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  // … (Add *at least* 300 quotes in this same format)
  
  // Here's a script that fills it quickly (example snippet):
  // { text: "Short quote #101...", author: "Author 101" },
  // …
  // { text: "Short quote #300...", author: "Author 300" }
];

// ======= Application Logic =======

let usedIndexes = new Set();

// Get a unique random index (no repeats until full cycle completed)
function getRandomIndex() {
  if (usedIndexes.size === quotes.length) {
    usedIndexes.clear(); // reset after all quotes used
  }
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (usedIndexes.has(index));
  usedIndexes.add(index);
  return index;
}

// Display a random quote
function displayRandomQuote() {
  if (quotes.length === 0) return;

  const idx = getRandomIndex();
  const quote = quotes[idx];

  document.getElementById("quote").innerText = quote.text;
  document.getElementById("author").innerText = `— ${quote.author}`;

  // Fade‑in animation
  const box = document.querySelector(".quote-box");
  box.classList.remove("fade-in");
  void box.offsetWidth;
  box.classList.add("fade-in");
}

// Theme toggle (dark/light)
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Keyboard support (Space or Enter)
document.addEventListener("keydown", e => {
  if (e.code === "Space" || e.code === "Enter") {
    displayRandomQuote();
  }
});

// Event listeners for buttons
document.getElementById("generate").addEventListener("click", displayRandomQuote);
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// Show an initial quote on load
displayRandomQuote();
