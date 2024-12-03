import React from "react";
import img from "../../assets/images/Image.png"

const HomePage = () => {
  return (
    <div className="bg-[#1A1A2E] text-white min-h-screen">

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-4">
        {/* Text Content */}
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold leading-snug">
            Transform Your Idea Into Reality with Finsweet
          </h2>
          <p className="text-gray-300 mt-4">
            The entire Finsweet team knows what’s good with Webflow and you can too within 1 week and a good attitude.
          </p>
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700">
            Request Quote →
          </button>
        </div>
        {/* Image Content */}
        <div className="mt-8 md:mt-0">
          <img
            src={img} 
            alt="Team working"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-[#252540] py-6">
        <div className="container mx-auto text-center">
          <h4 className="text-gray-300 mb-4">Our Clients</h4>
          <p className="text-white font-bold mb-6">We’ve Worked with</p>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Replace these placeholders with actual logo images */}
            <div className="bg-gray-500 w-20 h-10 rounded-md"></div>
            <div className="bg-gray-500 w-20 h-10 rounded-md"></div>
            <div className="bg-gray-500 w-20 h-10 rounded-md"></div>
            <div className="bg-gray-500 w-20 h-10 rounded-md"></div>
            <div className="bg-gray-500 w-20 h-10 rounded-md"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
