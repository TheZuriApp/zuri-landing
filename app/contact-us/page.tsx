"use client";

import NavBar from "@/components/landing/nav-bar";
import { CtaSection } from "@/components/landing/cta-section";
import React, { useState } from "react";
import { MessageCircleMore, Mail } from "lucide-react";

type ContactUsProps = {
  onWaitlist: () => void;
};

export default function ContactUs({ onWaitlist }: ContactUsProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <header className="relative min-h-[90vh] sm:min-h-screen flex flex-col gap-4 pt-2 overflow-hidden ">
      <div className="absolute inset-0 -z-10" />
      {/* Navbar section */}
      <NavBar />
      {/* heading section */}
      <section className="relative bg-[#F9F1F4] min-h-[200px] sm:min-h-[300px] md:min-h-[350px] flex flex-col pt-20 sm:pt-24 md:pt-32 px-4 pb-4 sm:pb-4 md:pb-8">
        <div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `
      linear-gradient(to right, rgba(226,92,126,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226,92,126,0.06) 1px, transparent 1px)
    `,
            backgroundSize: "56px 56px",
            WebkitMaskImage: `
      linear-gradient(
        to right,
        transparent 0%,
        black 15%,
        black 85%,
        transparent 100%
      ),
      linear-gradient(
        black 0%,
        black 45%,
        transparent 100%
      )
    `,
            WebkitMaskComposite: "destination-in",
            maskComposite: "intersect",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="font-outfit font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-normal text-[#5B5757]">
            Contact <span className="text-[#5B5757]">Us</span>
          </h1>
        </div>
      </section>
      <div className="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-8 pt-16 m-4">
              {/* Contact Number Card */}
              <div className="relative bg-white rounded-3xl shadow-md p-8 text-center overflow-hidden">
                {/* Top Pink Strip */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-2 bg-[#F8E6EA] rounded-b-full" />

                <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-br from-[#EDC1CC33] to-pink-50 rounded-full mb-6 mt-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full">
                    <img
                      src="/images/contact-us/f1.svg"
                      alt="whatsapp logo"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-[16px] font-medium text-[#4F4E4E] mb-4 font-outfit">
                  Contact number
                </h3>

                <div className="space-y-2">
                  <p className="text-[#4F4E4E] font-outfit font-extralight text-[14px]">
                    +91 9667104545
                  </p>
                  <p className="text-[#4F4E4E] font-outfit font-extralight text-[14px]">
                    +91 9830124000
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="relative bg-white rounded-3xl shadow-md p-8 text-center overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-2 bg-[#F8E6EA] rounded-b-full" />

                <div className="inline-flex items-center justify-center w-25 h-25 bg-linear-to-br from-[#EDC1CC33] to-pink-50 rounded-full mb-6">
                  <div className="inline-flex items-center justify-center w-15 h-15 bg-white rounded-full">
                    <img
                      src="/images/contact-us/f2.svg"
                      alt="whatsapp logo"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[16px] font-medium text-[#4F4E4E] mb-4 font-outfit">
                  Email
                </h3>
                <p className="text-[#4F4E4E] font-outfit font-extralight text-[14px]">
                  hello@stylemezuri.com
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-3xl shadow-md p-8 lg:p-10">
              <h2 className="text-[20px] font-semibold text-gray-800 mb-2 font-outfit">
                Got Feedback? <span className="text-[#920146]">Contact Us</span>
              </h2>

              <div className="mt-8 space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[14px] font-medium text-gray-700 mb-2 font-geist"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Type your name"
                    className="
    w-full px-4 py-3 bg-[#F7F7F7] rounded-lg 
    focus:outline-none focus:ring-1 focus:ring-[#920146] focus:border-transparent 
    transition-all 
    font-geist text-[16px] font-extralight leading-[14px]
    placeholder:font-geist 
    placeholder:text-[16px] 
    placeholder:font-extralight 
    placeholder:tracking-normal
    placeholder:[text-edge:cap]
  "
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[14px] font-medium text-gray-700 mb-2 font-geist"
                  >
                    Email Id*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Type your email id"
                    className="    w-full px-4 py-3 bg-[#F7F7F7] rounded-lg 
    focus:outline-none focus:ring-1 focus:ring-[#920146] focus:border-transparent 
    transition-all 
    font-geist text-[16px] font-extralight leading-[14px]
    placeholder:font-geist 
    placeholder:text-[16px] 
    placeholder:font-extralight 
    placeholder:tracking-normal
    placeholder:[text-edge:cap]"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[14px] font-medium text-gray-700 mb-2 font-geist"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write a message....."
                    rows={8}
                    className="    w-full px-4 py-3 bg-[#F7F7F7] rounded-lg 
    focus:outline-none focus:ring-1 focus:ring-[#920146] focus:border-transparent 
    transition-all 
    font-geist text-[16px] font-extralight leading-3.5
    placeholder:font-geist 
    placeholder:text-[16px] 
    placeholder:font-extralight 
    placeholder:tracking-normal
    placeholder:[text-edge:cap]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#92014633] to-[#F2D1DA] text-[#4E4D4Ds] text-[14px] font-outfit font-normal rounded-full transform hover:scale-105 transition-all duration-200 hover:shadow-lg"
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </header>
  );
}
