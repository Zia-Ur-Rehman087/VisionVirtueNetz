import pImage from '../../../../public/portfolioImage.png'
import Image from 'next/image';
import instagram from '../../../../public/Frame 52.svg'
import linkDin from '../../../../public/Frame 53.svg'
import Dribble from '../../../../public/Frame 54.svg'
import Be from '../../../../public/Frame 55.svg'
import K2D from 'next/font/google'

function Hero() {
    return (
        <>
            <div className="parent py-2 md:py-5 grid grid-cols-1 md:grid-cols-2 w-fit h-fit mx-auto md:m-0 md:h-full md:w-full">
                <div className="leftContent flex flex-col gap-10 items-center md:items-start h-full justify-center">

                    <h4 className='text-[#959595] text-xl text-center md:text-start '>
                        <span className="text-[#707070]">Hi I am</span> <br />
                        Mahmood Fazile</h4>
                    <h1 className="text-[#984300] text-5xl font-bold">UI/UX designer</h1>
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
                            <button className="btn text-sm md:text-lg capitalize py-2 px-5 md:px-8 rounded-lg bg-[#FD6F00]">
                                Hire me
                            </button>
                        </div>
                        <div>
                            <button className="btn text-sm md:text-lg capitalize py-2 px-5 md:px-8 rounded-lg border border-2 border-[#959595] text-[#959595]">
                                Download CV
                            </button>
                        </div>
                    </div>
                    {/* experiemnce showcase desing */}
                    <div className="parent bg-[#FFFFFF0A] p-5 flex rounded font-bold text-lg w-fit flex-nowrap text-nowrap">
                        <div className=' border-r-2 border-[#959595]'>
                            <p className="text-[#FD6F00]  px-4">
                                5+ <br />
                                <span className='text-white'>Experiences</span>
                            </p>
                        </div>
                        <div className=' border-r-2 border-[#959595]'>
                            <p className="text-[#FD6F00] px-4">
                                20+ <br />
                                <span className='text-white'>Project done</span>
                            </p>
                        </div>
                        <div>
                            <p className="text-[#FD6F00] px-4">
                                80+ <br />
                                <span className='text-white'>Happy Clients</span>
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
                {/* leftSide */}

                <div className="rightImage p-5 relative *:
     after:content-[''] after:bg-[#1B1B1B] after:w-[275px] after:h-[275px] md:after:w-[75%] md:after:h-[75%] after:rounded-full after:absolute after:top-[8rem] after:sm:left-[0.5rem] after:left-[5.5rem] after:md:left-[4.5rem] after:-z-10 
     ">
                    <div className="image overflow-hidden w-64 md:w-96 mx-auto">
                        <img src={pImage.src} alt='myImage' className='mix-blend-luminosity object-cover rounded-full' />
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Hero;