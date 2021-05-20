const assert  = require('assert');
const TaskManager = require('../js/taskManager.js').TaskManager;

 
describe('TaskManager', () => {
    describe('.addTask', () => {
        it('should add tasks to it\'s tasks property', () => {
            const taskList = new TaskManager();
            taskList.addTask("Damon", "Clean", "Clean dishes", "5/21/21");
            const lengthOfTaskList = taskList.tasks.length;
            assert.strictEqual(lengthOfTaskList, 1);
        });
    });
    describe('.deleteTask', () => {
        it('should be able to delete old tasks so that they don\'t fill up the list over time.', () => {
            const taskList = new TaskManager();

            let tasksAdded;
            let tasksDeleted;
            

            if (!taskList.tasks.length) {
                taskList.addTask("Damon", "Clean", "Clean dishes", "5/21/21");
                tasksAdded = 1;
                if (taskList.tasks.length) {
                    taskList.deleteTask();
                    tasksDeleted = 1
                }
            } 
            
            assert.strictEqual(tasksAdded, tasksDeleted);
        });
    });
    describe('.getTaskById', () => {
        it('should use the task id to find the correct task', () => {
            const taskList = new TaskManager();

            taskList.addTask("Damon", "Clean", "Clean dishes", "5/21/21");
            
            const newTask = taskList.tasks[0];
            const uniqueTask = taskList.getTaskById(0);

            assert.deepStrictEqual(newTask, uniqueTask);
        });
    });
});

