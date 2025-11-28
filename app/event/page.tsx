"use client";

import React, { useEffect, useState, useRef } from "react";
import { FaAward } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import meditate from '../../public/meditate.jpg'

function Page() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [pageclick, setPageClick] = useState(1);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(3);
  const [initial, setInitial] = useState(0);
  const [eventType, setEventType] = useState("upcoming");

  interface PrizeType {
    first_winner: string;
    second_winner: string;
    third_winner: string;
  }

  interface EventType {
    title: string;
    startdate: string;
    enddate: string;
    imageUrl: string;
    leader: string;
    description: string;
    prizes?: PrizeType;
  }

  const [event, setEvent] = useState<EventType[]>([]);
  const [eventcount, setEventCount] = useState<number>(0);

  const targetRef = useRef<HTMLDivElement>(null);

  // Fetch events API
  useEffect(() => {
    async function fetchEvents() {
      try {
   const response = await axios.get(
  `/api/events?page=${pageclick}&limit=${limit}&eventtype=${eventType}`
);


        setEvent(response.data.data);
        setEventCount(response.data.count);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchEvents();
  }, [pageclick, limit, eventType, search]);

  // When search or event type changes → reset to page 1
  useEffect(() => {
    setPageClick(1);
  }, [search, eventType]);

  // Reset initial offset on limit or event type change
  useEffect(() => {
    setInitial(0);
  }, [limit, eventType]);

  // Pagination handler
  const handlePageClick = (event: any) => {
    setPageClick(event.selected + 1);

    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <> 
      {/* Banner Section */}
      <div className="h-[70dvh] relative">
            <Image height={200} width={200} className='h-full w-full' src={meditate} alt="longmaster" />
              
        <div className="h-full w-full bg-black/50 absolute top-0 flex flex-col justify-center items-center">
          <div data-aos="fade-in" className="h1 text-white">
            Events
          </div>
          <div data-aos="fade-in" className="h2 text-white mt-5 md:mt-10 w-[70%] text-center">
            Elevate your well-being with classes that focus on both physical and mental health.
          </div>
        </div>
      </div>

      <div ref={targetRef} className="h-[1dvh]"></div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:w-[1024px] gap-5 mx-auto w-[90%]">
        <div className="h2 text-center mt-10 text-logo_blue">Our Team Focus on Well Manner.</div>

        {/* Type Filter */}
        <div data-aos="fade-in" className="flex justify-center cursor-pointer my-4">
          <div className="flex bg-[#005691]/70 h-10 rounded-md shadow-lg">
            <div
              onClick={() => setEventType("upcoming")}
              className={`${
                eventType === "upcoming"
                  ? "bg-[#005691] h5 text-logo_yellow"
                  : "text-white"
              } flex justify-center items-center w-[150px] rounded-md`}
            >
              Upcoming
            </div>
            <div
              onClick={() => setEventType("completed")}
              className={`${
                eventType === "completed"
                  ? "bg-[#005691] h5 text-logo_yellow"
                  : "text-white"
              } flex justify-center items-center w-[150px] rounded-md`}
            >
              Completed
            </div>
          </div>
        </div>

        {/* Events List */}
        {event?.map((data, i) => {
          const prizes = [
            {
              position: data?.prizes?.first_winner || "No Winner",
              borderColor: "border-logo_red",
              bgColor: "hover:bg-logo_red",
              icon: (
                <FaAward className="text-red-500" size={35} />
              ),
            },
            {
              position: data?.prizes?.second_winner || "No Winner",
              borderColor: "border-logo_yellow",
              bgColor: "hover:bg-logo_yellow",
              icon: <FaAward size={35} />,
            },
            {
              position: data?.prizes?.third_winner || "No Winner",
              borderColor: "border-logo_blue",
              bgColor: "hover:bg-logo_blue",
              icon: <FaAward size={35} />,
            },
          ];

          return (
            <div
              key={i}
              data-aos="fade-up"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff, #f1f2f9, #ebeef7, #f1f2f9, #ffffff)",
              }}
              className="shadow-lg rounded-lg p-5 md:p-10 grid grid-cols-1 lg:grid-cols-2 mt-5 shadow-[#67e8f9] gap-5"
            >
              {/* Left side */}
              <div>
                <div className="h2 text-logo_blue">{data.title}</div>

                <div className="flex py-2 h4">
                  Date:
                  <span className="h5">&nbsp;{data.startdate} - {data.enddate}</span>
                </div>

                <Image
                  height={300}
                  width={500}
                  src={data.imageUrl}
                  alt="Event Image"
                  className="rounded-lg w-full object-cover"
                />

                <div className="h3 mt-3">
                  Leadership by "{data.leader}"
                </div>

                <div className="mt-5">{data.description}</div>
              </div>

              {/* Right side */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="h3 pt-3">Prizes Won By</div>

                  <div className="flex flex-col sm:flex-row justify-around mt-5 gap-5">
                    {prizes.map((prize, index) => (
                      <div
                        key={index}
                        className={`border rounded-lg ${prize.borderColor} ${prize.bgColor} duration-500 hover:text-white w-full`}
                      >
                        <div className="grid grid-cols-5 py-4">
                          <div className="flex justify-center items-center">
                            {prize.icon}
                          </div>
                          <div className="col-span-4 flex items-center">
                            <div className="h3">{prize.position}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end mt-5">
                  <button className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 px-5 py-2.5 rounded-lg flex items-center">
                    Google Drive Link
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Pagination */}
        <div>
          <ReactPaginate
            breakLabel="..."
            onPageChange={handlePageClick}
            pageCount={Math.ceil(eventcount / limit)}
            containerClassName="containerpaginate"
            pageClassName="inactivemypaginate"
            pageLinkClassName="paginate-link"
            activeClassName="activemypaginate"
            activeLinkClassName="active-paginate-link"
            nextLabel={<IoIosArrowForward />}
            previousLabel={<IoIosArrowBack />}
            forcePage={pageclick - 1}
          />
        </div>
      </div>
    </>
  );
}

export default Page;
