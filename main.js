const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;
let clickEvent = true;

function flipCard() {
    if (clickEvent && !this.classList.contains("flip")) {

        this.classList.add("flip");

        if (!hasFlippedCard) {

            hasFlippedCard = true;
            firstCard = this;

        } else {
            hasFlippedCard = false;
            secondCard = this;
            let trueGame = firstCard.dataset.value === secondCard.dataset.value;
            clickEvent = false;
            if (trueGame) {
                clickEvent = true;
            } else {
                setTimeout(() => {
                    firstCard.classList.remove("flip");
                    secondCard.classList.remove("flip");
                    clickEvent = true;
                }, 1000)
            }
        }
    }
}


cards.forEach(card => card.addEventListener("click", flipCard));

for (let i = 0; i < cards.length; i++) {
    let sOrder = Math.floor(Math.random() * 12);
    cards[i].style.order = sOrder;
}