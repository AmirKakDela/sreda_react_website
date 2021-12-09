import React from 'react';
import './firstSection.css';
import spot from '../../assets/images/spot.svg';
import circle from '../../assets/images/circle-first.svg';
import circleMini from '../../assets/images/circleMini-first.svg';
import vegetables from '../../assets/images/vege.png';

const FirstSection = () => {
    return (
        <main className="first">
            <div className="container container__first">
                <div className="first__body">
                    <h1 className="first__title">
                        <span>Едим своё</span> — ваша первая онлайн дача
                    </h1>
                    <p className="first__subtitle">
                        Больше чем магазин фермерских продуктов. <br/> Заказывайте, пробуйте, сажайте.
                    </p>
                    <button className="first__button button">
                        В каталог
                    </button>
                </div>
                <div className="first__image">
                    <div className="spot">
                        <img src={vegetables} alt="" className='vegetables'/>
                        <img src={spot} alt="" className="spot__first"/>
                        <img src={circleMini} alt="" className="circle-mini__first"/>
                        <img src={circle} alt="" className="circle__first"/>
                    </div>

                </div>
            </div>
            <div className="first__slider slider">
                <div className="container slider__row">
                    <div className="slider__dots">
                        <div className="slider__dot"></div>
                        <div className="slider__dot slider__dot__active"></div>
                        <div className="slider__dot"></div>
                        <div className="slider__dot"></div>
                    </div>
                    <div className="arrow-slide__row">
                        <div className="arrow-slide__button _prev">
                            <svg width="14" height="24" viewBox="0 0 14 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22L2 12L12 2" stroke="#4B4B4B" stroke-width="3" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="arrow-slide__button _next">
                            <svg width="14" height="24" viewBox="0 0 14 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 22L12 12L2 2" stroke="#4B4B4B" stroke-width="3" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FirstSection;