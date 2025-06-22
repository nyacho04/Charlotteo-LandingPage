import React, { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './ImageCarousel.css';

const images = [
  '/captura_chat1.png',
  '/captura_chat2.png',
  '/captura_chatclaro1.png',
  '/captura_chatclaro2.png'
];

const ImageCarousel: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map(src => ({ src }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: 'slides'
  };

  return (
    <>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((img, imgIndex) => (
            <div
              key={imgIndex}
              className="slide-item"
              onClick={() => {
                setIndex(imgIndex);
                setOpen(true);
              }}
            >
              <img src={img} alt={`Slide ${imgIndex + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </>
  );
};

export default ImageCarousel; 