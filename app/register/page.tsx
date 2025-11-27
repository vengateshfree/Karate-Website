"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/karatelogo.png";
// import "./Register.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";

interface FormDataType {
  fullName: string;
  phone: string;
  dob: string; 
  gender: string;
  Address: string;
  academyName: string;
  beltRank: string;
}

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    phone: "",
    dob: "",
    gender: "",
    Address: "",
    academyName: "",
    beltRank: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // 👉 Send data to Next.js API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to register");

      toast.success("Thank you for registering!");

      setFormData({
        fullName: "",
        phone: "",
        dob: "",
        gender: "",
        Address: "",
        academyName: "",
        beltRank: "",
      });

      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="custom-gradient min-h-screen backdrop-blur-2xl pt-10">
      <div
        className="max-w-4xl mx-auto bg-white/60 w-[90%] md:w-auto backdrop-blur-2xl rounded-lg shadow-lg bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${logo.src})` }}
      >
        <div className="bg-white/60 backdrop-blur-2xl py-10 rounded-lg relative">
          {/* Close Button */}
          <button onClick={() => router.push("/")} className="absolute top-5 right-5">
            <IoMdClose size={25} className="text-logo_blue cursor-pointer" />
          </button>

          <div className="w-[90%] mx-auto">
            <div className="text-center">
              <h2 className="h2 font-bold text-gray-800 mb-4 text-logo_red">
                Tournament Registration
              </h2>
              <p className="text-logo_blue">
                Please fill out the form below to register for the tournament.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full border-b-2 border-logo_blue px-4 py-2 bg-transparent focus:outline-none"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border-b-2 border-logo_blue px-4 py-2 bg-transparent focus:outline-none"
                      required
                    />
                  </div>

                  {/* DOB */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) =>
                        setFormData({ ...formData, dob: e.target.value })
                      }
                      className="w-full border-b-2 border-logo_blue px-4 py-2 bg-transparent focus:outline-none"
                      required
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      className="w-full border-b-2 border-logo_blue px-4 py-2 bg-transparent focus:outline-none"
                      required
                    >
                      <option value="" disabled>
                        Select your gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Address"
                      value={formData.Address}
                      onChange={(e) =>
                        setFormData({ ...formData, Address: e.target.value })
                      }
                      className="w-full border-b-2 border-logo_blue px-4 py-2 bg-transparent focus:outline-none"
                      required
                    />
                  </div>

                  {/* Academy Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Academy Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your academy name"
                      value={formData.academyName}
                      onChange={(e) =>
                        setFormData({ ...formData, academyName: e.target.value })
                      }
                      className="w-full border-b-2 border-logo_blue px-4 py-2 bg-transparent focus:outline-none"
                      required
                    />
                  </div>

                  {/* Belt Rank */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Belt Rank
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your belt rank"
                      value={formData.beltRank}
                      onChange={(e) =>
                        setFormData({ ...formData, beltRank: e.target.value })
                      }
                      className="w-full border-b-2 border-logo_blue px-4 py-2 bg-transparent focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="mt-4 w-[300px] bg-blue text-white font-semibold py-3 rounded-lg transition duration-300 hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Registering..." : "Register Now"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
