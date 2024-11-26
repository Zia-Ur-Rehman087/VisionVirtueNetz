import { K2D } from 'next/font/google'
import Link from 'next/link'
const k2d = K2D({
    subsets: ['latin'],
    weight: ['400']
});
function Footer() {
    return (
        <>


<footer className="bg-white rounded-lg shadow dark:bg-[#1b1b1b] m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
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
                    <a href="#" className="hover:underline">Potfolio</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact me</a>
                </li>
            </ul>

        </div>

    </div>
</footer>


        </>
    );
}

export default Footer;