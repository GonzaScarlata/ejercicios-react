import React from 'react';

const ListItem = (props) => {
    return (
        <div className="container">
            <li class="list-group-item d-flex justify-content-between">{props.value}</li>
            <button className="btn btn-danger" onClick={() => props.deleteTask(props.taskId)}>Borrar</button>
        </div>
    );
};

export default ListItem;