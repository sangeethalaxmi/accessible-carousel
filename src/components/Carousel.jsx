import { useRef, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import CarouselControl from "./CarouselControl";
import SlideItem from "./SlideItem";
import slides from "../data/slidesData";

export default function Carousel() {
  const [autoplay, setAutoplay] = useState(false);
  const [current, setCurrent] = useState(0);
  const fadeRef = useRef(null);

  // manual pause and pay
  const togglePlay = () => {
    setAutoplay((prev) => !prev);
  };
  // function to goback to prev slide
  const goBack = () => {
    fadeRef.current?.goBack();
  };
  // function to goback to next slide

  const goNext = () => {
    fadeRef.current?.goNext();
  };

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Image Slideshow"
      className="relative"
    >
      <CarouselControl
        autoplay={autoplay}
        togglePlay={togglePlay}
        goBack={goBack}
        goNext={goNext}
      />
      <Fade
        autoplay={autoplay}
        duration={3000}
        transitionDuration={500}
        arrows={false}
        onChange={(prev, next) => setCurrent(next)}
        ref={fadeRef}
      >
        {slides.map((image, index) => (
          <SlideItem
            image={image}
            index={index}
            current={current}
            key={index}
          />
        ))}
      </Fade>

      <p aria-live="polite" className="mt-2">
        Slide {current + 1} of {slides.length}
      </p>
    </section>
  );
}
