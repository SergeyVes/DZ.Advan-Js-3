const allProducts = document.querySelector(".reviews");

for (let i = 0; i < localStorage.length; i++) {
let product = localStorage.key(i);
let reviewSet = JSON.parse(localStorage.getItem(product));

//добавление списка продуктов
const productElem = document.createElement("div");
allProducts.insertAdjacentElement("beforeend", productElem);
productElem.insertAdjacentHTML(
    "beforeend",
    `<h2>${product} <button onclick="openReview(this)">Показать отзывы</button> </h2>`
);

//добавление блока для отзывов
const reviewsElem = document.createElement("div");
reviewsElem.hidden = true;
productElem.insertAdjacentElement("beforeend", reviewsElem);

//заполнение отзывов
reviewSet.forEach((element) => {
    const newReview = document.createElement("div");
    reviewsElem.insertAdjacentElement("beforeend", newReview);

    const reviewText = document.createElement("span");
    reviewText.textContent = element;
    newReview.insertAdjacentElement("beforeend", reviewText);

    //кнопка удаления
    newReview.insertAdjacentElement(
    "beforeend",
    deleteReviewBtn(reviewText, reviewSet, product)
    );
});
}

//создание кнопки удаления отзыва
function deleteReviewBtn(textReview, setReview, product) {
const delButton = document.createElement("button");
delButton.textContent = "Удалить";

delButton.addEventListener("click", () => {
    if (setReview.length > 1) {
    let indexItem = setReview.findIndex(
        (element) => element === textReview.textContent
    );
    setReview.splice(indexItem, 1);
    localStorage.setItem(product, JSON.stringify(setReview));
    } else {
    localStorage.removeItem(product);
    delButton.parentElement.parentElement.parentElement.remove();
    }
    textReview.parentElement.remove();
    delButton.remove();
});

return delButton;
}

//функция открытия-скрытия блока отзывов
function openReview(elem) {
let hiddenElement = elem.parentElement.parentElement.lastChild;
if (hiddenElement.hidden) {
    hiddenElement.hidden = false;
    elem.textContent = "Скрыть отзывы";
} else {
    hiddenElement.hidden = true;
    elem.textContent = "Показать отзывы";
}
}