var cards = document.querySelectorAll('.custom-card');
var sections = document.querySelectorAll('.inside-section');
var closeButtons = document.querySelectorAll('.close-btn');

cards.forEach(function(card){
    card.addEventListener('click', function() {
        sections[card.id].style.display = 'block';
    });
});
closeButtons.forEach((btn)=>{
   btn.addEventListener('click', function() {
        sections[btn.id].style.display = 'none';
    });
});