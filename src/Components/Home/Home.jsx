import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Showreel from '../Showreel/Showreel';
import ImageSlider from '../Slider/Slider';


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