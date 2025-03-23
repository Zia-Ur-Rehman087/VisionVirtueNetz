'use client'
import pImage from '../../../../public/portfolioImage.png'
import Image from 'next/image';
import {Instagram, Linkdin,Pinterest,Be} from '../../../reusable/social'
import {HireBtn} from '../../../reusable/social'
import {HeroIcon }from '../../../reusable/social'
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux';
function Hero() { 
  const theme = useSelector(state => state.theme.theme)
return (
<>
<Grid container spacing={2} id='home' className='gap-5 md:gap-5 pt-5 md:pt-10 lg:gap-10 justify-center md:justify-start '>
<Grid item sm={12} md={12} lg={6} className={`relative flex xs:items-center xs:justify-center gap-5  w-full xl:items-start
`}>

<div className="leftContent  flex flex-col gap-8 md:gap-12 xl:items-start w-full items-center h-full justify-center ">

<h4 className='text-[#959595] text-lg md:text-xl text-center xl:text-start '>
<span className="text-[#707070]">Hi I am</span><br/>
Zia-Ur-Rehman</h4>
{/* <span class="absolute inset-0 -z-10 top-24 bg-orange-500 blur-md  w-72 h-72 rounded-full"></span> */}
<div className='absolute top-0 translate-x-0  md:translate-x-0 -z-10 blur-lg w-80 h-80'>
<HeroIcon />
</div>
<h1 className="text-[#FD6F00] xs:text-lg text-[2.6rem] md:text-[4rem]  text-nowrap md:text-5xl font-bold">UI/UX designer</h1>
{/* ICONS */}
<div className="icons flex gap-5">
<div className={`hover:bg-[#959595] dark:hover:bg-[#FD6F00] border-[1px]  hover:border-transparent hover:cursor-pointer rounded-full p-2 transition-all duration-1000 ease-in-out ${theme==='dark'? 'border-white' : 'border-[#fd6f00]' }`}>
<Instagram fillColor={theme === "light" ? "#fd6f00" :"#959595"}

/>
</div>
<div className={`hover:bg-[#959595] dark:hover:bg-[#FD6F00] border-[1px] hover:border-transparent hover:cursor-pointer rounded-full p-2 ${theme==='dark'? 'border-white' : 'border-[#fd6f00]' }
transition-all duration-1000 ease-in-out`}>
<Linkdin
fillColor={theme === "light" ? "#fd6f00" :"#959595"}
/>
</div>
<div className={`hover:bg-[#959595] dark:hover:bg-[#FD6F00] border-[1px] ${theme==='dark'? 'border-white' : 'border-[#fd6f00]' } hover:border-transparent hover:cursor-pointer rounded-full p-2
transition-all duration-1000 ease-in-out`}>
<Pinterest 
fillColor={theme === "light" ? "#fd6f00" :"#959595"}
/>
</div>
<div className={`hover:bg-[#959595] dark:hover:bg-[#FD6F00] border-[1px] ${theme==='dark'? 'border-white' : 'border-[#fd6f00]' } hover:border-transparent hover:cursor-pointer rounded-full p-2 transition-all duration-1000 ease-in-out`}>
<Be 
fillColor={theme === "light" ? "#fd6f00" :"#959595"}
/>
</div>

</div>
{/* buttons */}
<div className="buttons flex gap-5 items-center">
    <div>

        <HireBtn text='Hire me' classes={`hover:text-[#959595] dark:text-white btn text-sm md:text-lg capitalize py-[10px] px-5 md:px-8 rounded-lg bg-[#FD6F00] cursor-pointer
        border-2 border-[#FD6F00] transition-all duration-500
        hover:bg-transparent border border-[#fd6f00] hover:border-[#959595]`}/>
    </div>
    <div>
        <button className="btn text-sm md:text-lg capitalize py-2 px-5 md:px-8 rounded-lg border border-2 border-[#959595] text-[#959595] bg-transparent hover:bg-[#FD6F00] hover:border-transparent hover:text-white transition-all duration-300">
            Download CV
        </button>
    </div>
</div>

<div className="parent bg-[#FFFFFF0A] p-2 md:p-5 flex rounded font-bold text-base md:text-lg !w-fit sm:w-auto flex-nowrap md:flex-nowrap my-3 md:my-5 dark:border-transparent ">
  {/* <!-- Experience --> */}
  <div className="flex items-center border-r-2 border-[#959595] pe-2 md:px-4 text-nowrap">
    <p className="text-[#FD6F00]  text-base md:text-lg">
      5+ <br />
      <span className="text-[#959595] dark:text-white text-[12px] md:text-base font-normal md:font-bold text-nowrap tracking-wider">Experiences</span>
    </p>
  </div>
  {/* <!-- Projects Done --> */}
  <div className="flex items-center border-r-2 border-[#959595] px-2 md:px-4 justify-between items-center md:mx-auto lg:m-0">
    <p className="text-[#FD6F00]  text-base md:text-lg">
      20+ <br />
      <span className="text-[#959595] dark:text-white text-[12px] md:text-base font-normal md:font-bold text-nowrap tracking-wider">Projects Done</span>
    </p>
  </div>
  {/* <!-- Happy Clients --> */}
  <div className="flex items-center px-2 md:px-4">
    <p className="text-[#FD6F00] text-base md:text-lg ">
      80+ <br />
      <span className="text-[#959595] dark:text-white text-[12px] md:text-base font-normal md:font-bold text-nowrap tracking-wider">Happy Clients</span>
    </p>
  </div>
</div>

</div>
</Grid>   
<Grid 
  item 
  sm={12} 
  md={12} 
  lg={6} 
  className="mx-auto xl:mx-0"
  style={{ maxWidth: 400 }}
>
  <div className="relative w-full mx-auto lg:mx-0 flex justify-center items-center">
    <Image 
      src={pImage} 
      alt="Profile image"
      className="mx-auto w-64 sm:w-72 md:w-80 lg:w-[36rem] mix-blend-luminosity rounded-full static z-50"
    />
    <div 
      className="bg-[#1B1B1B] w-[18rem] md:w-[24rem] lg:w-[28rem] h-[18rem]  md:h-[24rem] lg:h-[28rem] rounded-full absolute -z-50 bottom-0 sm:bottom-0 md:bottom-0 "
      style={{ left: '50%', transform: 'translateX(-50%)' }}
    >
      {/* Background decoration */}
    </div>
  </div>
</Grid>


</Grid>

        </>
    );
}

export default Hero;