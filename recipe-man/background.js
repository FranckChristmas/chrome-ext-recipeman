chrome.action.onClicked.addListener((tab) => {
  if (!tab || !tab.url) return;

  fetch("https://hook.eu2.make.com/quof54rhvpqbyn8q4uk7wpu6back9b80", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: tab.url }),
  })
    .then(() => {
      console.log("URL envoyée à Make :", tab.url);
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon48.png", // Assure-toi que l’icône existe
        title: "Recette envoyée",
        message: "La recette a bien été envoyée à Make !",
      });
    })
    .catch((err) => {
      console.error("Erreur d'envoi à Make :", err);
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon48.png",
        title: "Erreur",
        message: "L’envoi à Make a échoué.",
      });
    });
});
