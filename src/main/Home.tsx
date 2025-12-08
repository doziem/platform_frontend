// import Footer from "../component/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content area that grows to fill space above footer */}
      <div className="flex-1">
        <div className="carousel w-full">
          {/* Carousel slides - extracted into array for maintainability */}
          {[
            {
              id: 1,
              src: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
              prev: 4,
              next: 2,
            },
            {
              id: 2,
              src: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
              prev: 1,
              next: 3,
            },
            {
              id: 3,
              src: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
              prev: 2,
              next: 4,
            },
            {
              id: 4,
              src: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
              prev: 3,
              next: 1,
            },
          ].map((slide) => (
            <div
              key={slide.id}
              id={`slide${slide.id}`}
              className="carousel-item relative w-full"
            >
              <img
                src={slide.src}
                className="w-full"
                alt={`Slide ${slide.id}`}
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={`#slide${slide.prev}`} className="btn btn-circle">
                  ❮
                </a>
                <a href={`#slide${slide.next}`} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
