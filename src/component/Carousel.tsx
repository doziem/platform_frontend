import React, { useRef } from "react";

interface CarouselProps {
  slides: Array<{
    id: number;
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }>;
  interval?: number;
  autoPlay?: boolean;
}

const Carousel = ({
  slides,
  autoPlay = true,
}: CarouselProps): React.ReactElement => {
  const carouselRef = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (autoPlay && slides.length > 1) {
      const intervalId = setInterval(() => {
        if (carouselRef.current) {
          const currentScroll = carouselRef.current.scrollLeft;
          const slideWidth = carouselRef.current.clientWidth;
          const nextScroll =
            currentScroll + slideWidth >= slideWidth * slides.length
              ? 0
              : currentScroll + slideWidth;
          carouselRef.current.scrollTo({
            left: nextScroll,
            behavior: "smooth",
          });
        }
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [autoPlay, slides]);

  const scrollToSlide = (index: number): void => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel w-full rounded-box overflow-hidden shadow-lg">
      <div
        ref={carouselRef}
        className="carousel-container flex overflow-x-auto snap-mandatory snap-x scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide-${slide.id}`}
            className="carousel-item relative w-full flex-shrink-0 snap-start"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-[500px] object-cover"
            />

            {/* Overlay content */}
            {(slide.title || slide.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                {slide.title && (
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {slide.title}
                  </h3>
                )}
                {slide.description && (
                  <p className="text-white/90">{slide.description}</p>
                )}
              </div>
            )}

            {/* Navigation arrows */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button
                onClick={() =>
                  scrollToSlide(index === 0 ? slides.length - 1 : index - 1)
                }
                className="btn btn-circle btn-outline btn-primary"
              >
                ❮
              </button>
              <button
                onClick={() =>
                  scrollToSlide(index === slides.length - 1 ? 0 : index + 1)
                }
                className="btn btn-circle btn-outline btn-primary"
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center w-full py-2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => scrollToSlide(index)}
            className="btn btn-xs btn-circle btn-outline"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
