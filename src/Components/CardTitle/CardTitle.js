import React from 'react';
import './CardTitle.css';

const CardTitle = (props) => {
    return (
        <div className="mt-5">
            <p className="cardTitle">{props.title}</p>
        </div>
    );
};

export default CardTitle;