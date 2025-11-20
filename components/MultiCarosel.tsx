import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function MultiCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 0 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      partialVisibilityGutter: 0 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      partialVisibilityGutter: 0 // this is needed to tell the amount of px that should be visible.
    }
  }

  
const images = [
  {
    src: "https://images.pexels.com/photos/8611352/pexels-photo-8611352.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Ranjith - Black Belt",
  },
  {
    src: "https://images.pexels.com/photos/8611373/pexels-photo-8611373.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Ranjith - Black Belt",
  },
  {
    src: "https://images.pexels.com/photos/7988765/pexels-photo-7988765.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Ranjith - Black Belt",
  },
  {
    src: "https://images.pexels.com/photos/7045561/pexels-photo-7045561.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Ranjith - Black Belt",
  },
];
  return (
    <div className=''>

<div className="bg-yellow-400   md:px-6 py-10 mt-5 z-10  shadow-[#38bdf8] bg-[#f0f9ff] h-[500px]  pt-16   mx-auto rounded-lg shadow-lg">
<div className=' text-center h3 text-logo_green' >
        "Our since thank to all of Master Everyone welcome to industry" 
      </div>
      
      <div className="px-2 md:px-4 mt-10">
        <Carousel
             partialVisible
             focusOnSelect
             autoPlay
             rewind
             rewindWithAnimation
          responsive={responsive}
      
          infinite
          showDots
          className="py-5"
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md mx-2"
            >
              <img
                className="h-48 w-full object-cover md:h-40 lg:h-56"
                src={item.src}
                alt={`Carousel item ${index + 1}`}
              />
              <div className="text-center text-white bg-black py-2 text-lg font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>



    </div>
  )
}

export default MultiCarousel;