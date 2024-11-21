'use client'
import Link from "next/link";
import K2D from 'next/font/google'
import {useEffect }from 'react'
import { useDispatch, useSelector } from "react-redux";
import {toggleTheme}  from "../../../lib/features/themeslice/ThemeSlice.js";
function Header() {
const theme = useSelector(state => state.theme.theme);
const dispatch = useDispatch()
// const [text,setText] = useState('dark')
const handleTheme = ()=>{
    dispatch(toggleTheme()) 
}

useEffect(() => {
    document.body.className = theme;
  }, [theme]);
    return ( 
        <>
   <div className="flex justify-between items-center">
    <div className="mobile-menu block md:hidden">
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 12.5H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 6.5H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 18.5H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    </div>
    <div className={`logo uppercase text-xl md:text-2xl mx-auto md:m-0 custom font-bold font-[${K2D}]`}><Link href='/'>Logo</Link></div>
    <div className="menu">
        <ul className="hidden md:flex gap-14 text-[#959595] font-normal">
            <li><Link href='/' className="text-[#FD6F00]">Home</Link></li>
            <li><Link href='/services'>Services</Link></li>
            <li><Link href='/about'>About me</Link></li>
            <li><Link href='/portfolio'>Portfolio</Link></li>
            <li><Link href='/contact'>Contact me</Link></li>
        </ul>
    </div>
    <div className="flex gap-5">
        <button className="btn text-sm md:text-lg capitalize py-2 px-5 md:px-8 rounded-lg bg-[#FD6F00]">
            Hire me
        </button>
        <button onClick={handleTheme} className="btn text-sm md:text-lg capitalize py-2 px-5 md:px-8 rounded-lg bg-gray-600 hidden md:block">
           {theme}
        </button>
    </div>
   </div>
        </>
     );
}

export default Header;