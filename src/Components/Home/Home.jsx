import React from 'react';
import Showreel from '../Showreel/Showreel';
import ImageSlider from '../Slider/Slider';
import { SliderData } from '../Slider/SliderData';


const Home = () => {
    return (
        <div>
            <Showreel />
            <ImageSlider slides={SliderData}/>
            
        </div>
    );
};

export default Home;