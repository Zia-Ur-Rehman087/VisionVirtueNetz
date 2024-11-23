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
<Grid container spacing={4}>
<Grid item sm={12} md={6}>
<div className="leftContent flex flex-col gap-4 md:gap-10 items-center md:items-start h-full justify-center">

<h4 className='text-[#959595] text-xl text-center md:text-start '>
    <span className="text-[#707070]">Hi I am</span> <br />
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
<div className="parent bg-[#FFFFFF0A] p-2 md:p-5 flex rounded font-bold text-lg w-fit flex-nowrap text-nowrap">
    <div className=' border-r-2 border-[#959595]'>
        <p className="text-[#FD6F00]  px-4">
            5+ <br />
            <span className='text-[#959595] dark:text-white'>Experience</span>
        </p>
    </div>
    <div className=' border-r-2 border-[#959595]'>
        <p className="text-[#FD6F00] px-4">
            20+ <br />
            <span className='text-[#959595] dark:text-white'>Project done</span>
        </p>
    </div>
    <div>
        <p className="text-[#FD6F00] px-4">
            80+ <br />
            <span className='text-[#959595] dark:text-white'>Happy Clients</span>
        </p>
    </div>
    <div></div>
</div>
</div>
{/* leftSide */}   
</Grid>    
<Grid item sm={12} md={6}>
<Image
src={pImage}
alt='portfolio image'
 className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
/>
</Grid>
</Grid>

        </>
    );
}

export default Hero;