function envoyer() {
  let point = 0;
  let q1 = document.quiz.question1.value;
  let q2 = document.quiz.question2.value;
  let q3 = document.quiz.question3.value;
  let q4 = document.quiz.question4.value;
  let q5 = document.quiz.question5.value;

  let result = document.getElementById("resultat");

  let sound1 = new Audio("./sounds/loose-voice.wav");
  let sound2 = new Audio("./sounds/loose-sound.wav");
  let sound3 = new Audio("./sounds/applause.wav");

  if (q1 == "Javascript") {
    point++;
  }
  if (q2 == "Librairie") {
    point++;
  }
  if (q3 == "10") {
    point++;
  }
  if (q4 == "express") {
    point++;
  }
  if (q5 == "react") {
    point++;
  }
  quiz.style.display = "none";

  if (result < 3) {
    result.textContent = `Ton résultat est de ${point} point, KASSOULA`;
    sound1.play();
  } else if (result == 3) {
    result.textContent = `Ton résultat est de ${point} point, PAS MAL`;
    sound2.play();
  } else {
    result.textContent = `Ton résultat est de ${point} point, BRAVO`;
    sound3.play();
  }
}
