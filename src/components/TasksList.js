import React from "react";
import ListItem from "./ListItem";

const TasksList = (props) => {
    return (
        <div>
            <ul class="list-group">
                {props.arrayTasks.map((value, index) =>(
                    <ListItem 
                        value={value.task} 
                        taskId={value.id} 
                        index={index}
                        deleteTask={props.deleteTask}/>
                ))}
            </ul>
        </div>
    );
};

export default TasksList;
