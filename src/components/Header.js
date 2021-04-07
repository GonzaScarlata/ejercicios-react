import React, { useState } from 'react';


const Header = (props) => {
    const [msj, setMsj] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setMsj(" (from changed state)");
    }

    return (
        <div className="container">
            <h1>Hello {props.name}{msj}!</h1>
            <button onClick={handleChange}>
                Click me
            </button>
        </div>
    );
};

export default Header;