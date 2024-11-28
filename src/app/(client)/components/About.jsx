'use client'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import HireBtn from '../../../../reusable/HireBtn';
import emage from '../../../../public/portfolioImage.png'
import Image from 'next/image';
import Grid from '@mui/material/Grid'
export default function About() {
return (
<>
<div className="text-center">
<div className="text-center flex flex-col gap-4 md:gap-8 pb-24px md:pb-[40px] lg:[60px]">
        <h1 className="font-bold text-2xl text-[#959595] dark:text-white text-[24px] md:text-[40px] capitalize">About me</h1>
        <p className="text-[#707070]">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
        </div>
</div>



{/* coach */}

<Grid container spacing={2}  className='gap-5 md:gap-5 lg:gap-20 w-full'   sx={{ width: '100%' }}>
<Grid 
  item 
  sm={12} 
  md={12} 
  lg={6} 
  className="mx-auto xl:mx-0"
  style={{ maxWidth: 400 }}
>
  <div className="relative w-full mx-auto lg:mx-0 flex justify-center items-center"   sx={{ width: '100%' }}>
    <Image 
      src={emage} 
      alt="Profile image"
      className="mx-auto w-64 sm:w-72 md:w-80 lg:w-[36rem] mix-blend-luminosity static z-50"
    />
    <div 
      className="bg-[#1B1B1B] w-[18rem] md:w-[24rem] lg:w-[26rem] h-[18rem]  md:h-[24rem] lg:h-[28rem] rounded-t-full absolute -z-50 bottom-0 sm:bottom-0 md:bottom-0 "
      style={{ left: '50%', transform: 'translateX(-50%)' }}
    >
      {/* Background decoration */}
    </div>
  </div>
</Grid>

<Grid item sm={12} md={12} lg={6} className='flex items-center justify-center xl:items-start'
  style={{ maxWidth: '120%' }}  sx={{ width: '100%' }}
>
<div className="leftContent flex flex-col gap-8 md:gap-12 xl:items-start !w-full items-center h-full justify-center "
>
<p
      className="text-justify leading-loose  text-[#959595] dark:text-white"
      // style={{
      //   maxWidth: "800px", 
      // }}
    >
      A software engineer, the modern-day architect of digital realms, navigates
      the ethereal landscapes of code, sculpting intangible structures that
      shape our technological world. With fingers poised over keyboards like
      virtuoso pianists, they compose symphonies of logic, their minds a
      labyrinth of algorithms and solutions. Their canvas is a screen, a vast
      expanse where lines of code dance in intricate patterns, weaving the
      fabric of programs and applications. Each keystroke is a brushstroke,
      crafting intricate architectures and breathing life into innovative
      designs. In this digital atelier, they don the mantle of problem solvers,
      confronting bugs and glitches like valiant knights in an ever-evolving
      quest for perfection.
    </p>
    <div
      className="flex gap-2  items-center text-sm capitalize rounded-lg px-5 md:px-10 py-2 bg-[#FD6F00] hover:bg-transparent hover:border hover:border-[#959595] border-2 border-transparent hover:dark:border-2 hover:dark:border-white hover:text-[#707070] hover:font-medium hover:dark:text-white  cursor-pointer"
      style={{
        transition: "all 0.3s ease-in-out",
      }}

    >
      <SaveAltIcon />
      <HireBtn text="Download CV" />
    </div>  
    </div>
</Grid>  
</Grid>
</>
)
}
