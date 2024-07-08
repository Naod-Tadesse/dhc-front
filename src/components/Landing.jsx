import React from "react";

const Landing = () => {
  const scrollToFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAboutUs = () => {
    document.getElementById("AboutUss").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="backgroundimg flex flex-col h-screen">
      <div className="flex justify-between items-center py-8 px-16">
        <div className="text-white text-3xl border-2 rounded-md px-2">DHC</div>
        <ul className="flex gap-10 text-white text-md">
          <li className="f">Home</li>
          <li>About Us</li>
          <li>Our Team</li>
          <li>News</li>
          <li onClick={scrollToFooter}>Contact us</li>
          <li onClick={scrollToAboutUs}>Announcements</li>
        </ul>
      </div>
      <div className="pl-16 h-[50%] flex items-center justify-center">
        {/* Adjust mt-12 or any other value as needed */}
        <div className=" flex flex-col gap-4 items-center ">
          <p className="text-white font-inter  text-5xl">
            Welcome to the Digital Health Center
          </p>
          <p className="text-white  text-3xl">
            Empowering Your Health Journey!
          </p>
          {/* <p className="text-white text-justify">
          Through Technology At the Digital Health Center, we bring the
          future of healthcare to you. Our mission is to provide innovative,
          accessible, and personalized healthcare solutions through advanced
          technology and expert care.
        </p> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
