import React from 'react';
import { Image } from 'react-bootstrap';

const EmployeeAvatar = (props) => {
    return (
        <div>
            <Image src={props.img} rounded />
        </div>
    );
};

export default EmployeeAvatar;