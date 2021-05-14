const createTaskHtml = (name, description, assignedTo, dueDate, status) => {

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
}