'use client'
import { SetStateAction, useState } from "react";
import Image from "next/image";
import '@/styles/components/_navbar.scss';

import Logo from '../../public/images/logo.svg';
import Cart from '../../public/images/icon-cart.svg';
import Avatar from '../../public/images/image-avatar.png';

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("Collections");

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSetActive = (menu: SetStateAction<string>) => {
        setActive(menu);
        setMenuOpen(false);
    };

    return (
        <>
            <header className="relative flex items-center justify-between p-4 border-b border-slate-400 max-w-7xl mx-auto">
                <div className="flex items-center justify-start gap-4">
                    <ul className="flex items-center justify-start gap-4">
                        <li className="lg:hidden">
                            <button onClick={handleMenuToggle}>
                                <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd"></path>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <Image src={Logo} alt="logo" />
                        </li>
                    </ul>
                    <nav className={`nav ${menuOpen ? "open" : ""} lg:flex`}>
                        <ul className="flex flex-col lg:flex-row lg:items-center">
                            <li className="lg:hidden">
                                <button onClick={handleMenuToggle} className="absolute top-4 left-4">
                                    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.95 1.95l-4.244 4.244L14.95 10.44 13.535 11.856l-4.243-4.243-4.243 4.243L3.636 10.44l4.243-4.243L3.636 1.95 5.05.535l4.243 4.243L13.535.535 14.95 1.95z" fill="#69707D"></path>
                                    </svg>
                                </button>
                            </li>
                            {["Collections", "Men", "Women", "About", "Contact"].map(menu => (
                                <li 
                                    key={menu}
                                    className={`p-2 m-2 cursor-pointer duration-300 lg:p-4 ${active === menu ? "active" : ""}`}
                                    onClick={() => handleSetActive(menu)}
                                >
                                    <a 
                                        href={`#${menu}`} 
                                        className={`text-black text-sm font-kumbh font-bold lg:text-[#adb5bd] relative pb-[40px] ${active === menu ? "active-link" : "hover:text-Very-dark-blue lg:hover:text-[#868e96]"}`}
                                    >
                                        {menu}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div>
                    <ul className="flex items-center justify-start gap-4">
                        <li className="relative">
                            <Image src={Cart} alt="cart" />
                        </li>
                        <li className="relative">
                            <Image src={Avatar} alt="avatar" className="w-10 h-10 border-2 rounded-full border-primary-orange" />
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
