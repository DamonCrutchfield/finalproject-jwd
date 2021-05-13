const newTaskNameInput1 = document.querySelector('#taskname');
const newTaskNameInput2 = document.querySelector('#description');
const newTaskNameInput3 = document.querySelector('#assignedto');
const newTaskNameInput4 = document.querySelector('#duedate');

const alert1 = document.querySelector('#alert1');
const alert2 = document.querySelector('#alert2');
const alert3 = document.querySelector('#alert3');
const alert4 = document.querySelector('#alert4');

const taskButton = document.querySelector('#add-task');
//Add the logic to display or hide the error message when the form is submited

alert1.style.display = 'none';
alert2.style.display = 'none';
alert3.style.display = 'none';
alert4.style.display = 'none';
//Add the logic to hide the error message when the user clicks the submit button and the form data is valid.

const validFormFieldInput = (data) => {
    let value = data.value;
    if (value !== '' && value !== null)  {
        console.log(value);
        return true;
    }
    return false;
}

taskButton.addEventListener('click', () => {
    
    if (!validFormFieldInput(newTaskNameInput1)) {
        alert1.style.display = 'block';
        setTimeout(() => {
            alert1.style.display = 'none';
        }, 5000)
    }
    if (!validFormFieldInput(newTaskNameInput2)) {
        alert2.style.display = 'block';
        setTimeout(() => {
            alert2.style.display = 'none';
        }, 5000)
    }
    if (!validFormFieldInput(newTaskNameInput3)) {
        alert3.style.display = 'block';
        setTimeout(() => {
            alert3.style.display = 'none';
        }, 5000)
    }
});








