import React from 'react'
import { Carousel } from 'react-bootstrap';

function CarouselComponent() {
  return (
    <div className="carousel-container">
      <Carousel
        controls={false}
        indicators={false}
        interval={2500}
      >
        <Carousel.Item>
          <img className="carousel-item d-block" src="CANDELA_1.2.1.png" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-item d-block" src="CANDELA_1.3.1.png" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-item d-block" src="CANDELA_1.7.2.png" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-item d-block" src="CANDELA_1.12.1.png" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-item d-block" src="CANDELA_1.19.1.png" alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselComponent