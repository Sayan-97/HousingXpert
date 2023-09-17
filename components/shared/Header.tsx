import Image from "next/image";
import Link from "next/link";
import JoinWaitlist from "./JoinWaitlist";
import { FiMenu } from 'react-icons/fi'

export default function Header() {

    const links = [
        { title: 'Home', link: '' },
        { title: 'Projects', link: '' },
        { title: 'Properties', link: '' },
        { title: 'Contact Us', link: '' },
    ]

    return (
        <header className="fixed top-0 inset-x-0 bg-white py-3 z-40 shadow">
            <nav className="container-md flex items-center justify-between">
                {/* Navbar Logo */}
                <Link href='/'>
                    <Image
                        src='/img/appLogo.png'
                        alt="img"
                        width={122.414}
                        height={59}
                    />
                </Link>
                <div className="max-lg:hidden flex items-center gap-16">
                    {/* Navbar Links */}
                    <ul className="flex items-center gap-8">
                        {links.map((item, index) => (
                            <li
                                key={index}
                                className={`text-base font-medium text-black`}
                            >
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <JoinWaitlist />
                </div>
                <FiMenu className='lg:hidden text-3xl' />
            </nav>
        </header>
    )
}