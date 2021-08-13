import React from 'react';
import { Carousel } from 'react-bootstrap';
import cube from '../../Assets/cube.jpg'
import Electra from '../../Assets/Electra.jpg'
import Forward from '../../Assets/Forward.jpg'
import RPB from '../../Assets/RPB.jpg'

const ImageSlider = () => {

  return (
    <Carousel>

      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={cube}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={RPB}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={Electra}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={Forward}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>

  );
};

export default ImageSlider;