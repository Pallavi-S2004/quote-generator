const quotes = [
  "Stay positive, work hard, make it happen.",
  "Believe you can and you're halfway there.",
  "Success is no accident.",
  "Be yourself; everyone else is already taken.",
  "The best time to start was yesterday. The next best is now."
];

function generateQuote() {
  const quoteText = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}
