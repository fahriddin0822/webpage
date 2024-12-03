import React from 'react'
import img1 from "../../assets/images/Image 1.png"
import img2 from "../../assets/images/Image 2.png"
import img3 from "../../assets/images/Image 3.png"
import logo from "../../assets/svg/Shapes.svg"

const Company = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#1e2d4d] text-4xl font-bold">
            Award-winning Company <br/>
            seen and used by millions <br/>
            around the world.
          </h2>
          <img src={logo} alt="Company Logo" className="h-12" />
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <img src={img1} alt="Meeting Room" className="rounded-md" />
            <p className="text-[#1e2d4d] text-lg font-medium mt-4">From Startups to Titans</p>
            <p className="text-[#1e2d4d] text-base">of the Industry</p>
          </div>
          <div>
            <img src={img2} alt="Design Team" className="rounded-md" />
            <p className="text-[#1e2d4d] text-lg font-medium mt-4">100+</p>
            <p className="text-[#1e2d4d] text-base">Professional</p>
          </div>
          <div>
            <img src={img3} alt="Office" className="rounded-md" />
            <p className="text-[#1e2d4d] text-lg font-medium mt-4">It is a long established fact</p>
            <p className="text-[#1e2d4d] text-base">that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company