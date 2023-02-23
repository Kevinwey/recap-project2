// phew… not a lot going on here. Please add some code!
const bookmark = document.querySelector(".bookmark");

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector(".card__button-answer");
const answer = document.querySelector(".card__answer");

answerButton.addEventListener("click", () => {
  if (answer.classList.contains("card__answer") === true) {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
  answer.classList.toggle("card__answer");
});
