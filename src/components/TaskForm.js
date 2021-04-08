import React, { useEffect, useState } from 'react';
import TasksList from './TasksList';


const TaskForm = () => {
    let localeStorageTasks = JSON.parse(localStorage.getItem("arrayTasks")) || [];
    const [task, setTask] = useState({task:"", id:""});
    const [arrayTasks, setArrayTasks] = useState(localeStorageTasks);

    useEffect(() => {
        let tasksToSave = JSON.stringify(arrayTasks);
        localStorage.setItem("arrayTasks", tasksToSave);
    }, [arrayTasks])

    const handleSubmit = (e) => {
        e.preventDefault();
        setArrayTasks([...arrayTasks, task]);
        setTask({task:"", id:""});
    };

    const generateId = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const deleteTask = (taskId) => {
        let modifiedArrayTasks = arrayTasks.filter((task) => task.id !== taskId);
        setArrayTasks(modifiedArrayTasks);
    };
    const handleChange = (e) => {
        const task = (e.target.value);
        const id = generateId();
        setTask({task:task, id:id});
    }

    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <label className="text-light" for="formGroupExampleInput">Tarea</label>
                <div class="form-group d-flex justify-content-between">
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Escriba una tarea" 
                        onChange={handleChange}
                        value={task.task}
                    />
                    <button className="btn btn-outline-light btn-primary" type="submit">
                            Agregar
                    </button>
                </div>
            </form>
            <TasksList arrayTasks={arrayTasks} deleteTask={deleteTask}/>
        </div>
    );
};

export default TaskForm;