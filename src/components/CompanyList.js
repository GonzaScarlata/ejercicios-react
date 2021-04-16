import React from "react";
import { ListGroup } from "react-bootstrap";
import EmployeeRow from "./EmployeeRow";
//import logo  from '../assets/img/logo192.png';

const CompanyList = () => {
    const avatar = "https://tdj.gg/uploads/attachs/20560_w9RC4W-QqXw-200x200.jpg";
    let empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: avatar },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: avatar },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: avatar },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: avatar },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: avatar },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: avatar },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: avatar },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: avatar },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: avatar },
      
      ];
      
    return (
        <div className="container w-75 d-flex justify-content-center">
            <ListGroup>
                {empleados.map((value, index)=>(
                    <ListGroup.Item>
                        <EmployeeRow empleado={value} key={index}/>
                    </ListGroup.Item>
                ))}
                
            </ListGroup>
        </div>
    );
};

export default CompanyList;
