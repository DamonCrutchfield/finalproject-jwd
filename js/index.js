const newTask = new TaskManager();
newTask.load();
newTask.render();

const newTaskNameInput1 = document.querySelector('#taskname');
const newTaskNameInput2 = document.querySelector('#description');
const newTaskNameInput3 = document.querySelector('#assignedto');
const newTaskNameInput4 = document.querySelector('#duedate');


const alert1 = document.querySelector('#alert1');
const alert2 = document.querySelector('#alert2');
const alert3 = document.querySelector('#alert3');
const alert4 = document.querySelector('#alert4');

const taskButton = document.querySelector('#add-task');

alert1.style.display = 'none';
alert2.style.display = 'none';
alert3.style.display = 'none';
alert4.style.display = 'none';

const validFormFieldInput = (data) => {
    let value = data.value;
    if (value !== '' && value !== null)  {
        console.log(value);
        return true;
    }
    return false;
}

let validInput = 0;

let taskFormInput = [newTaskNameInput1, newTaskNameInput2, newTaskNameInput3, newTaskNameInput4];
let alertMessages = [alert1, alert2, alert3, alert4];

taskButton.addEventListener('click', () => {
    
    taskFormInput.forEach((input, i) => {
        if (!validFormFieldInput(input)) {
            alertMessages[i].style.display = 'block';
            setTimeout(() => {
                alertMessages[i].style.display = 'none';
            }, 5000)   
        } else {
            validInput += 1;
        }
    });

});

const newTaskForm = document.forms[0];

newTaskForm.addEventListener("submit", (event) => {

    event.preventDefault();
    if (validInput === taskFormInput.length) {
        newTask.addTask(newTaskNameInput1.value, newTaskNameInput2.value, newTaskNameInput3.value, newTaskNameInput4.value);
        newTask.save();
        newTask.render();
        validInput = 0;
        newTaskNameInput1.value = '';
        newTaskNameInput2.value = '';
        newTaskNameInput3.value = '';
        newTaskNameInput4.value = '';
    }
});

const tasksList = document.querySelector('#tasks-list');

tasksList.addEventListener('click', (event) => { 

    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        const task = newTask.getTaskById(taskId);
        task.status = "DONE";
        console.log(task);
        newTask.save();
        newTask.render();
    }

});








