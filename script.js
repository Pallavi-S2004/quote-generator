let currentQuote = "";
let currentAuthor = "";

// Fetch random quote from Quotable API
function fetchRandomQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      document.getElementById("quote").innerText = data.content;
      document.getElementById("author").innerText = `— ${data.author}`;
      currentQuote = data.content;
      currentAuthor = data.author;

      // Trigger fade-in animation
      const quoteBox = document.querySelector(".quote-box");
      quoteBox.classList.remove("fade-in");
      void quoteBox.offsetWidth;  // Restart animation trick
      quoteBox.classList.add("fade-in");
    })
    .catch(error => {
      console.error("Error fetching quote:", error);
      document.getElementById("quote").innerText = "Oops! Failed to fetch quote.";
      document.getElementById("author").innerText = "";
    });
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Keyboard shortcut for Space or Enter
document.addEventListener("keydown", function(event) {
  if (event.code === "Space" || event.code === "Enter") {
    fetchRandomQuote();
  }
});

// Button click listeners
document.getElementById("generate").addEventListener("click", fetchRandomQuote);
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
