import React from 'react';
import './firstSection.css';
import spot from '../../assets/images/spot.svg';
import circle from '../../assets/images/circle-first.svg';
import circleMini from '../../assets/images/circleMini-first.svg';
import vege1 from '../../assets/images/vege.png';
import vege2 from '../../assets/images/vege2.png';
import vege3 from '../../assets/images/vege3.png';
import ArrowSlideButton from "../components/ArrowSlideButton/ArrowSlideButton";

const slideJson = [
    {img: vege1},
    {img: vege2},
    {img: vege3},
    {img: vege2},
]

const FirstSection = () => {
    const [slide, setSlide] = React.useState(0);

    const nextSlide = () => {
        if (slide === slideJson.length - 1) {
            console.log('work')
            return setSlide(0);
        }
        return setSlide(prev => prev + 1);
    }

    const prevSlide = () => {
        if (slide === 0) {
            return setSlide(slideJson.length - 1);
        }
        return setSlide(prev => prev - 1)
    }


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
                        <img src={slideJson[slide].img} alt="Овощи" className='vegetables'/>
                        <img src={spot} alt="" className="spot__first"/>
                        <img src={circleMini} alt="" className="circle-mini__first"/>
                        <img src={circle} alt="" className="circle__first"/>
                    </div>

                </div>
            </div>
            <div className="first__slider slider">
                <div className="container slider__row">
                    <div className="slider__dots">
                        {slideJson.map((s, index) => (
                            <div className={`slider__dot ${index === slide ? 'slider__dot__active' : ''}`}
                                 onClick={() => setSlide(index)}
                            ></div>
                        ))}
                    </div>
                    <button className="first__button_mobile button ">
                        В каталог
                    </button>
                    <span className="first__arrow-buttons_wrap">
                    <ArrowSlideButton nextSlide={nextSlide} prevSlide={prevSlide}/>
                    </span>
                </div>
            </div>
        </main>
    );
};

export default FirstSection;