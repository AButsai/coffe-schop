const productCards = document.querySelectorAll('.card');
const ratingProductCards = document.querySelectorAll('.card__rating-wrap');
const priceProductCards = document.querySelectorAll('.card__prise');
const buttonProductCards = document.querySelectorAll('.product__btn-card');

const changeVisuallyHidden = (array, index) => {
  array.forEach((elem, indexElem) => {
    if (index === indexElem) {
      if (elem.classList.contains('visually-hidden')) {
        elem.classList.remove('visually-hidden');
      } else {
        elem.classList.add('visually-hidden');
      }
    }
  });
};

productCards.forEach((productCard, index) => {
  productCard.addEventListener('mouseover', () => {
    changeVisuallyHidden(ratingProductCards, index);
    changeVisuallyHidden(priceProductCards, index);
    changeVisuallyHidden(buttonProductCards, index);
  });

  productCard.addEventListener('mouseout', () => {
    changeVisuallyHidden(ratingProductCards, index);
    changeVisuallyHidden(priceProductCards, index);
    changeVisuallyHidden(buttonProductCards, index);
  });
});
