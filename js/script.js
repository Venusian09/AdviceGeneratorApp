const quoteId = document.querySelector(".quote-wrapper__id");
const quote = document.querySelector(".quote-wrapper__quote");
const quoteButton = document.querySelector(".quote-wrapper__button");

async function getData() {
  const apiUrl = "https://api.adviceslip.com/advice";
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });

  if (response.status !== 200) {
    console.log("error");
  } else {
    const data = await response.json();
    console.log(data);
    quoteId.textContent = `Advice #${data.slip.id}`;
    quote.textContent = `"${data.slip.advice}"`;
  }
}

getData();
quoteButton.addEventListener("click", function () {
  getData();
});
