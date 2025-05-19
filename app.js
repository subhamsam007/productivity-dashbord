function openFunction(){
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
};
openFunction();
const formTododo = document.querySelector(".todo-form");
const formInput = document.querySelector(".todo-form-input");
const formButton = document.querySelector(".todo-form-button");    
const taskDetails = document.querySelector(".todo-form-text");

formTododo.addEventListener("submit", function(e){
    e.preventDefault();
    const task = formInput.value;
    const details = taskDetails.value;
    
})

const currentTask =[{
    task: "Task 1",
    details: "Details of Task 1",
    status: "completed"
},
{
    task: "Task 2",
    details: "Details of Task 2",
    status: "pending"
}
];

currentTask.forEach((task) => {
 
    const taskList =document.querySelector(".task-list");
    console.log(taskList.value);
})