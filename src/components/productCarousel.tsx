// import { useState } from "react";
// import Image from "next/image";

// import Logo from '../../public/images/logo.svg';
// import Cart from '../../public/images/icon-cart.svg';
// import Avatar from '../../public/images/image-avatar.png';

// export function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const handleMenuToggle = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <>
//             <header className="relative flex items-center justify-between p-4 border-b border-slate-400 max-w-7xl mx-auto">
//                 <div className="flex items-center justify-start gap-4">
//                     <ul className="flex items-center justify-start gap-4">
//                         <li className="lg:hidden">
//                             <button onClick={handleMenuToggle}>
//                                 <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd"></path>
//                                 </svg>
//                             </button>
//                         </li>
//                         <li>
//                             <Image src={Logo} alt="logo" />
//                         </li>
//                     </ul>
//                     <nav className={`fixed inset-0 bg-white lg:relative lg:bg-transparent lg:block ${menuOpen ? "block" : "hidden"}`}>
//                         <ul className="flex flex-col lg:flex-row lg:items-center">
//                             <li className="lg:hidden">
//                                 <button onClick={handleMenuToggle} className="absolute top-4 left-4">
//                                 <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" fill="#adb5bd" className="lg:hidden close"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="current" stroke="current" fill-rule="evenodd"></path></svg>
//                                 </button>
//                             </li>
//                             <li className="p-2 m-2 cursor-pointer duration-300 lg:p-4">
//                                 <a href="#Collections" className="text-black text-sm font-kumbh font-bold hover:text-Very-dark-blue lg:text-[#adb5bd] relative pb-[45px] hover:text-Very-dark-blue lg:hover:text-[#868e96]">Collections</a>
//                             </li>
//                             <li className="p-2 m-2 cursor-pointer duration-300 lg:p-4">
//                                 <a href="#Men" className="text-black text-sm font-kumbh font-bold hover:text-Very-dark-blue lg:text-[#adb5bd] relative pb-[45px] hover:text-Very-dark-blue lg:hover:text-[#868e96]">Men</a>
//                             </li>
//                             <li className="p-2 m-2 cursor-pointer duration-300 lg:p-4">
//                                 <a href="#Women" className="text-black text-sm font-kumbh font-bold hover:text-Very-dark-blue lg:text-[#adb5bd] relative pb-[45px] hover:text-Very-dark-blue lg:hover:text-[#868e96]">Women</a>
//                             </li>
//                             <li className="p-2 m-2 cursor-pointer duration-300 lg:p-4">
//                                 <a href="#About" className="text-black text-sm font-kumbh font-bold hover:text-Very-dark-blue lg:text-[#adb5bd] relative pb-[45px] hover:text-Very-dark-blue lg:hover:text-[#868e96]">About</a>
//                             </li>
//                             <li className="p-2 m-2 cursor-pointer duration-300 lg:p-4">
//                                 <a href="#Contact" className="text-black text-sm font-kumbh font-bold hover:text-Very-dark-blue lg:text-[#adb5bd] relative pb-[45px] hover:text-Very-dark-blue lg:hover:text-[#868e96]">Contact</a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//                 <div>
//                     <ul className="flex items-center justify-start gap-4">
//                         <li className="relative">
//                             <Image src={Cart} alt="cart" />
//                         </li>
//                         <li>
//                             <Image src={Avatar} alt="avatar" className="w-10 h-10 border-2 rounded-full border-primary-orange relative" />
//                         </li>
//                     </ul>
//                 </div>
//             </header>
//         </>
//     );
// }
