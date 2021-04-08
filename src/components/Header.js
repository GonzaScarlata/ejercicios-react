import React, { useState } from 'react';


const Header = (props) => {
    const [msj, setMsj] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        if (msj === "") {
            setMsj(" (from changed state)");
        } else {
            setMsj("");
        }
        
    }

    return (
        <div className="container">
            <h1 className="my-4 text-light">Hello {props.name}{msj}!</h1>
            <button className="btn-primary btn" onClick={handleChange}>
                Click me
            </button>
        </div>
    );
};

export default Header;