const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
  { text: "Stay positive, work hard, make it happen.", author: "Unknown" },
  { text: "Little things make big days.", author: "Unknown" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
  { text: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown" },
  { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Try to be a rainbow in someone’s cloud.", author: "Maya Angelou" },
  { text: "Do not wait for the perfect moment, take the moment and make it perfect.", author: "Unknown" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Life is short, and it's up to you to make it sweet.", author: "Sarah Louise Delany" },
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { text: "Work hard in silence, let your success be your noise.", author: "Frank Ocean" },
  { text: "Be so good they can’t ignore you.", author: "Steve Martin" },
  { text: "Learn as if you will live forever, live like you will die tomorrow.", author: "Mahatma Gandhi" },
  { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "Don’t limit your challenges. Challenge your limits.", author: "Unknown" },
  { text: "If it doesn’t challenge you, it won’t change you.", author: "Fred DeVito" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "I never dream of success. I work for it.", author: "Estee Lauder" },
  { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
  { text: "If you want something you’ve never had, you must be willing to do something you’ve never done.", author: "Thomas Jefferson" },
  { text: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse" },
  { text: "Do not let making a living prevent you from making a life.", author: "John Wooden" },
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
