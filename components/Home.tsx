"use client";

import React, { useEffect } from 'react';
// import MultiCarousel from './MultiCaro';
import Image from "next/image";
import longmaster from '../public/longmaster.jpg'
import meditate from '../public/meditate.jpg'
import { useRouter } from "next/navigation";
// import FallingText from './FallingText';
// import AOS from "aos";
import AOS from "aos";
import "aos/dist/aos.css"; 0
import MultiCarouselComponents from '../components/MultiCarosel';


function Home() {


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      // once: true,     // Whether animation should happen only once
    });
  }, []);

  const navigate = useRouter()


  const cardData = [
    {
      title: 'Kids Karate',
      desc: "Karate helps children develop discipline, confidence, and coordination through fun and structured training.",
      image: "https://images.pexels.com/photos/7045553/pexels-photo-7045553.jpeg"

    },
    {
      title: 'Women Karate',
      desc: "Empower yourself with karate—enhancing self-defense skills, confidence, and mental strength.",
      image: "https://images.pexels.com/photos/7045756/pexels-photo-7045756.jpeg"
    },
    {
      title: 'Men Karate',
      desc: "Karate builds strength, resilience, and focus, helping you push beyond your physical and mental limits.",
      image: "https://images.pexels.com/photos/6295857/pexels-photo-6295857.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];


  const karateBenefits = [
    {
      title: "Self-Defense",
      description: "One of the primary reasons people practice karate is to learn self-defense techniques."
    },
    {
      title: "Physical Fitness",
      description: "Karate training involves rigorous physical activity, promoting overall fitness."
    },
    {
      title: "Discipline and Focus",
      description: "Karate places a strong emphasis on discipline, respect, and mental focus."
    },
    {
      title: "Cultural Exchange",
      description: "Karate places a strong emphasis on discipline, respect, and mental focus."
    },
    {
      title: "Adaptability",
      description: "Karate is versatile and can be adapted to suit different ages, fitness levels, and abilities."
    }
  ];


  const titleside = [
    {
      title: "Womens karate",
      width: "w-[140px]"

    },
    {
      title: "Kids karate",
      width: "w-[110px]"

    },
    {
      title: "Mens karate",
      width: "w-[90px]"

    },
  ]


  const bestofus = [
    {
      title: "self-Dispiline",
      desc: "Engage in rigorous combat training to enhance your fighting skills and physical endurance. Perfect for those seeking to challenge themselves and achieve peak performance.",
      img: "https://images.pexels.com/photos/4473608/pexels-photo-4473608.jpeg"
    },
    {
      title: "Traning",
      desc: "Discover the discipline and focus of martial arts, where every movement is designed for precision and control. Embrace a journey of self-improvement and physical conditioning.",
      img: "https://media.istockphoto.com/id/1960871767/photo/young-karate-fighters-in-karate-school.webp?b=1&s=612x612&w=0&k=20&c=8E39oCq9POzAVdKDGNuUW5393zym4LmZtbRFt0zEc2Q="
    },
    {
      title: "Self-Defense",
      desc: "Learn essential techniques and strategies to protect yourself in various situations. Our self-defense training emphasizes practical skills and confidence-building.",
      img: "https://media.istockphoto.com/id/1403476109/photo/martial-arts-fighters-training-together.webp?b=1&s=612x612&w=0&k=20&c=9_PGv3g-HylxgE1_Rgg8qdHYglWMblfB0fzom-zZs7I="
    },

  ]


  return (
    <div className=' '>
      <div className='h1' >

      </div>
      <div>
        <div>
          {/* open page */}
          <div className='  md:h-screen    relative bg-[#f1f5f9]'>
            <div className='hidden md:block ' >
              <div className='h-[250px]  w-full  absolute z-30 bottom-10 flex justify-center' >
                <div className='grid  grid-cols-1 md:grid-cols-3 md:w-[100%] lg:w-[1024px] md:gap-5  lg:gap-24 text-center' >

                  {cardData.map((card, index) => (
                    <div
                      key={index}
                      data-aos={
                        index === 0
                          ? "fade-up-right"
                          : index === 2
                            ? "fade-up-left"
                            : "fade-up"
                      }
                      className='flex flex-col group relative justify-around bg-logo_white/40 backdrop-blur-lg p-5 shadow-lg hover:scale-105 duration-500 shadow-[#005691] rounded-md h4 text-center text-[#005691]'
                    >
                      <div className='mt-2'>
                        <div className='mt-2' >
                          {card.title}
                        </div>
                        <div className='h5 text-log_letter_gray'>
                          {card.desc}
                        </div>
                        <div className='h-[250px] group-hover:opacity-100 opacity-0 duration-500 w-full absolute top-0 left-0 flex justify-center items-center p-1' >
                          <Image width={500} height={500} className='rounded-md border-1 border-[#005691] h-[240px]' src={card.image} alt="longmaster" />
                          {/* <img className=' ' src={`${card.image}`} alt="" /> */}
                        </div>
                      </div>
                    </div>
                  ))}




                </div>
              </div>
            </div>
            <div className='bg-cover h-[250px]  md:h-[550px]  w-[100%] relative  '>
              <div>

                <div className="absolute top-0 right-0 md:hidden">
                  {
                    titleside?.map((v, i) => {
                      return (
                        <div
                          key={i}
                          data-aos="fade-left"

                          //  data-aos-easing="linear"
                          data-aos-duration={i == 0 ? 1000 : i == 1 ? 1500 : 2000}

                          className="relative mt-5 flex justify-end">
                          <div className={`${v.width} relative flex h-[25px] w-[120px] bg-white items-center rounded-bl-lg bg-green-300 pl-5 text-[12px] font-semibold shadow-md shadow-green-300`}>
                            {v?.title}
                            <span className="absolute top-[98%] left-0">
                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128">
                                <path fill="#176cc7" d="M69.09 4.24c-1.08.96-9.48 17.63-9.48 17.63l-6.25 25.21l24.32-2.23S97.91 7.23 98.32 6.36c.73-1.58 1.12-2.23-1.67-2.23c-2.79-.01-26.55-.79-27.56.11" />
                                <path fill="#fcc11a" d="M81.68 43.29c-1.21-.65-36.85-1.21-37.69 0c-.76 1.1-.33 6.87-.04 7.56c.52 1.2 11.97 5.85 11.97 5.85v2.89s.78.32 7.46.32s8.01-.34 8.01-.34l.05-2.78s9.94-5.12 10.46-5.83c.46-.59.99-7.02-.22-7.67m-10.34 9.14s.14-1.38-.55-1.72c-.69-.35-12.62-.29-13.56-.24s-.94 1.73-.94 1.73l-7.47-3.95l-.13-1.32l27.94.15l.06 1.78z" />
                                <path fill="#fdffff" d="M59.04 51.84c-.94 0-1.65 1.06-1.65 2.74c0 1.58.54 2.88 1.73 2.81c1.13-.06 1.67-1.49 1.59-2.83c-.1-1.57-.48-2.72-1.67-2.72" />
                                <path fill="#f8932a" d="M29.31 92.09c0 23.96 21.71 33.93 36.12 33.5c16.79-.5 34.85-13.24 33.36-36.1c-1.4-21.45-19.69-31.69-35.47-31.57c-18.34.13-34.01 13.24-34.01 34.17" />
                                <path fill="#fcc11a" d="M64.52 121.29c-.25 0-.51 0-.76-.01c-7.5-.25-15.12-3.08-20.54-8.33c-5.8-5.62-9.38-12.73-9.4-20.9c-.05-21.46 18.34-29.35 30.17-29.35h.1c16.03.07 29.88 12.05 30.24 28.94c.16 7.52-2.92 15.48-8.96 21.42c-5.63 5.53-13.94 8.23-20.85 8.23" />
                                <path fill="#2e9df4" d="M25.51 3.72c-.63.58 23.46 43.48 23.46 43.48s4.04.52 13.06.6s13.49-.52 13.49-.52S56.79 4.15 55.67 3.72c-.55-.22-7.97-.3-15.22-.38c-7.26-.09-14.34-.18-14.94.38" />
                                <path fill="#fefffa" d="M52.29 67.35c-1.46-1.25-8.89 2.52-14.11 11.15c-3.5 5.79-3.8 13.2-1.57 13.32s2.2-7.21 7.05-13.62c5.86-7.71 10.74-9.04 8.63-10.85" />
                                <path fill="#f8932a" d="M64.37 66.9c-1.95 0-4.99 12.89-7.38 14.48s-14.77.07-14.91 1.81s9.19 8.98 10.28 11.65s-4.71 14.62-3.11 15.78c1.59 1.16 11.58-7.17 14.91-7.17c3.47 0 12.41 8.89 13.9 7.67c1.57-1.28-3.47-12.96-2.68-15.64c.8-2.68 11.65-8.4 11.22-11c-.43-2.61-13.03-.65-15.35-2.82S66.47 66.9 64.37 66.9" />
                              </svg>
                            </span>
                          </div>
                        </div>

                      )
                    })
                  }


                </div>


              </div>
              <Image className='bg-cover h-[250px]  md:h-[550px]  w-[100%] bg-black ' src={meditate} alt="longmaster" />
              {/* <img  src={} alt="" /> */}
              <div className='bg-cover h-[250px]  md:h-[550px]  w-[100%] bg-black/20 absolute top-0 ' >

              </div>
            </div>
            <div className='absolute top-0  h-[100%]  w-[100%]  '>
            </div>
            <div className='absolute top-10 md:top-10  h-[100%]  w-[100%]  '>
              <div className='w-full' >
               

                <div className='h5  text-white   '>

                  <div data-aos="fade-left" className='text-lg  p-[5%] md:pl-[15%] md:mt-16 md:py-10 lg:py-10 text-[#E7E8F5] '>
                    <span className='' > <span data-aos="fade-right" className='h1' >  Karate </span> - <span data-aos="fade-right" className='h1'  > Self Defence </span> </span>
                  </div>
                </div>

                <div data-aos="fade-right" className='pl-[10%] md:pl-[35%]'>
                  <div className='flex mt-0 md:pl-10  lg:mt-10  '>
                    <div data-aos="fade-in" onClick={() => navigate.push('/contacts')} className='text-[12px] font-bold md:h5 border hover:scale-105 duration-500 cursor-pointer hover:bg-logo_green bg-logo_green/70 rounded-md !text-white border-logo_green h-8 md:h-10 w-[90px] md:w-[120px] flex items-center justify-center'>
                      Contact us
                    </div>

                    <div className='flex justify-center items-center pl-[20px]'>

                      <div data-aos="fade-in" className='text-[12px] font-bold md:h5 border cursor-pointer hover:scale-105 duration-500 hover:bg-[#0a8cbf] bg-[#0a8cbf]/70 rounded-md h-8 md:h-10 w-[90px] md:w-[120px]  text-white border-[#0a8cbf] flex items-center justify-center'>
                        <a href="tel:9585674087" className='text-white'>
                          Call Now
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* master intro */}
        <div className=' min-h-screen bg-[#f1f5f9] py-10' >
          <div data-aos="zoom-in" className='border-2  ml-[5%] md:ml-[10%]   border-logo_red text-logo_red px-2 py-1 inline-block rounded-md '>
            WORLD SO KYOKSHION
          </div>

          <div data-aos="zoom-in" className='h2 text-center mt-4 my-5 text-logo_blue'>
            Tamil Nadu Kyokshion Chinnu'S karate Association
          </div>
          <div data-aos="zoom-in" className='h4 text-center md:w-[70%] text-letter-black mx-auto px-2 md:px-0 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, veritatis omnis. Saepe nulla neque obcaecati, deleniti culpa voluptas, voluptatum alias odio fugit sapiente impedit temporibus accusamus magnam repudiandae sint minus?

          </div>



          <div className='w-[95%] mx-auto lg:w-[1024px]  mt-10 ' >
            <div className='flex justify-center '>
              <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5' >
                <div className=' flex justify-center' >
                  <Image data-aos="fade-up" className='h-96 rounded-md  hover:shadow-logo_blue duration-1000 flex-col justify-between p-5 shadow-lg ' src={longmaster} alt="longmaster" />

                </div>
                <div>
                  <div data-aos="fade-left" className=' flex flex-col justify-between  hover:shadow-logo_blue duration-1000  h-full p-5 shadow-lg rounded-lg'>
                    <div className='h3   mt-5 md:mt-0 text-logo_blue'>
                      MASTER CHINNASAMY
                    </div>
                    <div className='h5   mt-5 md:mt-0   text-letter-black  text-justify'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt totam blanditiis autem necessitatibus atque dolore, quisquam aperiam sed soluta facere dicta, cum ut. Qui aliquam possimus necessitatibus repellat laborum! Est deleniti velit esse asperiores obcaecati illo fugit repellendus, possimus commodi nesciunt rerum nihil quasi, saepe sapiente? Rerum repudiandae ratione sint ex in praesentium veniam nisi dolores, sunt aliquid! Blanditiis quibusdam error voluptatem fugit fugiat porro .
                    </div>
                    <div onClick={() => navigate.push('/founder')} className='h-10 cursor-pointer w-28 mt-5 md:mt-0 bg-logo_blue flex justify-center items-center rounded-md text-white'>
                      Read More
                    </div>



                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* falling text */}

      {/* <div className='h-screen flex flex-col justify-center' >
        <div data-aos="zoom-in" className='h2 text-center mt-4 my-5 text-logo_blue'>
          Let's play the game
        </div>
        <div data-aos="zoom-in" className='h4 text-center md:w-[70%] text-letter-black mx-auto px-2 md:px-0 '>
          Select and drag the karate and kick out the all other things like unwanted for life
        </div>
        <div  data-aos="flip-up"  className='my-5' >

        <FallingText
          text={` depression fear  Karate disorder anxiety anger stress `}
          highlightWords={["Karate"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="1.5rem"
          mouseConstraintStiffness={0.9}
        />
        </div>

        <div data-aos="zoom-in" className='h4 text-center md:w-[70%] text-letter-black mx-auto px-2 md:px-0 '>
          Never let the karate down
        </div>

      </div> */}


      <div className='bg-[#f1f5f9] '  >
        <div className='min-h-screen w-[90%] mx-auto py-10 '>
          <div className=''>

            <div data-aos="zoom-in" className='h2 text-center mt-4 my-5 text-logo_blue'>
              From Learning to Mastery
            </div>
            <div data-aos="zoom-in" className='h4 text-center w-[90%] md:w-[70%] text-letter-black mx-auto px-2 md:px-0 '>
              Our trainers are dedicated to taking students on a journey from learning the basics to mastering their chosen fields.
            </div>
            <div data-aos="fade-up" >
              <MultiCarouselComponents />
            </div>


          </div>
        </div>
      </div>




      {/* best of us */}
      <div className='min-h-screen flex items-center '>
        <div>

          {/* <div  data-aos="zoom-in" className='h3 text-logo_red text-center mt-10 font-bold'>Best of us</div> */}
          <div data-aos="zoom-in" className='h2 text-logo_blue text-center my-5'>Student Training</div>
          <div data-aos="zoom-in" className='text-center h5 py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, ipsum.</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] mx-auto mt-10">
            {
              bestofus?.map((best, i) => {
                return (
                  <div key={i} >
                    <Image
                      className='h-60 w-full rounded-md'
                      data-aos="zoom-in-up"
                      src={best.img}
                      alt="longmaster"
                      width={600}
                      height={400}
                    />

                    {/* <img   src={} alt="" /> */}
                    <div data-aos="zoom-in" className='text-center py-2 h3'>{best.title}</div>
                    <div data-aos="zoom-in" className='text-center h5 py-2'>{best.desc}.</div>
                  </div>

                )
              })
            }


          </div>
        </div>
      </div>






      {/* background-image: linear-gradient(to right, #815cfb, #788cff, #8ab4ff, #b4d6ff, #edf4fb); */}
      {/* world master */}
      <div
        // style={{
        //   backgroundImage: `linear-gradient(to right, #815cfb, #788cff, #8ab4ff, #b4d6ff, #edf4fb)`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat',
        // }}
        className="bg-[#94a3b8] backdrop-blur-md min-h-screen pb-10   pt-10"
      >
        <div data-aos="zoom-in" className='h2 text-center  w-[95%] mx-auto     text-white'>
          Tamil Nadu Kyokshion Chinnu'S karate Association
        </div>
        <div data-aos="zoom-in" className='h4 my-5 text-center md:w-[70%] text-line mx-auto px-2 md:px-0 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, veritatis omnis. Saepe nulla neque obcaecati, deleniti culpa voluptas, voluptatum alias odio fugit sapiente impedit temporibus accusamus magnam repudiandae sint minus?

        </div>


        <div className='mt-10 w-[95%] lg:w-[1024px] mx-auto mb-10 bg-logo_white backdrop-blur-3xl shadow-lg   py-14 rounded-lg '>
          {/* <div className='text-center h2  pt-5 md:py-10 text-logo_blue  px-2'>Founder of World so Kyokshion</div> */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mx-auto w-[100%]'>


            <div data-aos="zoom-in" className='flex flex-col justify-center h-full  items-center   w-[80%] mx-auto text-justify h5   text-white'>
              <div className='h3 text-logo_blue'>
                About Master
              </div>
              <div data-aos="zoom-in" className='mt-5 md:mt-5  text-black'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque quos at dolorum! Delectus quasi deleniti iure dolorem provident corporis ex expedita ullam exercitationem, molestiae eligendi voluptates hic facilis amet ducimus animi sunt, soluta eos quia nihil sint repellendus iste.
              </div>
            </div>
            <div className='h-full flex justify-center items-center' >
                    <Image height={200} width={200} src={meditate} className='h-full w-full ' alt="" />

              {/* <img data-aos="zoom-in-down" className='flex w-[95%]  shadow-md shadow-logo_yellow rounded-lg' src="https://images.pexels.com/photos/7045758/pexels-photo-7045758.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
            </div>

            <div data-aos="zoom-in" className='flex flex-col justify-center items-center w-[80%] mx-auto text-justify h5    text-white'>
              <div className='h3 text-logo_blue'>
                Our Sincire Thanks to
              </div>
              <div className='mt-5 text-black'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque quos at dolorum! Delectus quasi deleniti iure dolorem provident corporis ex expedita ullam exercitationem, molestiae eligendi voluptates hic facilis amet ducimus animi sunt, soluta eos quia nihil sint repellendus iste.
              </div>
            </div>


          </div>

        </div>

      </div>

      {/* why karate */}
      <div className=' relative    w-full  my-10 min-h-screen flex items-center '>
        <div data-aos="fade-right" className='absolute top-0   clear-start     pl-[10%]' >
          <svg className='' >
            <path d="M 10 80 Q 130 50 150 90 " className="stroke-logo_red" fill="none" strokeWidth={4} />
          </svg>
          <div className='h2  font-normal !text-3xl absolute top-6 '>
            <i>      Why Karate </i>
          </div>
        </div>
        <div className='w-[90%] md:w-[50%] pt-28   mx-auto space-y-5'>
          {
            karateBenefits?.map((item, value) => {
              return (
                <div className='text-left h3 '>
                  <div data-aos="fade-right" className='text-logo_green underline  underline-offset-4'>  {item.title}: </div>
                  <div data-aos="zoom-in" className='text-logo_blue  h3 mt-4' >
                    {item.description}
                  </div>
                </div>

              )
            })
          }


        </div>
      </div>















    </div>
  );
}

export default Home;
