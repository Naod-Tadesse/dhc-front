import React from "react";
import "./navbar.css";
import { list } from "postcss";
const Navbar = ({ isScrolled }) => {
  const scrollToAboutUs = () => {
    document.getElementById("AboutUs").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContactUs = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={`px-16 py-3 border-b shadow-sm flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-50 ${
        isScrolled ? "slideDown" : "slideUp"
      }`}
    >
      <div className="text-3xl border-2 border-black rounded-md px-2">DHC</div>
      <ul className="flex gap-10 text-md">
        {["Home", "About Us", "News", "Contact us", "Announcements"].map(
          (item, index) => {
            return (
              <li
                className="hover:bg-gray-100 hover:border-b-2 border-blue-500 transition duration-300 p-1 rounded-sm cursor-pointer"
                key={index}
                onClick={
                  index === 1
                    ? scrollToAboutUs
                    : index === 3
                    ? scrollToContactUs
                    : () => {}
                }
              >
                {item}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Navbar;
