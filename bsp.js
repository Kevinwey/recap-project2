const form = document.querySelector('[data-js="form"]');
const cardQuestion = document.querySelector('[data-js="questionCard"]');
const questionElement = document.querySelector('[data-js="question"]');
const answerElement = document.querySelector('[data-js="answer"]');
const amountLeft1 = document.querySelector('[data-js="amountLeft1"]');
const amountLeft2 = document.querySelector('[data-js="amountLeft2"]');
const maxLength = questionElement.getAttribute("maxlength");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  addQuestion(data);

  event.target.question.focus();
  form.reset();
});

function addQuestion(data) {
  const cardList = document.createElement("li");
  const card = document.createElement("article");
  const question = document.createElement("h2");
  const button = document.createElement("button");
  const answer = document.createElement("p");
  const tagList = document.createElement("ul");
  const tag = document.createElement("li");
  const bookmark = document.createElement("div");
  const bookmarkButton = document.createElement("button");
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  cardList.classList.add("card-list__item");
  card.classList.add("card");
  question.classList.add("card__question");
  button.classList.add("card__button-answer");
  answer.classList.add("card__answer");
  tagList.classList.add("card__tag-list");
  tag.classList.add("card__tag-list-item");
  bookmark.classList.add("card__button-bookmark");
  bookmarkButton.classList.add("bookmark");
  iconSvg.classList.add("bookmark__icon");
  iconPath.setAttribute(
    "d",
    "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  );
  iconSvg.setAttribute("viewBox", "0 0 24 24");

  question.textContent = data.question;
  button.textContent = "Show Answer";
  answer.textContent = data.answer;
  tag.textContent = `# ${data.tag}`;

  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
  });

  button.addEventListener("click", () => {
    if (answer.classList.contains("card__answer") === true) {
      button.textContent = "Show Answer";
    } else {
      button.textContent = "Hide Answer";
    }
    answer.classList.toggle("card__answer");
  });

  iconSvg.appendChild(iconPath);
  bookmarkButton.append(iconSvg);
  bookmark.append(bookmarkButton);
  tagList.append(tag);
  card.append(question, button, answer, tagList, bookmark);
  cardList.append(card);
  cardQuestion.append(cardList);
}

const updateAmountLeft = (length) => {
  amountLeft1.textContent = length;
};

const updateAmountLeft2 = (length) => {
  amountLeft2.textContent = length;
};

questionElement.addEventListener("input", () => {
  updateAmountLeft(maxLength - questionElement.value.length);
});

answerElement.addEventListener("input", () => {
  updateAmountLeft2(maxLength - answerElement.value.length);
});

/* `<article class="card">
  <h2 class="card__question">
    ${data.question}
  </h2>
  <button class="card__button-answer" type="button">
    Show answer
  </button>
  <p class="card__answer">${data.answer}</p>
  <ul class="card__tag-list">
    <li class="card__tag-list-item">#${data.tag}</li>
    <li class="card__tag-list-item">#mastereraqus</li>
    <li class="card__tag-list-item">#english voices</li>
  </ul>
  <div class="card__button-bookmark">
    <button class="bookmark" aria-label="bookmark" type="button">
      <svg
        class="bookmark__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 24 24"
      >
        <path
          d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
        />
      </svg>
    </button>
  </div>
</article>`; */
