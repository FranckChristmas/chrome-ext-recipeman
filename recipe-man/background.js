// console.log("Background script loaded");

// chrome.action.onClicked.addListener(() => {
//   console.log("Bouton cliqué");
//   chrome.notifications.create({
//     type: "basic",
//     iconUrl: "icon48.png",
//     title: "Test",
//     message: "Ceci est un test",
//   });
// });

chrome.action.onClicked.addListener((tab) => {
  if (!tab || !tab.url) return;

  fetch("https://hook.eu2.make.com/zbf538sb8k79vfpm88ppfpsr612g4zh8", {
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
        iconUrl: "icon48.png",
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
