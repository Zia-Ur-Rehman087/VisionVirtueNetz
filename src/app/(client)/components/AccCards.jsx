import * as React from 'react';
import AccData from './AccCardsData'
import Image from 'next/image';

export default function PortImageList() {
  return (
<div className="listParent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-10 w-full">
  {AccData.map((item) => (
    <div
      key={item.id}
      className="group overflow-hidden relative rounded-lg"
      style={{ width: '100%',height:'100%' }}
    > {console.log(item.img, 'I am here from Accordion cards')}
      <Image
        src={item.img}
        alt={item.title}
        className="w-full h-auto rounded-lg"
        width={300}
        height={200}
      />
      <div className="content flex justify-between items-end group-hover:justify-center  group-hover:gap-5 group-hover:items-center group-hover:flex-col   h-10 bg-[#1B1B1B] text-[#959595] p-2 rounded-b-lg absolute bottom-0 z-20 m-0  transition-all duration-1000 ease-in-out w-full group-hover:opacity-75 group-hover:h-full group-hover:w-full h-10  hover:cursor-pointer
      
      ">
        <h4 className='text-sm text-[14px] font-bold text-white shadow-xl group-hover:md:text-3xl'>{item.name}</h4>
        <p className='text-[14px] font-light text-gray-200 shadow-xl group-hover:text-xl'>{item.category}</p>
      </div>

    </div>
  ))}
</div>

  );
}