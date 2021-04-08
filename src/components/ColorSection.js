import React from 'react';
import ColorCard from './ColorCard';

const ColorSection = (props) => {
    return (
        <div className="d-flex flex-wrap ">
            {props.colorsArray.map((color, index) => (
            <ColorCard color={color} key={index}/>
            ))}
        </div>
    );
};

export default ColorSection;