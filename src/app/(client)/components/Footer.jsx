
import { K2D } from 'next/font/google'
import { Link} from "react-scroll";
import {Instagram, Linkdin,Pinterest,Be} from '../../../reusable/social'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { useSelector } from 'react-redux';
const k2d = K2D({
    subsets: ['latin'],
    weight: ['400']
});
function Footer() {
const theme = useSelector(state => state.theme.theme)
    return (
        <>


            <footer className="bg-[#FD6F00] text-white dark:text-[#959595]  shadow dark:bg-[#1b1b1b] mt-4 md:mt-10 md:py-5">
                <div className="w-full max-w-screen-xl mx-auto pt-4 px-4 md:pt-8 md:px-8">
                    <div className="
        flex flex-col gap-5 items-center justify-between md:gap-8">
                        <div className={`logo uppercase text-lg md:text-2xl mx-auto md:m-0 custom font-bold font-[${k2d.style.fontFamily}]`}>
                            
                            <Link href='/'>Logo</Link></div>
                            <ul className="flex flex-wrap gap-5 lg:gap-14 font-normal text-[#FD6F00]  dark:text-[#959595]">
                            <li>
                                <Link
                                    // activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    to="home"
                                    offset={96}
                                    duration={600}
                                    className="cursor-pointer hover:text-[#FD6F00]"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    // activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    to="services"
                                    offset={96}
                                    duration={600}
                                   className="cursor-pointer hover:text-[#FD6F00]"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    // activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    to="about"
                                    offset={96}
                                    duration={600}
                                    className="cursor-pointer hover:text-[#FD6F00]"
                                >
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    // activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    to="portfolio"
                                    offset={96}
                                    duration={600}
                                   className="cursor-pointer hover:text-[#FD6F00]"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    // activeClass="active"
                                    // spy={true}
                                    smooth={true}
                                    to="contact"
                                    offset={96}
                                    duration={600}
                                 className="cursor-pointer hover:text-[#FD6F00]"
                                >
                                    Contact Me
                                </Link>
                            </li>
                        </ul>

                        {/* social links */}
                        <div className="icons flex gap-5">
<div className={`hover:bg-[#959595] dark:hover:bg-[#FD6F00] border-[1px]  hover:border-transparent hover:cursor-pointer rounded-full p-2 transition-all duration-1000 ease-in-out ${theme==='dark'? 'border-[#fd6f00]' : 'border-[#ffffff]' }`}>
<Instagram fillColor={theme === "light" ? "#ffffff":"#fd6f00" }

/>
</div>
<div className={`hover:bg-[#959595] dark:hover:bg-[#FD6F00] border-[1px] hover:border-transparent hover:cursor-pointer rounded-full p-2 ${theme==='dark'? 'border-[#fd6f00]' : 'border-[#ffffff]' }
transition-all duration-1000 ease-in-out`}>
<Linkdin
fillColor={theme === "light" ? "#ffffff":"#fd6f00" }
/>
</div>
<div className={`hover:bg-[#959595] dark:hover:bg-[#FD6F00] border-[1px] ${theme==='dark'? 'border-[#fd6f00]' : 'border-[#ffffff]' } hover:border-transparent hover:cursor-pointer rounded-full p-2
transition-all duration-1000 ease-in-out`}>
<Pinterest 
fillColor={theme === "light" ? "#ffffff":"#fd6f00" }
/>
</div>
<div className={`hover:bg-[#959595] dark:hover:bg-[#FD6F00] border-[1px] ${theme==='dark'? 'border-[#fd6f00]' : 'border-[#ffffff]' } hover:border-transparent hover:cursor-pointer rounded-full p-2 transition-all duration-1000 ease-in-out`}>
<Be 
fillColor={theme === "light" ? "#ffffff":"#fd6f00" }
/>
</div>

</div>
{/* contact info */}
<div className="contact-info flex gap-5 md:gap-10 items-center justify-center flex-wrap md:flex-nowrap text-white dark:text-[#959595] pb-6 border-b-[1px]  border-b-white dark:border-b-[#959595]">
    <div className="mail flex gap-2 items-center justify-center">
    <MailOutlineIcon/>
        <Link href='mailto:Mahmood.fazile7005@gmail.com'>
        Mahmood.fazile7005@gmail.com</Link>
    </div> 
    <div className="phone flex gap-2 items-center justify-center text-white dark:text-[#959595] ">
    <PhoneOutlinedIcon/>
    <Link href='tel:+93 729 107 005'>
    +93 729 107 005</Link>
        </div>
</div>
 </div>
 <div  className='py-4 md:pt-4 '>
    <p className='text-center text-white dark:text-[#959595]'>Designed & Developed By VirtueNetz.pk</p>
</div>
                </div>
            </footer>


        </>
    );
}

export default Footer;