import React from 'react';
import './advantages.css';

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="container container__advantages">
                <h2 className="advantages__title">
                    <span>Больше,</span> чем просто <br/>магазин фермерских <br/> продуктов
                </h2>
                <div className="advantages__wrapper">
                    <div className="advantages__card" id="advantages__card_1">
                        <h5 className="advantages__name">Экологичное</h5>
                        <p className="advantages__desc">Фермерские продукты на каждый день от малых производителей на
                            одном сайте</p>
                    </div>
                    <div className="advantages__card advantages__card_reverse" id="advantages__card_2">
                        <h5 className="advantages__name">Экологичное</h5>
                        <p className="advantages__desc">Фермерские продукты на каждый день от малых производителей на
                            одном сайте</p>
                    </div>
                    <div className="advantages__card advantages__card_reverse" id="advantages__card_3">
                        <h5 className="advantages__name">Экологичное</h5>
                        <p className="advantages__desc">Фермерские продукты на каждый день от малых производителей на
                            одном сайте</p>
                    </div>
                    <div className="advantages__card" id="advantages__card_4">
                        <h5 className="advantages__name">Экологичное</h5>
                        <p className="advantages__desc">Фермерские продукты на каждый день от малых производителей на
                            одном сайте</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Advantages;