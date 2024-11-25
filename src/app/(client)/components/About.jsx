'use client'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import HireBtn from '../../../../reusable/HireBtn';
import emage from '../../../../public/portfolioImage.png'
import Image from 'next/image';

export default function About() {
      return (
            (
<>
<div className='py-5 md:py-16'>
<div className="text-center">
<h1 className="font-bold text-2xl text-[#959595]">About me</h1>
<p className="text-[#707070]">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
<div className="parent grid grid-cols-1  md:grid-cols-2">
<div className="relative w-full lg:mx-0">
    <Image 
      src={emage} 
      alt="Profile image"
      className=" w-64 sm:w-72 md:w-80 lg:w-96 mix-blend-luminosity rounded-t-full"
    />
    <div 
      className="bg-[#1B1B1B] w-[18rem] sm:w-48 md:w-[24rem] lg:w-[24rem] h-[24rem] sm:h-72 md:h-[24rem] lg:h-[28rem] rounded-t-full absolute -z-50 bottom-0 left-0 sm:bottom-0 sm:left-0 md:bottom-0 md:left-0 lg:bottom-0 lg:left-0"
    >
      {/* Background decoration */}
    </div>
  </div>  
  

  {/* second section  */}
<div className="second flex flex-col gap-5 items-start justify-center">
<p className='text-justify'>A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs.In this digital atelier.</p>
<div  className={`flex gap-2 btn text-sm md:text-lg capitalize py-2 px-5 md:px-8 rounded-lg bg-[#FD6F00] border border-2 border-transparent hover:bg-transparent hover:border hover:border-2 hover:border-[#959595]`}>
<SaveAltIcon /> 
< HireBtn text='Download CV'> </HireBtn>
</div>
 </div>
      
</div>
</div>
  

</div>
                  </>
            )
      );
}
