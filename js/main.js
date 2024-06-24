document.getElementById("menuIcon").addEventListener("click", function () {
  document.getElementById("navList").classList.toggle("show");
});

let currentIndex = 0;
const cardsWrapper = document.querySelector(".cards-wrapper");
const cardWidth = document.querySelector(".card").offsetWidth;
const cards = document.querySelectorAll(".card");
const numCards = cards.length;
const visibleCards = 2; // Number of cards visible at a time

function slideNext() {
  if (currentIndex < numCards - visibleCards) {
    currentIndex++;
    cardsWrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}

function slidePrev() {
  if (currentIndex > 0) {
    currentIndex--;
    cardsWrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}

