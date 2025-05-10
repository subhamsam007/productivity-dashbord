var cards = document.querySelectorAll('.custom-card');
var sections = document.querySelectorAll('.inside');


cards.forEach(function(card) {
    card.addEventListener("click", function(){
        sections[card.id].style.display = "block";
    })
});