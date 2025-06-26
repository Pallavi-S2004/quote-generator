const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
  { text: "Stay positive, work hard, make it happen.", author: "Unknown" },
  { text: "Little things make big days.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
  { text: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown" },
  { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
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
  { text: "If you want something you’ve never had, you must be willing to do something you’ve never done.", author: "Thomas Jefferson" },
  { text: "Do not let making a living prevent you from making a life.", author: "John Wooden" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun" },
  { text: "There are no shortcuts to any place worth going.", author: "Beverly Sills" },
  { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
  { text: "Nothing will work unless you do.", author: "Maya Angelou" },
  { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
  { text: "The harder the battle, the sweeter the victory.", author: "Les Brown" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
  { text: "Hustle in silence and let your success make the noise.", author: "Unknown" },
  { text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
  { text: "Big jobs usually go to the men who prove their ability to outgrow small ones.", author: "Ralph Waldo Emerson" },
  { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "Success doesn’t come to you, you’ve got to go to it.", author: "Marva Collins" },
  { text: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Success is not for the lazy.", author: "Unknown" },
  { text: "Either you run the day or the day runs you.", author: "Jim Rohn" },
  { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
  { text: "Your limitation—it’s only your imagination.", author: "Unknown" },
  { text: "Sometimes later becomes never. Do it now.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
  { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { text: "Do something today that your future self will thank you for.", author: "Unknown" },
  { text: "Little things make big days.", author: "Unknown" },
  { text: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown" },
  { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
  { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
  { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
  { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
{ text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
{ text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
{ text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
{ text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
{ text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
{ text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
{ text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
{ text: "Don't let what you cannot do interfere with what you can do.", author: "John Wooden" },
{ text: "Success isn’t overnight. It’s when every day you get a little better than the day before.", author: "Dwayne Johnson" },
{ text: "Discipline is doing what needs to be done, even if you don't want to do it.", author: "Unknown" },
{ text: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
{ text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
{ text: "Your life does not get better by chance, it gets better by change.", author: "Jim Rohn" },
{ text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
{ text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
{ text: "You don't have to see the whole staircase, just take the first step.", author: "Martin Luther King Jr." },
{ text: "Act as if it were impossible to fail.", author: "Dorothea Brande" },
{ text: "Make each day your masterpiece.", author: "John Wooden" },
{ text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
{ text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
{ text: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.", author: "Earl Nightingale" },
{ text: "Great works are performed not by strength but by perseverance.", author: "Samuel Johnson" },
{ text: "Winners are not afraid of losing. But losers are.", author: "Robert Kiyosaki" },
{ text: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
{ text: "Stop being afraid of what could go wrong and start being excited about what could go right.", author: "Tony Robbins" },
{ text: "Don’t compare your chapter 1 to someone else’s chapter 20.", author: "Unknown" },
{ text: "One day or day one. You decide.", author: "Unknown" },
{ text: "Do not wish for it. Work for it.", author: "Unknown" },
{ text: "Doubt whom you will, but never yourself.", author: "Christian Nestell Bovee" },
{ text: "Failure is not the opposite of success; it’s part of success.", author: "Arianna Huffington" },
{ text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
{ text: "If you’re going through hell, keep going.", author: "Winston Churchill" },
{ text: "Don’t wait for the right opportunity: create it.", author: "George Bernard Shaw" },
{ text: "You can if you think you can.", author: "George Reeves" },
{ text: "Success is where preparation and opportunity meet.", author: "Bobby Unser" },
{ text: "Never regret anything that made you smile.", author: "Mark Twain" },
{ text: "Go as far as you can see; when you get there, you’ll be able to see further.", author: "Thomas Carlyle" },
{ text: "Make your life a masterpiece; imagine no limitations on what you can be, have or do.", author: "Brian Tracy" },
{ text: "Success is a state of mind. If you want success, start thinking of yourself as a success.", author: "Joyce Brothers" },
{ text: "Great things never come from comfort zones.", author: "Unknown" },
{ text: "Happiness is not by chance, but by choice.", author: "Jim Rohn" },
{ text: "Opportunities are usually disguised as hard work, so most people don’t recognize them.", author: "Ann Landers" },
{ text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
{ text: "You must expect great things of yourself before you can do them.", author: "Michael Jordan" },
{ text: "Challenges are what make life interesting. Overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
{ text: "Don’t limit yourself. Many people limit themselves to what they think they can do.", author: "Mary Kay Ash" },
{ text: "Success is achieved and maintained by those who try and keep trying.", author: "W. Clement Stone" },
{ text: "Perseverance is failing 19 times and succeeding the 20th.", author: "Julie Andrews" },
{ text: "You don’t always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.", author: "Mandy Hale" },

];

let currentIndex = 0;

function displayNextQuote() {
  const quote = quotes[currentIndex];

  document.getElementById("quote").innerText = quote.text;
  document.getElementById("author").innerText = `— ${quote.author}`;

  // Animation effect (fade-in)
  const box = document.querySelector(".quote-box");
  box.classList.remove("fade-in");
  void box.offsetWidth;
  box.classList.add("fade-in");

  currentIndex++;

  // If reached end, start from first quote again
  if (currentIndex >= quotes.length) {
    currentIndex = 0;
  }
}

// Theme toggle function (Dark/Light Mode)
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Event listeners
document.getElementById("generate").addEventListener("click", displayNextQuote);
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

document.addEventListener("keydown", function(event) {
  if (event.code === "Space" || event.code === "Enter") {
    displayNextQuote();
  }
});

// Show first quote on page load
displayNextQuote();
