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

<div className="parent grid grid-cols-1 md:grid-cols-2 gap-8 w-full justify-between h-full max-w-[100vw] mx-auto px-4]">
  {/* Image Section */}
 <div className="relative md:m-0 flex items-center md:items-start justify-center md:justify-start" >
<div className="relative">
<Image
    src={emage}
    alt="Profile image"
    className="object-cover mix-blend-luminosity w-[25vw]"
  />
  <div
    className="absolute -z-10 bg-[#1B1B1B] rounded-t-full w-[25vw] h-[30vw] bottom-0" 
  ></div>
</div>

</div>


  <div className="second flex flex-col gap-6 items-start justify-center">
    <p
      className="text-justify"
      style={{
        maxWidth: "600px", 
      }}
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
      className="flex gap-2  items-center text-sm capitalize rounded-lg"
      style={{
        backgroundColor: "#FD6F00",
        border: "2px solid transparent",
        transition: "all 0.3s ease-in-out",
        padding:'10px',
      }}

    >
      <SaveAltIcon />
      <HireBtn text="Download CV" />
    </div>
  </div>
</div>



</div>
  

</div>
                  </>
            )
      );
}
