'use client'
import Data from './Data.js';
import user from '../../../../public/user.svg'



function ServiceCards() {
    return ( 
        <>
<div className="parent py-[100px] lg:py-[150px]">
<div className="container items-center justify-center
  ">
   <div className="text-center flex flex-col gap-4 md:gap-8 pb-24px md:pb-[60px] lg:[80px]">
        <h1 className="font-bold text-2xl text-white text-[24px] md:text-[40px]">Services</h1>
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
          <p className="text-sm text-[#575757]">{el.description}</p>
        </div>
      </div>
    );
  })}
     </div>

</div>
</div>

        </>
     );
}

export default ServiceCards;