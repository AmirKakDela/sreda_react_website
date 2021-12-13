import React from 'react';
import './arrowSlideButton.css';

const ArrowSlideButton = (props) => {
    return (
        <div className="arrow-slide__row" >
            <div className="arrow-slide__button _prev" onClick={props.prevSlide}>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22L2 12L12 2" stroke="#4B4B4B" strokeWidth="3" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="arrow-slide__button _next" onClick={props.nextSlide}>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 22L12 12L2 2" stroke="#4B4B4B" strokeWidth="3" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );
};

export default ArrowSlideButton;