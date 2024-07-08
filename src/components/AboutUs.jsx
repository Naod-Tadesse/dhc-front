import React, { useState, useEffect } from "react";
import axios from "axios";
const AboutUs = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:1337/api/about-us");
      setData(result.data.data.attributes);
    } catch (err) {}
  };
  useEffect(() => {
    console.log("here");
    getData();
  }, []);

  if (!data) {
    return null; // Render a loading state while data is being fetched
  }
  return (
    <div
      id="AboutUs"
      className="h-screen flex flex-col items-center justify-center gap-6"
    >
      <div className="w-[90%] flex flex-col items-center gap-3">
        <h3 className="text-4xl text-blue-500">Who We Are</h3>
        <p className="text-center">{data.whoWeAre}</p>
      </div>
      <div className="w-[90%] flex flex-col items-center gap-3">
        <h3 className="text-4xl text-blue-500">Our Vision</h3>
        <p className="text-center">{data.OurVision}</p>
      </div>
    </div>
  );
};

export default AboutUs;
