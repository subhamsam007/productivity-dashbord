function openFunction() {
    var cards = document.querySelectorAll('.custom-card');
    var sections = document.querySelectorAll('.inside-section');
    var closeButtons = document.querySelectorAll('.close-btn');

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            sections[card.id].style.display = 'block';
        });
    });
    closeButtons.forEach((btn) => {
        btn.addEventListener('click', function () {
            sections[btn.id].style.display = 'none';
        });
    });
};
openFunction();
const formTododo = document.querySelector(".todo-form");
const formInput = document.querySelector(".todo-form-input");
const formButton = document.querySelector(".todo-form-button");
const taskDetails = document.querySelector(".todo-form-text");



let currentTask = [];
const taskContainer = document.querySelector(".task-list");


function renderTasks() {
    let taskRender = "";
    currentTask.forEach((info) => {
        taskRender += `<div class="my-10 p-10 justify-center flex grow gap-4 w-5/6 h-32 bg-input justify-between rounded-lg border text-2xl text-black font-bold shadow-xl shadow-gray-500 ml-16">
                                <h5 class="text-2xl text-black font-bold">${info.task}------------ <span>${info.details}</span></h5>
                                <button
                                    class="bg-green-500 text-black  font-bold text-xl px-4 py-2 rounded-xl shadow-md hover:shadow-lg shadow-gray-800 transition duration-300 active:scale-90">Mark
                                    as completed</button>
                        </div>`;
    });
    taskContainer.innerHTML = taskRender;
}


formTododo.addEventListener("submit", function (e) {
    e.preventDefault();
    const task = formInput.value;
    const details = taskDetails.value;
    const addTask = {
        task: task,
        details: details,
    }
    currentTask.push({ ...addTask });
    localStorage.setItem("task", JSON.stringify(currentTask));
    currentTask = JSON.parse(localStorage.getItem("task")) || [];
    formInput.value = "";
    taskDetails.value = "";
    renderTasks();
})
if (localStorage.getItem("task")) {
    currentTask = JSON.parse(localStorage.getItem("task"));
    renderTasks();
} else {
    console.log("task not found");
}
