import { K2D } from 'next/font/google'
import Link from 'next/link'
import instagram from '../../../../public/Frame 52.svg'
import linkDin from '../../../../public/Frame 53.svg'
import Dribble from '../../../../public/Frame 54.svg'
import Be from '../../../../public/Frame 55.svg'
import Image from 'next/image';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

const k2d = K2D({
    subsets: ['latin'],
    weight: ['400']
});
function Footer() {
    return (
        <>


            <footer className="bg-white shadow dark:bg-[#1b1b1b] mt-4 md:mt-10 md:pt-5">
                <div className="w-full max-w-screen-xl mx-auto pt-4 px-4 md:pt-8 md:px-8">
                    <div className="
        flex flex-col gap-5 sm:items-center sm:justify-between">
                        <div className={`logo uppercase text-lg md:text-2xl mx-auto md:m-0 custom font-bold font-[${k2d.style.fontFamily}]`}><Link href='/'>Logo</Link></div>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Services</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About me</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Potfolio</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact me</a>
                            </li>
                        </ul>

                        {/* social links */}
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
{/* contact info */}
<div className="contact-info flex gap-10 flex-wrap md:flex-nowrap text-[#B1B1B1]">
    <div className="mail flex gap-2 items-center justify-center">
    <MailOutlineIcon/>
        <Link href='mailto:Mahmood.fazile7005@gmail.com'>
        Mahmood.fazile7005@gmail.com</Link>
    </div>
    <div className="phone flex gap-2 items-center justify-center">
    <PhoneOutlinedIcon/>
    <Link href='tel:+93 729 107 005'>
    +93 729 107 005</Link>
        </div>
</div>
                    </div>
                </div>
            </footer>


        </>
    );
}

export default Footer;