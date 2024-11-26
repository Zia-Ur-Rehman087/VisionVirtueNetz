'use client'
import Link from "next/link";
import { K2D } from 'next/font/google'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../lib/features/themeslice/ThemeSlice.js";
import HireBtn from '../../../../reusable/HireBtn.jsx'
import sun from '../../../../public/sun.svg'
import moon from '../../../../public/moon.svg'
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
            <div className="flex justify-between items-center py-5">
                <div className="mobile-menu block md:hidden">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 12.5H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 6.5H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 18.5H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
                <div className={`logo uppercase text-lg md:text-2xl mx-auto md:m-0 custom font-bold font-[${k2d.style.fontFamily}]`}><Link href='/'>Logo</Link></div>
                <div className="menu">
                    <ul className="hidden md:flex gap-5 lg:gap-14 text-[#959595] font-normal">
                        <li><Link href='/' className="text-[#FD6F00]">Home</Link></li>
                        <li><Link href='/services'>Services</Link></li>
                        <li><Link href='/about'>About me</Link></li>
                        <li><Link href='/portfolio'>Portfolio</Link></li>
                        <li><Link href='/contact'>Contact me</Link></li>
                    </ul>
                </div>
                <div className="flex gap-5">
                    <HireBtn text='Hire me' classes={`btn text-sm md:text-lg capitalize py-2 px-5 md:px-8 rounded-lg bg-[#FD6F00]
                            border border-2 border-transparent
                            hover:bg-transparent hover:border hover:border-2 hover:border-[#959595]`} />
                    <button onClick={handleTheme} className={`btn text-sm md:text-lg capitalize py-2 px-5 md:px-8 rounded-lg bg-gray-600 hidden md:block ${theme === 'light' ? 'bg-gray-500' : 'bg-gray-900'}`}>
                        {theme === 'light' ? <img src={sun.src} /> :<img src={moon.src} className="-rotate-45"/>}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Header;