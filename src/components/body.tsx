'use client'
import React, { useState } from "react";
import Image from "next/image";

import Product_one from '../../public/images/image-product-1.jpg';
import Product_one_one from '../../public/images/image-product-1-thumbnail.jpg';
import Product_two from '../../public/images/image-product-2.jpg';
import Product_two_two from '../../public/images/image-product-2-thumbnail.jpg';
import Product_three from '../../public/images/image-product-3.jpg';
import Product_three_three from '../../public/images/image-product-3-thumbnail.jpg';
import Product_four from '../../public/images/image-product-4.jpg';
import Product_four_four from '../../public/images/image-product-4-thumbnail.jpg';
import Modal from "./modal";

const products = [Product_one, Product_two, Product_three, Product_four];
const productThumbnails = [Product_one_one, Product_two_two, Product_three_three, Product_four_four];

export function Body() {
    const [quantity, setQuantity] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false)

    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

    const handleNext = () => setCurrentIndex((currentIndex + 1) % products.length);
    const handlePrevious = () => setCurrentIndex((currentIndex - 1 + products.length) % products.length);

    const handleModal = () => setShowModal(true)
    const handleClose = () => setShowModal(false)

    return (
        <section className="mb-16 z-0">
            <div className="lg:grid lg:mx-auto lg:p-16 lg:grid-cols-2 lg:gap-y-0 lg:container lg:items-center lg:gap-x-0" >
                <div className="lg:mx-auto flex gap-6 flex-col">
                    <div className="relative">
                        <Image src={products[currentIndex]} alt="" className="w-full lg:w-[400px] rounded-none lg:rounded-md" onClick={handleModal}/>
                        <div onClick={handlePrevious} className="flex items-center justify-center absolute w-10 h-10 bg-white rounded-full left-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1 3 9l8 8" stroke="#ff922b" strokeWidth="3" fill="none" fillRule="evenodd" />
                            </svg>
                        </div>
                        <div onClick={handleNext} className="flex items-center justify-center absolute w-10 h-10 bg-white rounded-full right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
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

                {/* Modal */}
                {(
                    showModal &&
                    <Modal
                    products={products}
                    productThumbnails={productThumbnails}
                    currentIndex={currentIndex}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    handleClose={handleClose}
                    setCurrentIndex={setCurrentIndex}
                />
                )}
                <div className="flex flex-col justify-center p-6">
                    <div>
                        <span className="uppercase inline-block mb-4 mt-4 w-[150px] tracking-[.4px] text-sm font-kumbh font-bold text-[#ff922b]">Sneaker Company</span>
                        <h1 className="font-kumbh text-4xl mb-8 text-Very-dark-blue leading-[1.25] lg:max-sm:text-[72px] lg:max-sm:leading-[70] font-bold">
                            <span>Fall Limited Edition</span><br /><span>Sneakers</span>
                        </h1>
                        <p className="text-lg font-normal mb-4 font-kumbh text-gray-400 tracking-tighter leading-8 lg:leading-8 md:max-w-md">
                            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.
                        </p>
                        <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
                            <ul className="flex items-center gap-5">
                                <li className="text-slate-900 font-bold text-2xl">$125.00</li>
                                <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow">50%</li>
                            </ul>
                            <p className="text-slate-600 text-sm font-kumbh font-bold"><s>$250.00</s></p>
                        </div>
                        <div className="flex gap-4 mt-4 flex-col lg:flex-row">
                            <div className="bg-[#f2f5fc] p-4 w-full lg:w-1/3 rounded-lg flex items-center justify-between">
                                <button onClick={handleDecrement} className="flex items-center justify-center transition-transform transform hover:scale-110 duration-200">
                                    <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <defs>
                                            <path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" />
                                        </defs>
                                        <use fill="#ff922b" fillRule="nonzero" href="#a" />
                                    </svg>
                                </button>
                                <span className="text-[18px] font-kumbh font-bold text-Very-dark-blue">{quantity}</span>
                                <button onClick={handleIncrement} className="flex items-center justify-center transition-transform transform hover:scale-110 duration-200">
                                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <defs>
                                            <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" />
                                        </defs>
                                        <use fill="#FF7E1B" fillRule="nonzero" href="#b" />
                                    </svg>
                                </button>
                            </div>
                            <div className="bg-[#ff7d18] shadow-3xl rounded-lg p-4 w-full lg:w-1/2 flex gap-4 items-center justify-center transition-transform transform hover:scale-105 outline-none border-none duration-200 will-change-transform">
                                <button className="flex items-center justify-center">
                                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" fill="hsl(0, 0%, 100%)">
                                        <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="current" stroke="current" fillRule="nonzero"></path>
                                    </svg>
                                </button>
                                <button>
                                    <p className="font-bold text-white text-[18px] outline-none">Add to cart</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
