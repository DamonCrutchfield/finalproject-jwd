const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
    const html = 
    `<li data-task-id=${id} class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
        <button type="button" class="btn btn-success done-button">Done</button>
        <button type="button" class="btn btn-danger delete-button">Delete</button>
    </li>`
    return html;
}

class TaskManager {

    constructor(currentId=0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask (name, description, assignedTo, dueDate, status="TODO") {

        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        }

        this.tasks.push(task);

    }

    render () {

        const tasksHtmlList = [];

        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            let taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, task.dueDate, task.status, task.id);
            tasksHtmlList.push(taskHtml);
        }

        const taskHtml = tasksHtmlList.join('\n');
        document.querySelector('#tasks-list').innerHTML = taskHtml;
    }

    getTaskById (taskId) {

        let foundTask;

        this.tasks.forEach((task) => {
            if(task.id === taskId) {
                foundTask = task;
            } 
        });

        return foundTask;

    }

    save () {

        const tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);

        const currentId = JSON.stringify(this.currentId);
        localStorage.setItem('currentId', currentId);

    } 

    load () {

        if (localStorage.getItem('tasks')) {
            const tasksJson = localStorage.getItem('tasks');
            this.tasks = JSON.parse(tasksJson);
        }

        if (localStorage.getItem('currentId')) {
            const currentId = localStorage.getItem('currentId');
            this.currentId = JSON.parse(currentId);
        }

    }

    deleteTask (taskId) {

        const newTasks = [];

        for (let item = 0; item < this.tasks.length; item++) {
            const task = this.tasks[item];
            if (task.id !== taskId) {
                newTasks.push(task);
            }
        }

        this.tasks = newTasks;
    }
}

module.exports.TaskManager = TaskManager;