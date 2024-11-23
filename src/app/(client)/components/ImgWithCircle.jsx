import React from 'react';

function ImageWithCircle({ imgSrc, altText }) {
  return (
    <div className="relative">
      <img src={imgSrc} alt={altText} className="bg-black rounded-full p-5 mx-auto" />
      <div className="after:content-[''] after:bg-[#FD6F00] after:w-[6.5rem] after:h-[6.5rem] after:rounded-full after:absolute after:top-0 after:left-0 after:transform after:translate-x-[-0.4rem] after:translate-y-[-0.4rem] after:-z-20"></div>
    </div>
  )
}

export default ImageWithCircle;
