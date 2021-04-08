import React from 'react';

const ColorCard = (props) => {

    const style = {background: props.color, width: "5rem", height: "5rem"};
    return (
        <div className="card m-4 rounded-circle" style={style}>
            
        </div>
    );
};

export default ColorCard;