"use client";


import React, { useEffect, useState } from 'react'
// import { useGetAllDojoQuery } from '../../features/api/userapi';
import { FaLocationDot } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ReactPaginate from 'react-paginate';

import meditate from '../../public/meditate.jpg'
// import meditate from '../../assets/meditate.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import axios from 'axios';

function Page() {

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
    


        // const [blogs, setBlogs] = useState ([]);
        // const [count, setCount ] = useState<number>(0);

        const[dojo, setdojo] = useState ([]);
        const [dojocount, setdojocount ] = useState<number>(0);

        
          useEffect(() => {
            async function fetchBlogs() {
              try {
                
        const response = await axios.get(`/api/dojos?page=${pageclick}&limit=${limit}&search=${search}`);
              //  const response = await axios.get('/api/dojos'); 
        
                console.log(response, 'this is response from bogs api')
                // const data = await response.data.data;
                setdojo(response?.data?.data);
                setdojocount(response?.data?.count);
              } catch (error) { 
                console.error("Fetch error:", error);
              }
            }
        
            fetchBlogs();
          }, []);


    // const [eventType, setEventType] = useState("upcoming")
  
    // const { data: getdojodata } = useGetAllDojoQuery({
  
    //   page: pageclick, // Default value if not provided
    //   limit: limit, // Default value if not provided
    //   // eventtype: eventType,
    //   sortBy: 'createdAt', // Default value if not provided
    //   sortOrder: 'desc', // Default value if not provided
    //   filter: {}, // Default value if not provided
    //   search: search // Default value if not provided
    // })
  
      const targetRef = React.useRef(null);
    
    const handlePageClick = (event) => {
      setPageClick(event.selected + 1);
      // const newOffset = (event.selected * limit) % getdojodata?.data?.length;
      // window.scrollTo({ top: 0, behavior: "smooth" });
      
    targetRef.current.scrollIntoView({ behavior: "smooth" });
      console.log("wake")
    };
  
    useEffect(() => {
      setPageClick(1)
  
  
    }, [search]);
  
  
  
  
  
  
    useEffect(() => {
  
      setinital(0)
  
    }, [limit])
  
    // const pageCount = getdojodata?.count;
    const pageCount = 0
  


  // const {data: getdojodata} = useGetAllDojoQuery();

  // console.log(getdojodata, 'this is getdojodata')

  

  return (
    <>
     <div className='h-[70dvh] w-full b relative' >
        <Image height={200} width={200} className='h-full w-full' src={meditate} alt="longmaster" />
          {/* <img src={meditate} className='h-full w-full ' alt="" /> */}
    
          <div className='h-full w-full absolute top-0 flex flex-col justify-center items-center bg-black/50' >
          <div data-aos="fade-in" className='h1 text-center pt-5 text-white'>Join with our Community</div>
          <div data-aos="fade-in" className='h2  w-[70%] text-center mt-5 md:mt-10 text-white'> Strengthen Your Mind and Body with Martial Arts Classes</div>
    
    
          </div>
    
        </div>
        <div ref={targetRef} className='h-[1dvh]'>

        </div>

        <div className='mt-10 '>
      <div className='h2 text-center py-5 text-logo_blue'>Classes Available</div>
      <div data-aos="fade-in" className='h3 text-log_letter_gray text-center'> Beginner, Intermediate, Advanced.</div>

      <div className=''>
    <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 py-10 w-[90%] mx-auto'>


{
  dojo.map((data)=>(
// [].map((data)=>(

 
      <div data-aos="fade-up" className='shadow-lg rounded-md bg-background'>
        <div className='flex justify-center relative group'>
      <Image height={200} width={200} src={data?.imageUrl} className='h-full w-full ' alt="" />

          {/* <img className=' rounded-t-md' src={data?.imageUrl} alt="" /> */}


          <div className=" absolute group-hover:bg-black/60 duration-1000 group-hover:rounded-t-md group-hover:bg-logo_yellow h-0 bottom-0 group-hover:h-full w-full ">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="h3 opacity-0 group-hover:opacity-100 text-white  duration-500">
          {data?.dojoName}
        </div>
        <div className="h4 text-white w-[90%] py-2 opacity-0 group-hover:opacity-100 duration-500 text-center">
          {data?.aboutdojo}
        </div>
    
      </div>
    </div>

        </div>
        <div className='p-1 pb-3 relative'>
        <div className='absolute top-5 right-5'>
          <a href={data.location_link} target='_blank'>
          <FaLocationDot size={30} />
          </a>
          </div>

          <div className='text-center h4 my-2'>
          {data?.dojoName} 
          </div>
        
          <div className='flex justify-center'>
            <div className='text-center h5 rounded-md '>
              Master: {data?.incharge}
            </div>
          
          </div>
        </div>
      </div>



    
  ))
}

</div>
</div>
   
<div>
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageCount={dojocount / limit}
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

export default Page