import * as React from 'react';
import AccData from './AccCardsData'


// import Image from '@mui/material/Image';
export default function PortImageList() {
  return (
<div className="listParent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 w-full">
  {AccData.map((item) => (
    <div
      key={item.id}
      className="overflow-hidden"
      style={{ width: '100%',height:'100%' }}
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-auto"
      />
      <div className="content flex justify-between bg-[#1B1B1B] text-[#959595] p-2 rounded-b-lg items-center">
        <h4 className='text-sm'>{item.name}</h4>
        <p className='text-xs'>{item.category}</p>
      </div>
    </div>
  ))}
</div>

  );
}