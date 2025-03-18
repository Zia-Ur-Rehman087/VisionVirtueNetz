'use client'
// import Link from "next/link";
import { K2D } from 'next/font/google'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../lib/features/themeslice/ThemeSlice.js";
import Container from '@mui/material/Container'
import {HireBtn} from '../../../reusable/social/index.js'
import sun from '../../../../public/sun.svg'
import moon from '../../../../public/moon.svg'
import { Link} from "react-scroll";
import Image from 'next/image.js';
const k2d = K2D({
    subsets: ['latin'],
    weight: ['400']
});
console.log(k2d.style.fontFamily);

function Header() {
    const theme = useSelector(state => state.theme.theme);
    const dispatch = useDispatch()
    // const [text,setText] = useState('dark')
    const handleTheme = () => {
        dispatch(toggleTheme())
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <>
            <div className=" py-5 sticky top-0 left-0 bg-opacity-15 bg-[#121212] z-[999] dark:bg-opacity-85 h-24">
            <Container maxWidth="lg" className='flex justify-between items-center'>

                    <div className="mobile-menu block md:hidden">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 12.5H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 6.5H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 18.5H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                    <div className={`logo uppercase text-lg md:text-2xl mx-auto md:m-0 custom font-bold font-[${k2d.style.fontFamily}]`}><Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    to="home"
                    offset={96}
                    duration={600}
                   className="cursor-pointer"
                    
                    >Logo</Link></div>
                    <div className="menu">
                        <ul className="hidden lg:flex gap-5 lg:gap-14 font-normal text-[]">
                            <li>
                                <Link
                                    activeClass="active"
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
                                    activeClass="active"
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
                                    activeClass="active"
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
                                    activeClass="active"
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
                                    activeClass="active"
                                    spy={true}
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

                    </div>
                    <div className="flex gap-5">
                        <HireBtn text='Hire me' classes={`btn text-sm md:text-lg capitalize py-2 px-5 md:px-8 rounded-lg bg-[#FD6F00]
                            border border-2 border-transparent hover:text-[#959595]
                            hover:bg-transparent hover:border hover:border-2 hover:border-[#959595] cursor-pointer transition-all duration-300`} />
                        <button onClick={handleTheme} className={`btn text-sm hover:bg-[#FD6F00] md:text-lg capitalize py-2 px-5 md:px-8 rounded-lg hidden md:block ${theme === 'light' ? 'bg-transparent border-2 border-[#FD6F00]' : 'bg-transparent border-2 border-[#959595]'} transition-all duration-500 cursor-pointer`}>
                            {theme === 'light' ? <Image src={sun.src} alt={sun.src} width={20} height={20}/> : <Image src={moon.src} className="-rotate-45" alt={moon.src} width={20} height={20}/>}
                        </button>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Header;