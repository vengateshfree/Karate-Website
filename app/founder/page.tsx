"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import meditate from '../../public/meditate.jpg';
import first from '../../public/first.jpg';
import longice from '../../public/longice.jpg';
import reco from '../../public/reco.jpg';
import icepunch from '../../public/icepunch.jpg';
import groupmaster from '../../public/groupmaster.jpg';
import india from '../../public/india.jpg';
import forindia from '../../public/forindia.jpg';

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Master Introduction Section */}
        <div 
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center mb-6">
            Dr. P. Chinnusamy - IV Dan Black Belt Master
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Dr. P. Chinnusamy is a distinguished IV Dan Black Belt (YONDAN) from Japan with 28 years of dedicated karate experience since 1996. As the Kyokushin Karate Instructor for World So-Kyokushin (Japan) and Tamil Nadu Branch Chief, he founded the Tamil Nadu Kyokushin Chinnu's Karate Association, affiliated with Nehru Yuva Kendra Sangathan, Government of India. His journey from earning his 1st Dan in 2009 to achieving 4th Dan in 2023 reflects unwavering commitment to martial arts excellence.
          </p>
          <p className="text-sm text-gray-500 italic text-center">
            Contact: +91 9865950808 | kyokushinchinnu@gmail.com
          </p>
        </div>

        {/* Journey Section Title */}
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Journey of Dr. P. Chinnusamy
        </h1>

        {/* First Winning Match Section */}
        <div 
          className="bg-white rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center gap-8"
          data-aos="fade-right"
        >
          <div className="md:w-1/2">
            <Image
              src={first}
              alt="First national victory"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              First Winning Match at the National Level
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Chinnusamy's journey to excellence began with significant milestones at the national level in India. His early achievements include a Best Performance at the 17th State Tournament in Kanniyakumari (2000) and III Place finishes in subsequent state championships. In 2008, he earned recognition as Best Fighter at the West Bengal National Open, cementing his reputation as a formidable competitor.
            </p>
          </div>
        </div>

        {/* World Level Recognition Section */}
        <div 
          className="bg-white rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row-reverse items-center gap-8"
          data-aos="fade-left"
        >
          <div className="md:w-1/2">
            <Image
              src={reco}
              alt="World level recognition"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Recognition at the World Level Masters Event
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Chinnusamy's expertise extends beyond national boundaries. He has competed in prestigious World Tournaments in Shizuoka City, Japan (October 2016 and November 2023), showcasing his exceptional skills on the global stage. His international experience also includes the 1st All Asia Weight Category Championship in Manila, Philippines (2011), where he represented India with distinction.
            </p>
          </div>
        </div>

        {/* Ice-Breaking Leadership Section */}
        <div 
          className="bg-white rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center gap-8"
          data-aos="fade-right"
        >
          <div className="md:w-1/2">
            <Image
              src={icepunch}
              alt="Leadership and teaching"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Building Excellence Through Education
            </h3>
            <p className="text-gray-700 leading-relaxed">
              As founder of Tamil Nadu Kyokushin Chinnu's Karate Association, Dr. Chinnusamy has shaped countless lives through his teaching at prestigious institutions including Universal Public School, Bharathi Vidyalaya, Minerva Matriculation School, and Wisdom Matric Hr. Secondary School. His approach fosters discipline, confidence, and martial arts mastery in students across Tamil Nadu.
            </p>
          </div>
        </div>

        {/* Tournament Organization Section */}
        <div 
          className="bg-white rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row-reverse items-center gap-8"
          data-aos="fade-left"
        >
          <div className="md:w-1/2">
            <Image
              src={groupmaster}
              alt="Tournament organization"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Organizing Championship Events
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Chinnusamy has organized numerous tournaments from district to national levels, including the landmark State Level Kata & Kumite Championship at Gandhi Stadium, Salem, with ~500 student participants. From 2010 to 2024, he has conducted over 15 major championships including the 2019 National Level Karate Tournament for Senior & Junior at Edappadi, providing platforms for karatekas to showcase their skills.
            </p>
          </div>
        </div>

        {/* National Unity Section */}
        <div 
          className="bg-white rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center gap-8"
          data-aos="fade-right"
        >
          <div className="md:w-1/2">
            <Image
              src={india}
              alt="Promoting national unity"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Promoting National Unity through Karate
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Through his affiliation with Nehru Yuva Kendra Sangathan, Government of India (Affiliation No: 027/2016), Dr. Chinnusamy bridges communities across Tamil Nadu. His state-wide initiatives unite students from diverse backgrounds, fostering national integration through the discipline and respect inherent in martial arts training.
            </p>
          </div>
        </div>

        {/* International Bridges Section */}
        <div 
          className="bg-white rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row-reverse items-center gap-8"
          data-aos="fade-left"
        >
          <div className="md:w-1/2">
            <Image
              src={longice}
              alt="International martial arts"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Building International Bridges through Martial Arts
            </h3>
            <p className="text-gray-700 leading-relaxed">
              As Tamil Nadu Branch Chief of World So-Kyokushin (Japan), Dr. Chinnusamy serves as a cultural ambassador, connecting Indian martial artists with the global Kyokushin community. His multiple trips to Japan and participation in international tournaments have strengthened Indo-Japanese martial arts relations and brought global best practices to Tamil Nadu.
            </p>
          </div>
        </div>

        {/* Asian Championships Section */}
        <div 
          className="bg-white rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center gap-8"
          data-aos="fade-right"
        >
          <div className="md:w-1/2">
            <Image
              src={forindia}
              alt="Asian championships"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Fostering Peace through Asian Karate Championships
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Chinnusamy's participation in the 1st All Asia Weight Category Championship in Manila, Philippines (2011) and the Asian Open Tournament in Kerala Trivandrum (2012) where he delivered a Best Performance, exemplifies how martial arts transcend borders. His I Place finish at the 2012 National Asian Selection Tournament in Kochi represents India's competitive spirit at the continental level.
            </p>
          </div>
        </div>

        {/* Black Belt Progression Section */}
        <div 
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Black Belt Achievement Timeline
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-red-600 mb-2">2009</div>
              <div className="text-xl font-semibold mb-2">1st Dan</div>
              <div className="text-gray-600">SHODAN</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-red-600 mb-2">2012</div>
              <div className="text-xl font-semibold mb-2">2nd Dan</div>
              <div className="text-gray-600">NIDAN</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-red-600 mb-2">2017</div>
              <div className="text-xl font-semibold mb-2">3rd Dan</div>
              <div className="text-gray-600">SANDAN</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-red-600 mb-2">2023</div>
              <div className="text-xl font-semibold mb-2">4th Dan</div>
              <div className="text-gray-600">YONDAN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;