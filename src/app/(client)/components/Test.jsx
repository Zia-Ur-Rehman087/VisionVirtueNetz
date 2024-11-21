import React from "react";

export const ResponsiveImage = () => {
return (

<div className="relative flex justify-center items-center h-screen bg-black">
      {/* Image Wrapper */}
      <div className="relative">
        {/* Circle Behind Image */}
        <div className="absolute inset-0 w-72 h-72 rounded-full bg-black/20 -z-10 after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:rounded-full after:bg-gray-900" />
        {/* Image */}
        <img
          src="https://images.pexels.com/photos/29378602/pexels-photo-29378602/free-photo-of-abstract-reflection-of-urban-architecture-in-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" // Replace with the URL of your image
          alt="Styled Person"
          className="object-cover rounded-full"
        />
      </div> </div>
      )
    }