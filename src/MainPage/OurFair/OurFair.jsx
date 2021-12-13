import React from 'react';
import './ourFair.css';
import ArrowSlideButton from "../components/ArrowSlideButton/ArrowSlideButton";
import FairCategory from "../components/FairCategory/FairCategory";
import fair1 from '../../assets/images/fair1.png';
import fair2 from '../../assets/images/fair2.png';
import fair3 from '../../assets/images/fair3.png';
import fair4 from '../../assets/images/fair4.png';
import fair5 from '../../assets/images/fair5.png';
import fairAll from '../../assets/images/fair-all-categories.png';

const OurFair = () => {
    return (
        <div className="fair">
            <div className="container">
                <div className="fair__title-row">
                    <h2 className="fair__title title">Наша ярмарка</h2>
                    <ArrowSlideButton/>
                </div>
                <div className="fair__categories-row">
                        <FairCategory photo={fairAll} desc="Все категории"/>
                        <FairCategory photo={fair1} desc="Овощи"/>
                        <FairCategory photo={fair2} desc="Ягоды и фрукты"/>
                        <FairCategory photo={fair3} desc="Зелень"/>
                        <FairCategory photo={fair4} desc="Продукты жарких стран"/>
                        <FairCategory photo={fair5} desc="Пробные наборы"/>
                </div>
            </div>
        </div>
    );
};

export default OurFair;