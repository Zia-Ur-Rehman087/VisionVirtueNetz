'use client'
import Data from './Data.js';
import user from '../../../../public/user.svg'



function ServiceCards() {
    return ( 
        <>
   <div className="container items-center justify-center py-5 md:py-10">
   <div className="text-center ">
        <h1 className="font-bold text-2xl text-[#959595]">Services</h1>
        <p className="text-[#707070]">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
        </div>
   </div>
<div className="flex items-center justify-between py-6 w-full">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-fit items-center place-items-center w-full">
     {Data.map((el) => {
    return (
      <div key={el.id} className="bg-transparent dark:bg-[#1B1B1B] rounded-lg shadow-lg flex flex-col items-center justify-center p-6 text-center text-white">
        <div className="card">
          <img
            src={user.src}
            alt="icon"
            className=" mx-auto mb-4"
          />
          <h1 className="text-lg font-semibold text-orange-500 mb-2">
            {el.title}
          </h1>
          <p className="text-sm text-gray-400">{el.description}</p>
        </div>
      </div>
    );
  })}
     </div>

</div>

        </>
     );
}

export default ServiceCards;