const express = require("express");
const app = express();
const port = 3000;

const { getTasks, saveTask, findTask, deleteTask, updateTask } = require("./services/storage");

app.use(express.json());

app.get("/", (request, response) => { response.send("Upload our first express js server")});

app.get("/tasks", async (request, response) => { 
    try {
        const tasks = await getTasks();  
        response.status(200).json(tasks);
    } catch (error) {
        response.status(500).json({ error: "Error fetching tasks" });
    }
});

app.get("/tasks/:id", async (request, response) => { 
    try {
        const taskId = parseInt(request.params.id);
        const task = await findTask(taskId); 
        if (!task) {
            return response.status(404).json({ error: "Task not found" });
        }
        response.json(task);

    } catch (error) {
        response.status(500).json({ error: "server error" });
    }
});

app.post("/tasks", async (request, response) => { 
    const {title, description, completed} = request.body;
    if (!description || !title) {
        return response.status(400).json({ error: "bad request" });
    }

    const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        completed: completed || false
    };

    try {
        await saveTask(newTask);  
        response.status(201).json(newTask);
    } catch (error) {
        response.status(500).json({ error: "Server error" });
    }
});

app.put("/tasks/:id", async (request, response) => { 
    
    const taskId = parseInt(request.params.id);
    const {title, description, completed} = request.body;
    
    if (!description || !title) {
        return response.status(400).json({ error: "bad request" });
    }

    const task = {
        title: title,
        description: description,
        completed: completed || false
    };

    try {
        const taskFound = await findTask(taskId); 

        if (!taskFound) {
            task.id = Date.now();
            
            await saveTask(task);  
            response.status(201).json(task);
        }

        await updateTask(task, taskId)
        response.status(204).json();
        
    } catch (error) {
        response.status(500).json({ error: "Server error" });
    }

    
});

app.delete("/tasks/:id", async (request, response) => { 
    try {
        const taskId = parseInt(request.params.id);
        const task = await findTask(taskId); 
        if (!task) {
            return response.status(404).json({ error: "Task not found" });
        }
        await deleteTask(taskId);
        return response.status(204).json();

    } catch (error) {
        response.status(500).json({ error: "server error" });
    }
});

app.listen(port, () => {
    console.log(`listening port http://localhost:${port}`)
});
