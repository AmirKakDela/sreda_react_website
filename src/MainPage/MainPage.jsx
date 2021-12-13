import React from 'react';
import Header from "./components/Header/Header";
import FirstSection from "./FirstSection/FirstSection";
import Advantages from "./Advantages/Advantages";
import OurFair from "./OurFair/OurFair";
import PopularSets from "./PopularSets/PopularSets";
import '../App.css';

const MainPage = () => {
    return (
        <div className="page">
            <Header/>
            <FirstSection/>
            <Advantages/>
            <OurFair/>
            <PopularSets/>
        </div>
    );
};

export default MainPage;