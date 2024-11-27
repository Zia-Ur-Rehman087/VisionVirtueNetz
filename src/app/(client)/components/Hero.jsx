import pImage from '../../../../public/portfolioImage.png'
import Image from 'next/image';
import instagram from '../../../../public/Frame 52.svg'
import linkDin from '../../../../public/Frame 53.svg'
import Dribble from '../../../../public/Frame 54.svg'
import Be from '../../../../public/Frame 55.svg'
import HireBtn from '../../../../reusable/HireBtn'
import Grid from '@mui/material/Grid'
function Hero() {
return (
<>
<Grid container spacing={2} className='gap-5 md:gap-5 pt-5 md:pt-10 lg:gap-10'>
<Grid item sm={12} md={12} lg={6} className='flex xs:items-center xs:justify-center gap-5  w-full xl:items-start'>
<div className="leftContent flex flex-col gap-8 md:gap-12 xl:items-start w-full items-center h-full justify-center ">

<h4 className='text-[#959595] text-lg md:text-xl text-center xl:text-start'>
<span className="text-[#707070]">Hi I am</span><br/>
Mahmood Fazile</h4>
<h1 className="text-[#984300] xs:text-lg text-2xl md:text-5xl font-bold">UI/UX designer</h1>
{/* ICONS */}
<div className="icons flex gap-5">
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

<div className="parent bg-[#FFFFFF0A] p-2 md:p-5 flex rounded font-bold text-base md:text-lg !w-fit sm:w-auto flex-nowrap md:flex-nowrap my-3 md:my-5">
  {/* <!-- Experience --> */}
  <div className="flex items-center border-r-2 border-[#959595] px-2 md:px-4 text-nowrap">
    <p className="text-[#FD6F00]  text-base md:text-lg">
      5+ <br />
      <span className="text-[#959595] dark:text-white text-[12px] md:text-base font-normal md:font-bold text-nowrap">Experience</span>
    </p>
  </div>
  {/* <!-- Projects Done --> */}
  <div className="flex items-center border-r-2 border-[#959595] px-2 md:px-4 justify-between items-center md:mx-auto lg:m-0">
    <p className="text-[#FD6F00]  text-base md:text-lg">
      20+ <br />
      <span className="text-[#959595] dark:text-white text-[12px] md:text-base font-normal md:font-bold text-nowrap">Projects Done</span>
    </p>
  </div>
  {/* <!-- Happy Clients --> */}
  <div className="flex items-center px-2 md:px-4">
    <p className="text-[#FD6F00] text-base md:text-lg">
      80+ <br />
      <span className="text-[#959595] dark:text-white text-[12px] md:text-base font-normal md:font-bold text-nowrap">Happy Clients</span>
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