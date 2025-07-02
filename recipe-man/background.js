chrome.action.onClicked.addListener((tab) => {
  if (!tab || !tab.url) return;

  fetch("https://hook.eu2.make.com/8xw9lkeqxnjc3flq7ymwiyttz92c1o4p", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: tab.url }),
  })
    .then(() => console.log("URL envoyée à Make :", tab.url))
    .catch((err) => console.error("Erreur d'envoi à Make :", err));
});
