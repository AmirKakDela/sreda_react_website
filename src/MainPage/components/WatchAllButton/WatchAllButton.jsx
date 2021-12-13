import React from 'react';
import './watchAllButton.css';

const WatchAllButton = () => {
    return (
        <button className="watch-all">
            <span>Смотреть все</span>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 10.5L6 6L1.5 1.5" stroke="#6EA527" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
        </button>
    );
};

export default WatchAllButton;