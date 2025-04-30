const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');

// Function to fetch quote from API
async function getQuote() {
  try {
    const response = await fetch('https://dummyjson.com/quotes');
    const data = await response.json();
    quoteText.innerText = `"${data.quotes[0].quote}"`;
    quoteAuthor.innerText = `- ${data.quotes[0].author}`;
  } catch (error) {
    quoteText.innerText = "Oops! Failed to fetch quote.";
    quoteAuthor.innerText = "";
    console.error(error);
  }
}

// Fetch a quote on page load
getQuote();