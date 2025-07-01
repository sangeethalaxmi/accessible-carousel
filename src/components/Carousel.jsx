import { useEffect, useRef, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slides = [
  {
    url: "img1.jpg",
    alt: "Slide 1",
  },
  {
    url: "img2.jpg",
    alt: "Slide 2",
  },
  {
    url: "img3.jpg",
    alt: "Slide 3",
  },
  {
    url: "img4.jpg",
    alt: "Slide 4",
  },
];

export default function Carousel() {
  const [autoplay, setAutoplay] = useState(false);
  const [current, setCurrent] = useState(0);
  const fadeRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
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

  useEffect(() => {
    // useEffect for handling the right and left arrow click
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && e.target?.dataset.id == "prev") goBack();
      if (e.key === "ArrowRight" && e.target?.dataset.id == "next") goNext();
    };
    const prevBtn = prevRef?.current;
    const nextBtn = nextRef?.current;

    prevBtn?.addEventListener("keydown", handleKeyDown);
    nextBtn?.addEventListener("keydown", handleKeyDown);

    return () => {
      prevBtn?.removeEventListener("keydown", handleKeyDown);
      nextBtn?.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Image Slideshow"
      className="relative"
    >
      <div className="flex gap-1 mt-4 absolute z-[1000] w-full p-2 ">
        <button
          onClick={togglePlay}
          className="p-2 rounded-md text-white"
          aria-label={autoplay ? "Pause" : "Play"}
        >
          {autoplay ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="#fff"
              viewBox="0 0 24 24"
              aria-label="Pause"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="#fff"
              viewBox="0 0 24 24"
              aria-label="Play"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <div className="w-full flex justify-end p-2">
          <button
            onClick={() => goBack()}
            aria-label="Previous slide"
            className="w-14 p-2 mr-2 text-white"
            ref={prevRef}
            data-id="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              fill="#fff"
              aria-label="Previous slide"
            >
              <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
            </svg>
          </button>

          <button
            onClick={() => goNext()}
            aria-label="Next Slide"
            className="w-14 p-2  text-white"
            ref={nextRef}
            data-id="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              fill="#fff"
              aria-label="Next Slide"
            >
              <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
            </svg>
          </button>
        </div>
      </div>
      <Fade
        autoplay={autoplay}
        duration={3000}
        transitionDuration={500}
        arrows={false}
        onChange={(prev, next) => setCurrent(next)}
        ref={fadeRef}
      >
        {slides.map((image, index) => (
          <div
            key={index}
            style={{
              border:
                current === index
                  ? "4px solid #007acc"
                  : "2px solid transparent",
              borderRadius: "8px",
              transition: "border 0.3s ease",
            }}
            aria-hidden={current !== index}
            tabIndex={current === index ? 0 : -1}
          >
            <img src={image.url} alt={image.alt} className="w-full h-auto" />
          </div>
        ))}
      </Fade>

      <p aria-live="polite" className="mt-2">
        Slide {current + 1} of {slides.length}
      </p>
    </section>
  );
}
