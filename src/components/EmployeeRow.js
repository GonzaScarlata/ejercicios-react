import React from 'react';
import EmployeeAvatar from './EmployeeAvatar';


const EmployeeRow = (props) => {
    return (
        <div className="container-fluid d-flex   ">
            <div>
                 <EmployeeAvatar img={props.empleado.pic} key={props.id}/> 
            </div>
            <div className="d-flex ">
                <p className="m-2">
                    {props.empleado.fullName}
                </p>
                <div className="d-flex align-self-center flex-column">
                    <p>{props.empleado.title}</p>
                    <b className="bg-primary text-light">
                        {props.empleado.department}
                    </b>
                </div>
            </div>
        </div>
    );
};

export default EmployeeRow;