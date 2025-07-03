chrome.action.onClicked.addListener((tab) => {
  if (!tab || !tab.url) return;

  fetch("https://hook.eu2.make.com/74b18l7mrxr7hv8kudcwei7dd8ad7322", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-make-api-key": "chrome-extension-api-key-75$",
    },
    body: JSON.stringify({ url: tab.url }),
  })
    .then(() => console.log("URL envoyée à Make :", tab.url))
    .catch((err) => console.error("Erreur d'envoi à Make :", err));
});
