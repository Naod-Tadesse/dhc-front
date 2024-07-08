import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#151515]  px-20 py-20 h-[50vh]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#4F4F4F] text-xl font-bold uppercase">
            WHERE TO FIND US
          </p>
          <div className="text-white text-2xl font-light">
            <p className="text-wrap">
              1600 Amphitheatre Parkway Mountain View,
              <span className="block">California 94043 US</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#4F4F4F] text-xl font-bold uppercase">
            Follow Us
          </p>
          <div className="text-white text-2xl font-light">
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#4F4F4F] text-xl font-bold uppercase">
            Contact Us
          </p>
          <div className="text-white text-2xl font-thin">
            <p>+251099387635</p>
            <p>+251099387635</p>
            <p>info@dhc.com</p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <input
          type="text"
          className="bg-[#111111] text-[#2d2d2d] text-xl py-5 px-2 outline-none"
          placeholder="Enter your email address"
        />
        <button className="bg-[#F26522] px-6 py-5 text-white text-xl font-thin hover:bg-[#994017] ">
          subscribe
        </button>
      </div>
    </div>
  );
};

export default Footer;
