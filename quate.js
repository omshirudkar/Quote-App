async function fetchQuote() {
  const apiKey = "S8vooaobIq3YedS7cr4t4jiRg8i9RzxyDziym6Di";
  const url = `https://api.api-ninjas.com/v1/quotes?category=inspirational`;

  try {
    const response = await fetch(url, {
      headers: { "X-Api-Key": apiKey },
    });
    if (!response.ok) throw new Error("Failed to fetch quote");

    const data = await response.json();
    displayQuote(data[0]);
    console.log(data);
    
  } catch (error) {
    document.getElementById("quoteDisplay").innerText = error.message;
  }
}

function displayQuote(quote) {
  const quoteText = `"${quote.quote}" — ${quote.author}`;
  document.getElementById("quoteDisplay").innerText = quoteText;
}
