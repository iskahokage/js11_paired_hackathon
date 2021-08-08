import React from 'react';
import Footer from '../Footer/Footer';
import Showreel from '../Showreel/Showreel';
import ImageSlider from '../Slider/Slider';
import { SliderData } from '../Slider/SliderData';

const Home = () => {
    return (
        <div>
            <Showreel />
            <ImageSlider slides={SliderData}/>
            <Footer />
            
        </div>
    );
};

export default Home;