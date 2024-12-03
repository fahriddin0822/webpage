import React from 'react'
import img from "../../assets/svg/Imagecareer.svg"

const Career = () => {
  return (
    <div className="bg-[#f2f5fa] py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h2 className="text-[#1e2d4d] text-4xl flex text-center items-center font-bold mb-8">
          We hired people who are <br />
          Always Passionate about <br />
          what they do
        </h2>
        <p className="text-[#1e2d4d] text-lg mb-8">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unafftable.
        </p>
          <div className='flex'>
            <img src={img} alt="HR Manager" className="rounded-md mb-4" />
          </div>
      </div>
    </div>
  )
}

export default Career