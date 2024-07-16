import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

const Modal: React.FC<ModalProps> = ({ products, productThumbnails, currentIndex, handlePrevious, handleNext, handleClose, setCurrentIndex }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                        <div className="relative p-4 rounded-lg"> 
                            <div className="relative">
                            <div onClick={handleClose} className="absolute -top-5 -right-5 cursor-pointer">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12l-4.95-4.95 1.414-1.414z" fill="#ff922b" />
                                </svg>
                            </div>
                                <Image src={products[currentIndex]} alt="" className="w-full lg:w-[400px] rounded-none lg:rounded-md mb-6" />
                                <div onClick={handlePrevious} className="flex items-center justify-center absolute w-10 h-10 bg-white rounded-full -left-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1 3 9l8 8" stroke="#ff922b" strokeWidth="3" fill="none" fillRule="evenodd" />
                                    </svg>
                                </div>
                                <div onClick={handleNext} className="flex items-center justify-center absolute w-10 h-10 bg-white rounded-full -right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m2 1 8 8-8 8" stroke="#ff922b" strokeWidth="3" fill="none" fillRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <ul className="hidden md:flex gap-6">
                                {productThumbnails.map((thumbnail, index) => (
                                    <li key={index} className={`relative w-20 h-20 ${currentIndex === index ? "border-[#ff922b] border-2" : ""} rounded-md`}>
                                        <Image src={thumbnail} alt={`Sneaker ${index + 1}`} className="cursor-pointer w-full h-full object-cover rounded-md" onClick={() => setCurrentIndex(index)} />
                                        {currentIndex === index && <div className="absolute inset-0 bg-Grayish-blue bg-opacity-50 rounded-md"></div>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
    )
}
    export default Modal;

    interface ModalProps {
        products: StaticImageData[];
        productThumbnails: StaticImageData[];
        currentIndex: number;
        handlePrevious: () => void;
        handleNext: () => void;
        handleClose: () => void;
        setCurrentIndex: (index: number) => void;
    }