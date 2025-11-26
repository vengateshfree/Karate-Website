"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";

function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post("/api/contact", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      });

      toast.success("Thank you for contacting us!", {
        autoClose: 3000,
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Failed to send contact:", error);
      toast.error("Failed to send message!");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div data-aos="fade-in" className="h2 text-center pt-5 text-logo_blue">
        Events
      </div>
      <div
        data-aos="fade-in"
        className="h3 text-center mt-4 mb-10 text-letter-dark"
      >
        Elevate your well-being with classes that focus on both physical and
        mental health.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[100%] lg:w-[1024px] mx-auto">
        {/* LEFT IMAGE + CONTACT INFO */}
        <div data-aos="fade-right" className="flex justify-center relative">
          <img
            src="https://images.pexels.com/photos/7045675/pexels-photo-7045675.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Contact"
            className="rounded-md shadow-lg w-[100%] h-[500px] object-cover"
          />
          <div className="absolute">
            <div className="flex flex-col justify-around h-[500px]">
              <div className="text-white h2">All Ways Welcome</div>

              <div className="w-[260px] mx-auto py-5 shadow-2xl bg-white p-3 rounded-lg">
                <div className="h3 underline">Contact</div>

                <div className="flex items-center pl-5 mt-3">
                  <div className="h6 text-logo_blue font-bold">
                    Phone :
                    <span className="text-blue font-semibold"> 9575664087</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pl-5">
                  <div className="h6 text-logo_blue font-bold">
                    Email
                    <span className="text-blue font-semibold pl-2">
                      : Karate@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div data-aos="fade-left" className="p-6 rounded-md shadow-custom-skyblue">
          <div className="font-medium text-black text-lg mb-4 h2">
            Contact Form
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <label className="mb-2 block text-sm font-medium text-black">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your first name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded border-[1.5px] border-stroke px-5 py-3 text-black outline-none focus:border-logo_blue transition"
                  required
                />
              </div>

              <div className="w-full md:w-1/2">
                <label className="mb-2 block text-sm font-medium text-black">
                  Phone number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded border-[1.5px] border-stroke px-5 py-3 text-black outline-none focus:border-logo_blue transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-black">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded border-[1.5px] border-stroke px-5 py-3 text-black outline-none focus:border-logo_blue transition"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-black">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Type your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full rounded border-[1.5px] border-stroke px-5 py-3 text-black outline-none focus:border-logo_blue transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-logo_blue text-white font-medium py-3 rounded transition hover:bg-opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default ContactPage;
