"use client";



import React, { useEffect, useState } from 'react'
// import { useGetAllEventQuery } from '../../features/api/userapi';
import { FaAward } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ReactPaginate from 'react-paginate';

import meditate from '../../public/meditate.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import axios from 'axios';




function page() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      // once: true,     // Whether animation should happen only once
    });
  }, []);


  const [pageclick, setPageClick] = useState(1);
  const [search, setSearch] = useState("")
  const [limit, setlimit] = useState(3)
  const [initial, setinital] = useState(0)
  const [eventType, setEventType] = useState("upcoming")


        const[event, setEvent] = useState ([]);
          const [eventcount, seteventcount ] = useState<number>(0);

          console.log(event, "event type here")
  

          console.log(event, "event data here")
          
            useEffect(() => {
              async function fetchBlogs() {
                try {
                //  const response = await axios.get('/api/events');
                
                        const response = await axios.get(`/api/events?page=${pageclick}&limit=${limit}&search=${search}$eventtype=${eventType}`); 
          
                  console.log(response, 'this is response from blogs api')
                  // const data = await response.data.data;
                  setEvent(response?.data?.data);
                  seteventcount(response?.data?.count);
                } catch (error) { 
                  console.error("Fetch error:", error);
                }
              }
          
              fetchBlogs();
            }, []);
  

//   const { data: geteventdata } = useGetAllEventQuery({

//     page: pageclick, // Default value if not provided
//     limit: limit, // Default value if not provided
//     eventtype: eventType,
//     sortBy: 'createdAt', // Default value if not provided
//     sortOrder: 'desc', // Default value if not provided
//     filter: {}, // Default value if not provided
//     search: search // Default value if not provided
//   })

  const geteventdata = []

  const targetRef = React.useRef(null);



  const handlePageClick = (event: any) => {
    setPageClick(event.selected + 1);
    // const newOffset = (event.selected * limit) % geteventdata?.data?.length;
    // window.scrollTo({ top: 0, behavior: "smooth" });
    
    // targetRef.current.scrollIntoView({ behavior: "smooth" });
    console.log("wake")
  };

  useEffect(() => {
    setPageClick(1)


  }, [search, eventType]);






  useEffect(() => {

    setinital(0)

  }, [limit, eventType])

//   const pageCount = geteventdata?.count;
  // const pageCount = 9




  const prizes = [
    {
      position: "First",
      winner: "think",
    //   winner: geteventdata?.data?.prizes?.first_winner,
      borderColor: "border-logo_red",
      bgColor: "hover:bg-logo_red",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M12 7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1v6a5 5 0 0 1-5 5h-1.683A12.02 12.02 0 0 1 26 27.834V34h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6v-6.166A12.02 12.02 0 0 1 12.683 20H11a5 5 0 0 1-5-5V9a1 1 0 0 1 1-1h5zm24 9v-6h4v5a3 3 0 0 1-3 3h-1zm-24-6H8v5a3 3 0 0 0 3 3h1z" clip-rule="evenodd" /></svg>
    },
    {
      position: "Second",
      winner: "sadadasd",
    //   winner: geteventdata?.data?.prizes?.second_winner,
      borderColor: "border-logo_yellow",
      bgColor: "hover:bg-logo_yellow",
      icon: <FaAward size={35} />,
    },
    {
      position: "Third",
    //   winner: geteventdata?.data?.prizes?.third_winner,
      winner: "sdfsdfsd",
      borderColor: "border-logo_blue",
      bgColor: "hover:_blue",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 21c0-1.414 0-2.121.44-2.56C8.878 18 9.585 18 11 18h2c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v1H8zm4-8v5m-6 4h12M13.037 2.867l1.055 2.129c.144.296.528.58.852.635l1.914.32c1.224.206 1.512 1.101.63 1.985L16 9.436c-.252.254-.39.744-.312 1.095l.426 1.856c.336 1.47-.438 2.039-1.728 1.27l-1.793-1.07c-.324-.194-.858-.194-1.188 0l-1.794 1.07c-1.284.769-2.064.194-1.728-1.27l.426-1.857c.078-.35-.06-.84-.312-1.094l-1.488-1.5c-.876-.884-.594-1.779.63-1.985l1.914-.32c.318-.055.702-.339.846-.635l1.056-2.13c.576-1.155 1.512-1.155 2.082 0" color="currentColor" />
      </svg>
    },
  ];


  return (
    <>

    <div className='h-[70dvh]   relative' >
      <Image height={200} width={200} src={meditate} className='h-full w-full ' alt="" />

      <div className='h-full w-full absolute top-0 flex flex-col justify-center items-center bg-black/50' >
      <div data-aos="fade-in" className='h1 text-center pt-5 text-white'>Events</div>
      <div data-aos="fade-in" className='h2  w-[70%] text-center mt-5 md:mt-10 text-white'> Elevate your well-being with classes that focus on both physical and mental health.</div>


      </div>

    </div>
    <div ref={targetRef}  className='h-[1dvh]' >

    </div>
    
    
    <div   className='grid grid-cols-1  grid_cols-1 lg:w-[1024px]  gap-5  mx-auto w-[90%] '>
      {/* bg-[#005691] */}
      <div   className='h2   text-center mt-10 text-logo_blue'> Our Team focus on well manner.</div>

   

      <div data-aos="fade-in"     className='flex justify-center cursor-pointer my-4' >
        <div className='flex bg-[#005691]/70 h-10 rounded-md shadow-lg' >
          <div onClick={() => {
            setEventType("upcoming")
       
          }} className={`${eventType == "upcoming" ? "bg-[#005691] h5 text-logo_yellow  " : "text-white"} flex justify-center items-center w-[150px] rounded-md`} >
            Upcoming
          </div>
          <div onClick={() => {
           
            setEventType("completed")
          }
          } className={`${eventType == "completed" ? "bg-[#005691] h5 text-logo_yellow  " : "text-white"} flex justify-center items-center w-[150px] rounded-md`} >
            Completed
          </div>

        </div>

      </div>
      {
        // [].map((data) => (
        event?.map((data) => (
          <div
          data-aos="fade-up" 

            // backgroundImage:`radial-gradient(circle, #ffffff, #fffbff, #fff7f8, #fff4eb, #fff5e0, #fff5e0, #fff5e0, #fff5e0, #fff4eb, #fff7f8, #fffbff, #ffffff)`
            // backgroundImage: `radial-gradient(circle, #ffffff, #fbfcff, #f4fbff, #ecf9fd, #e5f8f7, #e5f8f7, #e5f8f7, #e5f8f7, #ecf9fd, #f4fbff, #fbfcff, #ffffff)`

            // backgroundImage: 'radial-gradient(circle, #ffffff, #fbfafc, #f9f4f9, #f7eff5, #f6e9ef, #f6e9ef, #f6e9ef, #f6e9ef, #f7eff5, #f9f4f9, #fbfafc, #ffffff)'
            style={{
              backgroundImage: `radial-gradient(circle, #ffffff, #fbfbfd, #f6f6fb, #f1f2f9, #ebeef7, #ebeef7, #ebeef7, #ebeef7, #f1f2f9, #f6f6fb, #fbfbfd, #ffffff)`
            }}
            className="shadow-lg rounded-lg p-5 md:p-10 grid grid-cols-1 lg:grid-cols-2 mt-5  shadow-[#67e8f9]  mx-auto  gap-5">

            <div className="flex flex-col justify-beteween">
              <div>
                <div className="h2 text-logo_blue">
                  {data?.title || "Event Title Here"}das
                </div>
                <div className="h5">
                </div>
                <div className="flex py-2">
                  <span className="h4">Date: <span className="h5"> {data.startdate} - {data.enddate}</span></span>
                </div>

                <div className='' >
                    <Image height={200} width={200} src={data?.imageUrl} className='h-full w-full ' alt="" />
                  {/* <Image src={data?.imageurl}  />           */}
                          {/* <img className="rounded-lg w-[100%]  object-cover" src="https://images.pexels.com/photos/62376/pexels-photo-62376.jpeg" alt="" /> */}
                </div>
                <div className="h3 mt-3">
                  Leader Ship by "{data.leader}"
                </div>
                <div className="mt-5 p ">
                  {data.description} I want to like to share it thank for you
                </div>

              </div>



            </div>

            <div className="flex flex-col justify-between">
              <div>



                <div className="h3 pt-3">
                  Prizes won by
                </div>


                <div className="w-[100%] flex-wrap flex flex-col sm:flex-row justify-around mt-5 gap-5">
                  {prizes.map((prize, index) => (
                    <div
                      key={index}
                      className={`border  rounded-lg ${prize.borderColor} ${prize.bgColor} duration-500 hover:text-white w-[100%]`}
                    >
                      {prize.icon && (
                        <div className="grid grid-cols-5 py-4">
                          <div className="col-span-1 flex justify-center items-center">{prize.icon}</div>
                          <div className="col-span-4 flex justify-start pl-5 items-center">
                            <div>
                              <div className="h3 text-center">{prize.position}</div>
                              {/* <div className="text-center">  {prize.position == "First" && data.prizes.first_winner}</div>
                              <div className="text-center">  {prize.position == "Second" && data.prizes.second_winner}</div>
                              <div className="text-center">  {prize.position == "Third" && data.prizes.third_winner}</div> */}
                            </div>
                          </div>
                        </div>
                      )}
                      {!prize.icon && (
                        <>
                          <div className="h3 text-center">{prize.position}</div>
                          <div className="text-center">{prize.winner}</div>
                        </>
                      )}
                    </div>
                  ))}
                </div>



                <div className="text-center mt-5 text-logo_yellow">
                  {/* "{data.quote}" */}
                </div>


              </div>
              <div className="flex justify-between items-center text-center">
                {/* <div className='hidden md:block  xl:hidden h5'>
                View and Download 
              </div> */}
                <div className='flex justify-center  md:justify-end w-full' >
                  <button type="button" className="text-white  mt-5 bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                      <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                    </svg>
                    Google Drive Link
                  </button>
                </div>

              </div>
            </div>
          </div>

        ))
      }


      <div>
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageCount={eventcount / limit}
          containerClassName="containerpaginate"
          pageClassName="inactivemypaginate"
          pageLinkClassName="paginate-link" // This will ensure the link is styled correctly
          activeClassName="activemypaginate"
          activeLinkClassName="active-paginate-link"
          nextLabel={<span className="flaticon-right-arrow"><IoIosArrowForward /></span>}
          previousLabel={<span className="flaticon-left-arrow"><IoIosArrowBack /></span>}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          forcePage={pageclick - 1}
        />
      </div>








    </div>
    </>

  )
}

export default page