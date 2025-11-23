"use client";

import React, { useEffect, useState } from 'react'
// import { useGetAllBlogQuery } from '../../features/api/userapi'

// import { format } from 'date-fns'

import { FaAward } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ReactPaginate from 'react-paginate';
import AOS from "aos";
import "aos/dist/aos.css";

import meditate from '../../public/meditate.jpg'
import Image from 'next/image';
import axios from 'axios';
function Blog() {

  
      const [pageclick, setPageClick] = useState(1);
      const [search, setSearch] = useState("")
      const [limit, setlimit] = useState(3)
      const [initial, setinital] = useState(0)

    const [blogs, setBlogs] = useState<[]> ([]);
    const [count, setCount ] = useState<number>(0);

    console.log(blogs, 'this is blogs')

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get(`/api/blogs?page=${pageclick}&limit=${limit}&search=${search}`); 

        console.log(response, 'this is response from blogs api')
        // const data = await response.data.data;
        setBlogs(response?.data?.data);
        setCount(response?.data?.count);
      } catch (error) { 
        console.error("Fetch error:", error);
      }
    }

    fetchBlogs();
  }, []);

     useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          // once: true,     // Whether animation should happen only once
        });
      }, []);

  const [hideBlog, setHideBlog] = useState(true)


  
      // const [eventType, setEventType] = useState("upcoming")
    
    //   const { data: getblogdata } = useGetAllBlogQuery({
    
    //     page: pageclick, // Default value if not provided
    //     limit: limit, // Default value if not provided
    //     // eventtype: eventType,
    //     sortBy: 'createdAt', // Default value if not provided
    //     sortOrder: 'desc', // Default value if not provided
    //     filter: {}, // Default value if not provided
    //     search: search // Default value if not provided
    //   })
    

      
            const targetRef = React.useRef(null);
          
      const handlePageClick = (event: any) => {
        setPageClick(event.selected + 1);
        // const newOffset = (event.selected * limit) % getblogdata?.data?.length;
        // window.scrollTo({ top: 0, behavior: "smooth" });
        
        // targetRef.current.scrollIntoView({ behavior: "smooth" });
        console.log("wake")
      };
    
      useEffect(() => {
        setPageClick(1)
    
    
      }, [search]);
    
    
    
    
    
    
      useEffect(() => {
    
        setinital(0)
    
      }, [limit])


  return (
    <div>
         <div className='h-[70dvh]  relative' >
            <Image height={200} width={200} className='h-full w-full'  src={meditate} alt="" />
      
            <div className='h-full w-full absolute top-0 flex flex-col justify-center items-center bg-black/50' >
            <div  data-aos="fade-in"  className='h1 text-center pt-5 text-white'>Blog</div>
            <div data-aos="fade-in"  className='h2  w-[70%] text-center mt-5 md:mt-10 text-white'> Karate: A Journey of Discipline, Strength, and Mindfulness.</div>
      
      
            </div>
      
          </div>
          <div ref={targetRef}  className='h-[1dvh]' >
      
          </div>
          
      <div>
        {/* <div className=' '>
          <div className=' h-[90%] md:max-h-[400px]  w-[100%]   relative'>
            <img className='bg-cover h-[100%] md:max-h-[400px]  w-[100%]   relative '

              src="https://images.pexels.com/photos/7942466/pexels-photo-7942466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

              alt="" />
            <div className='absolute top-0  h-[100%]  md:max-h-[400px] w-[100%] bg-[#fca5a5] opacity-60 '>
            </div>
            <div className='absolute top-0  h-[100%]  w-[100%]  flex flex-col items-center justify-center'>

              <div className='h5  text-white  '>
                <div className='h1  py-10 lg:py-10 text-logo_blue opacity-90  text-center'>
                  Karate Chronicles
                </div>
              </div>
              <div className='h4  w-[95%] md:w-[60%] mx-auto  text-black text-center '>
                "Explore the art, discipline, and spirit of karate, where every strike is a lesson in self-mastery."
              </div>
            </div>
          </div>

          <div>

          </div>

        </div> */}
      </div>
      <div className='relative'>
        <div onClick={() => setHideBlog(!hideBlog)} className={` h-16 w-16 absolute right-0 z-50 top-[40%] lg:hidden`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 128 128"><path d="M119.59 64c0 30.297-24.563 54.855-54.86 54.855c-30.296 0-54.855-24.558-54.855-54.855S34.434 9.145 64.73 9.145c30.297 0 54.86 24.558 54.86 54.855m0 0"></path><path fill="#fff" d="M69.605 23.055c1.332.258 1.422.425.868 1.613c-.551 1.18-.524.914-.54 5.184c-.015 3.578-.093 4.941-.285 5.132c-.02.02-.414.137-.875.258c-1.52.399-1.48.352-1.66 2.117a32 32 0 0 0-.133 1.399c.008.008 1.567.34 3.465.738l3.453.727l3.743 2.109l1.375 2.262c.754 1.242 1.382 2.258 1.398 2.258c.012 0 1.086-.407 2.379-.903c1.297-.496 2.371-.894 2.387-.879c.035.035 1.16 7.754 1.132 7.778c-.16.136-7.75 2.375-7.93 2.34c-.128-.024-1.487-.43-3.023-.903c-1.535-.472-2.8-.844-2.816-.832c-.012.016-.09 1.594-.168 3.512a223 223 0 0 1-.164 3.5c-.008.008-.637.523-1.39 1.152l-1.376 1.14l-1.078-.034c-.59-.024-3.383-.075-6.203-.118l-5.125-.078l-1.66-1.027q-1.078-.668-2.168-1.332c-.613-.371-.621-.184.059-1.668c.308-.684.566-1.285.566-1.336c0-.062 2.223-.871 6.062-2.207c3.52-1.227 5.98-2.117 5.864-2.129c-.496-.043-11.961-.328-12.575-.312c-1.156.03-3.761-1.27-5.062-2.524c-.145-.14-.375-7.195-.238-7.32c1.8-1.64 2.914-2.442 4.867-3.496l1.973-1.07l2.718.109c2.371.094 2.746.094 2.938 0c.12-.063 1.441-.613 2.937-1.227l2.723-1.117l-2.578-.164a223 223 0 0 0-2.7-.168c-.171.004-1.808-2.285-1.882-2.625a158 158 0 0 1-.457-2.922l-.395-2.648l1.16-1.969c.903-1.535 1.192-1.973 1.313-1.977c.086-.003 1.613-.12 3.394-.261c3.446-.27 4.633-.285 5.707-.082m22.946 16.562c.804.078 1.332.223 1.597.434c.16.129.247.972.422 4.222l.016.329l-3.465 1.464c-1.91.805-3.527 1.485-3.594 1.504c-.148.051-2.011-2.574-1.902-2.675c.035-.032.574-.254 1.195-.493a64 64 0 0 0 1.172-.453c.024-.015 0-.648-.047-1.406c-.05-.762-.07-1.418-.043-1.457c.024-.043.328-.426.672-.848l.633-.773l1.293.043c.715.02 1.637.07 2.05.11m-3.179 2.69c.024.2.086.837.137 1.415c.05.582.101 1.07.113 1.086c.031.039 2.895-.774 2.89-.82c-.003-.051-3.05-2.036-3.124-2.036c-.032 0-.04.16-.016.356m-19.96 6.058q-.899 1.728-1.802 3.45l-.449.855l1.469-1.145l1.469-1.14l.043-.512c.023-.277.183-1.215.355-2.082c.48-2.426.477-2.422-1.086.574m-16.523 16.95a89 89 0 0 0 3.511.953c.973.238 1.813.453 1.864.48c.058.031-.14.32-.559.813l-.652.765l-.774 1.938l-.777 1.933l2.352-.054c1.296-.028 2.359-.055 2.363-.063c.004-.004.082-.738.172-1.629c.148-1.473.18-1.637.332-1.773c.093-.082.715-.551 1.386-1.04l1.215-.886l1.278.906l1.273.903l.137 1.718c.07.946.137 1.719.144 1.719l2.055-.023l2.047-.024l-1.227-2.543c-.675-1.394-1.218-2.55-1.203-2.562c.012-.016.813-.106 1.781-.203c1.645-.165 1.84-.2 3.02-.56c.691-.21 1.305-.382 1.36-.382c.058 0 1.507 1.602 3.226 3.563c3.793 4.32 3.82 4.351 6.406 6.765c4.668 4.364 5.301 5.18 5.985 7.7c.445 1.632.632 2.093 2.234 5.496c.832 1.765 1.594 3.52 1.883 4.34c.273.78.36.636-.77 1.3c-.402.235-.734.469-.734.52c-.004.293.976.699 4.23 1.758c4.207 1.367 4.907 1.878 3.926 2.87c-.707.712-1.195.786-5.254.786c-4.16 0-5.285-.121-5.75-.617c-.328-.348-.437-.118 1.266-2.672c.836-1.246 1.504-2.278 1.492-2.285c-.016-.012-1.398.109-3.078.265l-3.055.293l-2.336-.2c-1.285-.108-2.37-.226-2.414-.257c-.043-.031-1.48-2.937-3.199-6.457l-3.125-6.398l-4.719-3l-4.715-3l-1.96.047a78 78 0 0 0-2.551.09l-.59.046L56.437 81l-3.94 4.344l-4.911 4.71l-4.91 4.716l-1.477.187l-1.476.184l-3.059-.434c-1.68-.238-3.066-.426-3.078-.414s.707 1.004 1.598 2.203c.886 1.203 1.605 2.219 1.593 2.266c-.011.047-.277.48-.586.965l-.566.882l-2.977-.004c-4.53-.007-4.617-.046-3.96-1.648c.316-.766.414-.875 1.62-1.797c2.087-1.597 2.833-2.234 3.02-2.59c.059-.105-.086-.261-.851-.898c-.508-.426-.922-.828-.918-.895c.02-.379 10.363-14.496 12.144-16.57a137 137 0 0 0 3.723-4.602l1.922-2.503l.691-1.758a67 67 0 0 0 .816-2.153c.153-.48-.046-.496 2.032.125"></path></svg>
        </div>
        {blogs?.map((data) => (
       
          <div>
            <div data-aos="fade-up"  className="grid grid-cols-12 ">

              <div className="col-span-12  lg:col-span-8 md:p-10 ">
                <div className="grid grid-cols-12 shadow-lg rounded-xl  w-[100%] mt-10">
                  <div className="col-span-12 md:col-span-5 lg:col-span-5">
                          {/* <Image height={200} width={200} src={data?.imageUrl} className='h-full w-full ' alt="" /> */}

                    {/* <img className="w-full h-80 md:rounded-tl-xl md:rounded-bl-xl" src={data?.imageUrl} alt="" /> */}
                  </div>
                  <div className="col-span-12 md:col-span-7 p-5">
                    <div className="h-full flex flex-col justify-start">
                      <div>
                        <div className='h2'>{data?.title}</div>

                      </div>

                      {/* <h2 className="text-cyan-600 pt-3 h3">Date : <span>{format(new Date(data?.date), 'dd/MM/yyyy')} </span></h2> */}

                      <div className="pt-3 ">
                        {data?.mini_content}
                      </div>
                      <div className="flex   items-center h-full p h5">
                        {data?.content}
                      </div>
                      <div>
                        {data?.short_content}
                      </div>
                    </div>


                  </div>

                </div>



              </div>







              <div className={`${hideBlog ? "" : "hidden"} col-span-4 p-5   lg:block `}>
                <div className=' hidden lg:block top-0 lg:relative'>
                  <div className="     m-10 lg:absolute top-0 right-0 shadow-xl bg-white  lg:bg-none p-5">
                    <div className="text-center h3 text-logo_red">A Journey of Self-Discovery</div>
                    <div className="mt-5 h4">
                      The Art and Discipline of Karate:
                    </div>
                    <div className='mt-5'>
                      <span className=' text-logo_green '>  Self-Discovery: </span> Karate reveals your inner strength and pushes you to discover your true self.
                    </div>
                    <div className='mt-5'>
                      <span className=' text-logo_green'>  Discipline and Growth: </span>   It fosters personal growth, instilling respect, perseverance, and focus.
                    </div>
                    <div className='mt-5'>
                      <span className=' text-logo_green'>  Confidence and Growth: </span>   Continuous practice builds self-confidence and promotes physical and mental balance.
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        ))

        }

      </div>

              <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                pageCount={count / limit}
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
  )
}

export default Blog