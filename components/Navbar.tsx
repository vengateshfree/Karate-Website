"use client";

import React, { useEffect, useState } from 'react';
import logo from '../public/karatelogo.png';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { format } from 'date-fns';
import CircularText from './CircularText';
import { SiRiotgames } from "react-icons/si";
import Image from 'next/image';
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import { BiCalendar, BiCloset, BiPhone } from 'react-icons/bi';
import { GiTrophy } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';

// Interface for Tournament Data
interface TournamentData {
  tournamentName: string;
  About: string;
  startDate: string;
  category: string;
  enquiry: string;
}

// Interface for Nav Items
interface NavItem {
  name: string;
  path: string;
}

// Props Interface
interface NavbarProps {
  getmydata?: any[];
}

const Navbar: React.FC<NavbarProps> = ({ getmydata = [] }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [active, setActive] = useState<string>(pathname);
  const [popupdata, setPopupdata] = useState<TournamentData | null>(null);
  const [adver, setAdver] = useState<boolean>(true);

  console.log(pathname, "pathnamesss");

  // Update active item when route changes
  useEffect(() => {
    setActive(pathname);
    setIsMenuOpen(false);
  }, [pathname]);

  // Register navigation
  const RegisterNavigation = (): void => {
    router.push("/register");
  };

  // Mobile toggle
  const navToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll handler
  useEffect(() => {
    let lastScrollTop = 200;

    const handleScroll = (): void => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      console.log(scrollTop, lastScrollTop, "lakeship");

      if (scrollTop <= 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch tournament data
  useEffect(() => {
    async function fetchTournaments(): Promise<void> {
      try {
        const response = await axios.get<{ data: TournamentData[] }>(`/api/tournment`);
        setPopupdata(response?.data?.data?.[0] || null);
        console.log(response, 'this is response from tournaments api');
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchTournaments();
  }, []);

  // Close advertisement
  const closeAd = (): void => {
    setAdver(false);
  };

  // Navigation items
  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Master", path: "/founder" },
    { name: "Event", path: "/event" },
    { name: "Dojo's", path: "/dojos" },
    { name: "Blog", path: "/blog" },
    { name: "Contact us", path: "/contact" },
  ];

  // Handle navigation for mobile menu
  const handleNavigation = (path: string): void => {
    setActive(path);
    router.push(path);
    setIsMenuOpen(false);
  };

    const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    });
  };

  return (
    <div className='fixed top-0 w-full z-50 overflow-hidden'>
      {/* Desktop Navbar */}
      <div
        className={`${
          isVisible
            ? "sticky top-0 duration-1000 w-full bg-[#005691] text-white py-1 z-40"
            : "sticky top-0 w-full bg-[#005691]/30 duration-1000 text-white py-1 z-40"
        }`}
      >
        <div className="flex justify-between lg:justify-around items-center px-3">
          {/* LOGO */}
          <div className="flex items-center">
            <div className="w-16 md:w-16">
              <Image src={logo} alt="logo" />
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div onClick={navToggle} className="lg:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.17em"
              height="1em"
              viewBox="0 0 28 24"
            >
              <path
                fill="currentColor"
                d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22m0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22m0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22"
              />
            </svg>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex space-x-10">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div
                    onClick={() => setActive(item.path)}
                    className={`h4 ${
                      active === item.path ? "text-amber-300" : ""
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Register Button */}
          <div className="hidden lg:block">
            <div className="flex space-x-8 items-center">
              <div
                onClick={RegisterNavigation}
                className="border border-[#0a8cbf] hover:bg-[#0a8cbf] cursor-pointer text-white h-10 flex items-center rounded-md justify-center px-10"
              >
                Register
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advertisement Popup */}
      {adver && popupdata && (
        <div onClick={()=>setAdver(false)} className='fixed inset-0 h-screen w-screen z-50 ' >
          <div className='bg-black/50 w-screen h-screen flex justify-center items-center backdrop-blur-md' >
       <div 
      onClick={(e) => e.stopPropagation()} 
      className='w-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300'
    >
      {/* Header with gradient */}
      <div className='bg-gradient-to-r from-yellow-400 to-orange-500 p-6 relative'>
        <button
          onClick={() => closeAd()}
          className='absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors'
          aria-label='Close'
        >
          <CgClose className='w-5 h-5 text-white' />
        </button>
        <h2 className='text-2xl font-bold text-white pr-8 leading-tight'>
          {popupdata?.tournamentName}
        </h2>
      </div>

      {/* Content */}
      <div className='p-6 space-y-5'>
        {/* About Section */}
        <div>
          <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2'>
            About
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            {popupdata?.About}
          </p>
        </div>

        {/* Info Grid */}
        <div className='space-y-3'>
          {/* Date */}
          <div className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg'>
            <div className='p-2 bg-yellow-100 rounded-lg'>
              <BiCalendar className='w-5 h-5 text-yellow-600' />
            </div>
            <div>
              <p className='text-xs font-medium text-gray-500 mb-0.5'>Date</p>
              <p className='text-sm font-semibold text-gray-900'>
                {popupdata?.startDate && formatDate(popupdata?.startDate)}
              </p>
            </div>
          </div>

          {/* Category */}
          <div className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg'>
            <div className='p-2 bg-blue-100 rounded-lg'>
              <GiTrophy className='w-5 h-5 text-blue-600' />
            </div>
            <div>
              <p className='text-xs font-medium text-gray-500 mb-0.5'>Eligible Categories</p>
              <p className='text-sm font-semibold text-gray-900'>
                {popupdata?.category}
              </p>
            </div>
          </div>

          {/* Enquiry */}
          <div className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg'>
            <div className='p-2 bg-green-100 rounded-lg'>
              <BiPhone className='w-5 h-5 text-green-600' />
            </div>
            <div>
              <p className='text-xs font-medium text-gray-500 mb-0.5'>Enquiry</p>
              <a 
                href={`tel:${popupdata?.enquiry}`}
                className='text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors'
              >
                {popupdata?.enquiry}
              </a>
            </div>
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={()=>{
             router.push('/register')
              setAdver(false)
            
            } }
          className='w-full h-12 bg-gradient-to-r cursor-pointer from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2'
        >
          Register Now
          <span className='text-xl'>→</span>
        </button>
      </div>
    </div>

    </div>
    </div>
      )}

   <div className='fixed bottom-10 z-50 right-5
            bg-logo_white shadow-md shadow-logo_red rounded-full backdrop:blur-md ' >
          <div className='relative' >
            <CircularText
              text="tournment*1-4-2024*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
            <div onClick={() => setAdver(!adver)} className='absolute top-0 left-0 h-full w-full flex justify-center items-center cursor-pointer' >
              <SiRiotgames className='text-logo_green' size={25} />
            </div>
          </div>
        </div>
      {/* Mobile Navbar */}
      <div className="lg:hidden z-50">
        <div
          className={`${isMenuOpen ? "w-[80%] sm:w-[50%]" : "w-0"} 
          bg-white h-[100vh] fixed top-0 right-0 duration-700 z-50 overflow-hidden`}
        >
          {/* TOP LOGO + CLOSE */}
          <div className="flex justify-between px-5 items-center">
            <div className="absolute h-16 w-16 z-50 top-3 left-3">
              <Image src={logo} alt="logo" />
            </div>

            <div
              onClick={navToggle}
              className={`absolute cursor-pointer right-2 top-5 ${
                isMenuOpen ? "" : "hidden"
              }`}
            >
              <IoMdClose size={24} />
            </div>
          </div>

          <div className="mt-24"></div>

          {/* MENU LIST */}
          {navItems.map((item) => (
            <div key={item.path}>
              <hr className="text-line" />

              <div
                onClick={() => handleNavigation(item.path)}
                className={`my-3 pl-10 h5s cursor-pointer ${
                  active === item.path ? "text-blue border-l-4 rounded-full" : ""
                }`}
              >
                {item.name}
              </div>

              <hr className="text-line" />
            </div>
          ))}

          {/* REGISTER BUTTON */}
          <div className="mt-5 w-full">
            <div className="flex pl-[35%]">
              <div
                onClick={() => {
                  router.push("/register");
                  navToggle();
                }}
                className="bg-logo_blue text-white py-2 rounded-md cursor-pointer inline-flex px-5"
              >
                Register
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className={`${isMenuOpen ? "" : "hidden"} flex justify-around my-5`}>
            <div className="border-x-2 border-y-2 p-2 text-letter-black cursor-pointer border-line"></div>
            <div className="border-x-2 border-y-2 p-2 text-letter-black cursor-pointer border-line"></div>
            <div className="border-x-2 border-y-2 p-2 text-letter-black cursor-pointer border-line"></div>
            <div className="border-x-2 border-y-2 p-2 text-letter-black cursor-pointer border-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;