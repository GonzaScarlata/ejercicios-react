import React from 'react';

const ColorCard = (props) => {

   // const colorsFromLS = JSON.parse(localStorage.getItem("colorsArray")) || [];

    

    const style = {background: props.color, width: "5rem", height: "5rem"};
    return (
        <button className="card m-4 rounded-circle" style={style} onClick={() => props.deleteColor(props.index)}></button>  
    );
};

export default ColorCard;