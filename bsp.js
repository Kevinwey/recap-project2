const form = document.querySelector('[data-js="form"]');
const cardQuestion = document.querySelector('[data-js="questionCard"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  addQuestion(data);
});

function addQuestion(data) {
  const cardList = document.createElement('li class="card-list__item"');
  const card = document.createElement('article class="card"');
  const question = document.createElement('h2 class="card__question"');
  const button = document.createElement('button class="card__button-answer"');
  const answer = document.createElement('p class="card__answer"');
  question.textContent = data.question;
  answer.textContent = data.answer;
  cardList.append(card, question, button, answer);
  cardQuestion.append(cardList);
}
