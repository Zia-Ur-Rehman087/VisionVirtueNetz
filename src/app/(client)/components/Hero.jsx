import pImage from '../../../../public/portfolioImage.png'
import Image from 'next/image';
import instagram from '../../../../public/Frame 52.svg'
import linkDin from '../../../../public/Frame 53.svg'
import Dribble from '../../../../public/Frame 54.svg'
import Be from '../../../../public/Frame 55.svg'
import HireBtn from '../../../../reusable/HireBtn'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
function Hero() {
return (
<>
<Grid container spacing={2} sx={{paddingTop:10}} className='gap-2 md:gap-5'>
<Grid item sm={12} md={6}>
<div className="leftContent flex flex-col gap-4 md:gap-10 items-center md:items-start h-full justify-center">

<h4 className='text-[#959595] text-xl text-center md:text-start '>
<span className="text-[#707070]">Hi I am</span><br/>
Mahmood Fazile</h4>
<h1 className="text-[#984300] xs:text-lg sm:text-2xl md:text-5xl font-bold">UI/UX designer</h1>
{/* ICONS */}
<div className="icons flex gap-5 ">
    <Image
        src={instagram}
        alt='instagram'
    />
    <Image
        src={linkDin}
        alt='linkDin'
    />
    <Image
        src={Dribble}
        alt='Dribble'
    />
    <Image
        src={Be}
        alt='Be'
    />
</div>
{/* buttons */}
<div className="buttons flex gap-5">
    <div>
        {/* <button className="">
            Hire me
        </button> */}
        <HireBtn text='Hire me' classes={`btn text-sm md:text-lg capitalize py-2 px-5 md:px-8 rounded-lg bg-[#FD6F00]
        border border-2 border-transparent
        hover:bg-transparent hover:border hover:border-2 hover:border-[#959595]`}/>
    </div>
    <div>
        <button className="btn text-sm md:text-lg capitalize py-2 px-5 md:px-8 rounded-lg border border-2 border-[#959595] text-[#959595] bg-transparent hover:bg-[#FD6F00] hover:border-transparent">
            Download CV
        </button>
    </div>
</div>
{/* experiemnce showcase desing */}
{/* <div className="parent bg-[#FFFFFF0A] p-2 md:p-5 flex rounded font-bold text-lg w-fit flex-nowrap text-nowrap">
    <div className=' border-r-2 border-[#959595]'>
        <p className="text-[#FD6F00] xs:text-sm px-4">
            5+ <br />
            <span className='text-[#959595] dark:text-white xs:text-sm sm:text-lg'>Experience</span>
        </p>
    </div>
    <div className=' border-r-2 border-[#959595]'>
        <p className="text-[#FD6F00] px-4 xs:text-sm">
            20+ <br />
            <span className='text-[#959595] dark:text-white xs:text-sm sm:text-lg'>Project done</span>
        </p>
    </div>
    <div>
        <p className="text-[#FD6F00] px-4 xs:text-sm">
            80+ <br />
            <span className='text-[#959595] dark:text-white xs:text-sm'>Happy Clients</span>
        </p>
    </div>
    <div></div>
</div> */}

<div className="parent bg-[#FFFFFF0A] p-2 md:p-5 flex rounded font-bold text-base md:text-lg w-full sm:w-auto flex-nowrap md:flex-nowrap">
  {/* <!-- Experience --> */}
  <div className="flex items-center border-r-2 border-[#959595] px-2 md:px-4">
    <p className="text-[#FD6F00] text-sm sm:text-base md:text-lg">
      5+ <br />
      <span className="text-[#959595] dark:text-white text-xs sm:text-sm md:text-base">Experience</span>
    </p>
  </div>
  {/* <!-- Projects Done --> */}
  <div className="flex items-center border-r-2 border-[#959595] px-2 md:px-4 mx-auto md:m-0">
    <p className="text-[#FD6F00] text-sm sm:text-base md:text-lg">
      20+ <br />
      <span className="text-[#959595] dark:text-white text-xs sm:text-sm md:text-base">Projects Done</span>
    </p>
  </div>
  {/* <!-- Happy Clients --> */}
  <div className="flex items-center px-2 md:px-4">
    <p className="text-[#FD6F00] text-sm sm:text-base md:text-lg">
      80+ <br />
      <span className="text-[#959595] dark:text-white text-xs sm:text-sm md:text-base">Happy Clients</span>
    </p>
  </div>
</div>

</div>
{/* leftSide */}   
</Grid>   
<Grid 
  item 
  xs={12} 
  sm={12} 
  md={6} 
  lg={4} 
  className="mx-auto lg:mx-0"
  style={{ maxWidth: 400 }}
>
  <div className="relative w-full mx-auto lg:mx-0 flex justify-center items-center">
    <Image 
      src={pImage} 
      alt="Profile image"
      className="mx-auto w-64 sm:w-72 md:w-80 lg:w-96 mix-blend-luminosity rounded-full static z-50"
    />
    <div 
      className="bg-[#1B1B1B] w-[20rem] sm:w-96 md:w-[24rem] lg:w-[28rem] h-[20rem] sm:h-72 md:h-[24rem] lg:h-[28rem] rounded-full absolute -z-50 bottom-0 sm:bottom-0 md:bottom-0 "
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