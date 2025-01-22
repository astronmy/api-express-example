const fs = require('fs').promises;
const dataFile = "./data/tasks.json";

const getTasks = async () => {
    try {
        const data = await fs.readFile(dataFile, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(error);
        return [];
    }
}

const saveTask = async (task) => {
    try {
        const tasks = await getTasks();
        tasks.push(task);
        await fs.writeFile(dataFile, JSON.stringify(tasks));
        console.log('task storage!')
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

const updateTask = async (taskUpdated, taskId) => {
    try {
        const tasks = await getTasks();
        const taskIndex = tasks.findIndex((item) => item.id === taskId);
        
        if (taskIndex === -1) {
            return null;
        }

        tasks[taskIndex] = { ...tasks[taskIndex], ...taskUpdated };

        await fs.writeFile(dataFile, JSON.stringify(tasks, null, 2));
        return tasks[taskIndex]; 

    } catch (error) {
        console.error(error.message);
        return null;
    }
}

const findTask = async (taskId) => {
    try {
        const tasks = await getTasks();
        const found = tasks.find((item) => item.id === taskId);
        if (found) {
            return found; 
        }
        return null;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

const deleteTask = async (taskId) => {
    try {
        const tasks = await getTasks();
        const filterCollection = tasks.map((item) => item.id !== taskId);
        await fs.writeFile(dataFile, JSON.stringify(filterCollection));
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

module.exports = {
    getTasks,
    saveTask,
    findTask,
    deleteTask,
    updateTask
};