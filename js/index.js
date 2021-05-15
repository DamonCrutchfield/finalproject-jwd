const task = new TaskManager();
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

taskButton.addEventListener('click', () => {
    
    let taskFieldInput = [newTaskNameInput1, newTaskNameInput2, newTaskNameInput3, newTaskNameInput4];
    let alertMessages = [alert1, alert2, alert3, alert4];

    taskFieldInput.forEach((input, i) => {
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

//Create a taskHtml variable with the result of calling the createTaskHtml function, making sure to pass a value for each parameter.
taskHtml = createTaskHtml("Take out Trash", "Take out the trash to the front of the house", "Damon", "5/21/21", "TODO");
//console.log() the taskHTML variable
console.log(taskHtml);

const newTaskForm = document.forms[0];

newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validInput) {
        task.addTask(newTaskNameInput1.value, newTaskNameInput2.value, newTaskNameInput3.value, newTaskNameInput4.value);
        task.render();
        console.log(task.tasks);
        newTaskNameInput1.value = '';
        newTaskNameInput2.value = '';
        newTaskNameInput3.value = '';
        newTaskNameInput4.value = '';
    }
});
 
/**
 * Make sure a new TaskManager is initialized near the top of the file.
 * 
In index.js, add an event listener to the New Task form, listening to the submit event. If there is already an event listener used for validation, use that one.
When the submit event fires, if validation of the form is successful, use the values of each input in the form to call the taskManager's addTask method.
Note: Make sure to prevent the default action of the form!
Clear the values from each form input, ready for the next submission.
 */







