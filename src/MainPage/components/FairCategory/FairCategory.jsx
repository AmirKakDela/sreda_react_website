import React from 'react';
import './fairCategory.css';


const FairCategory = (props) => {
    return (
        <div className="fair-category">
            <img src={props.photo} alt="fair category photo"/>
            <p className="fair-category__desc">{props.desc}</p>
        </div>
    );
};

export default FairCategory;