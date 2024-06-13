import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import React from 'react'

const HeroSection = () => {
  return (
    <div id="hero" className="flex flex-col item-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            DENZO provides services
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text"> for  websites</span> 
            {/* VirtualR build tools for developers */}
        </h1>
        <p className="mt-10 text-lg  text-center flex justify-center text-neutral-500">
            Unlock the potential of your business with Denzo's web services. From sleek website designs to powerful SEO, we help you stand out online. Visit us today! #DenzoWebServices #Denzosolutions</p>
        <div className="flex flex-wrap justify-center gap-7 my-10">
            <a href="#" className="bg-gradient-to-r from-yellow-500 to-yellow-800 py-3 px-4 mx-3 rounded-md">
                Start from free
            </a>
            <a href="#" className="py-3 px-4 mx3 rounded-md border">
                Documentation
            </a>
        </div>
        <div className=" mt-10 flex justify-center   ">
            <video  
            autoPlay
            loop
             muted className="w-1/2 rounded-lg border-orange-700 shadow-orange-400 mx-2 my-4" >
                <source  src={video1} type="video/mp4"/>
                your browser does not support the video tag.
            </video>

            <video  autoPlay loop muted className= "w-1/2 rounded-lg border-orange-700 shadow-orange-400 mx-2 my-4" >
                <source  src={video2} type="video/mp4"/>
                your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default HeroSection

