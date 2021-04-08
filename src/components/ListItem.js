import React from 'react';

const ListItem = (props) => {
    return (
        <div className="container">
            <li class="list-group-item d-flex justify-content-between">
                {props.value}
                <button className="btn btn-danger" onClick={() => props.deleteTask(props.taskId)}>
                    Borrar
                </button>
            </li>
            
        </div>
    );
};

export default ListItem;