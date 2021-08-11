import React from 'react';
import Footer from '../Footer/Footer';
import Showreel from '../Showreel/Showreel';
import ImageSlider from '../Slider/Slider';
import Header from '../Header/Header'

const Home = () => {


    return (
        <div>
            <Header />
            <Showreel />
            <ImageSlider />
            <Footer />
        </div>
    );
};

export default Home;