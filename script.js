const API_URL = 'https://caramback.onrender.com/api/blagues/random'

const questionElem = document.querySelector(".question");
const reponseElem = document.querySelector(".reponse");
const reloadButton = document.getElementById("reload");

async function chargerBlague() {
  questionElem.textContent = "Chargement...";
  reponseElem.textContent = "";
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    questionElem.textContent = data.question;
    reponseElem.textContent = data.reponse;
  } catch (error) {
    questionElem.textContent = "Erreur de chargement 😢";
    reponseElem.textContent = "";
    console.error("Erreur:", error);
  }
}

reloadButton.addEventListener("click", chargerBlague);

// Charger une blague au démarrage
chargerBlague();