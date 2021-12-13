import React from 'react';
import './popularSets.css';
import ArrowSlideButton from "../components/ArrowSlideButton/ArrowSlideButton";
import WatchAllButton from "../components/WatchAllButton/WatchAllButton";
import set1 from '../../assets/images/set1.png';
import hitSales from '../../assets/images/icons/hit_sales.svg';


export const Set = (props) => {
    return (
        <div className="set__wrapper">
            {props.hit ? <img src={hitSales} alt="hit" className="set__hit-sales"/> : null}
            <div className={`set set__${props.color}`}>
                <div className="set__title">Запас сезонных овощей на все лето</div>
                <div className="set__image-wrapper">
                    <img src={props.image} alt="set 1"/>
                </div>
                <button className="arrow__button arrow__button_set">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 14.5L8.25 8.25L2 2" stroke="#474747" stroke-width="3" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </button>
                <p className="set__price">от 990 ₽</p>
            </div>
        </div>
    )
}

const PopularSets = () => {
    return (
        <div className="popular-sets">
            <div className="container ">
                <div className="popular-sets__title-row">
                    <div className="popular-sets__wrapper">
                        <h2 className="popular-sets__title title">Популярные наборы</h2>
                        <WatchAllButton/>
                    </div>
                    <ArrowSlideButton/>
                </div>
                <div className="container__popular-sets">
                    <div className="sets__row">
                        <Set color={"yellow"} image={set1} hit={true}/>
                        <Set color={"green"} image={set1}/>
                        <Set color={"pink"} image={set1}/>
                        <Set color={"yellow"} image={set1}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularSets;