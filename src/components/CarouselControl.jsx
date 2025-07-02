import { useRef } from "react";
import useArrowNavigation from "../hooks/useArrowNavigation";

const CarouselControl = ({ autoplay, togglePlay, goBack, goNext }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useArrowNavigation(goBack, goNext, prevRef, nextRef);
  return (
    <div className="flex gap-1 mt-4 absolute z-[1000] w-full p-2 ">
      <button
        onClick={togglePlay}
        aria-label={autoplay ? "Pause" : "Play"}
        className="p-2 rounded-md text-white"
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
          onClick={goBack}
          ref={prevRef}
          data-id="prev"
          aria-label="Previous slide"
          className="w-14 p-2 mr-2 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            fill="#fff"
            aria-label="Previous slide"
          >
            <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
          </svg>{" "}
        </button>
        <button
          onClick={goNext}
          ref={nextRef}
          data-id="next"
          aria-label="Next slide"
          className="w-14 p-2 text-white"
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
  );
};

export default CarouselControl;
