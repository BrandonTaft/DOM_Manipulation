
    const cards = document.getElementsByClassName("option");
   for(let i = 0; i < cards.length; i++) {
     cards[i].addEventListener("click", changeCard)
   }
    function changeCard() {
        Array.from(cards).forEach(card => {
            card.classList.remove("active");
        });
        this.classList.add("active")
    }