const APIURL = `https://api.adviceslip.com/advice`;
const adviceID = document.getElementById("advice-id");
const advice = document.getElementById("advice");
const btn = document.getElementById("generate-advice");

function generateAdvice() {
  fetch(APIURL)
    .then((res) => {
      let data = res.json();
      return data;
    })
    .then((data) => {
      const id = data.slip.id;
      const adviceText = data.slip.advice;

      adviceID.textContent = id;
      advice.textContent = adviceText;

      readText(adviceText);
    });
}

btn.onclick = function () {
  generateAdvice();
};

function readText(text) {
  const voice = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(voice);
}
