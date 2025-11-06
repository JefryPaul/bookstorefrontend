import React from 'react';
import { FaArrowRight, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsLinkedin } from 'react-icons/bs';

function Footer() {
    return (
        <>
            <div className='md:grid grid-cols-3 md:gap-9 bg-gray-900 text-white p-10'>

                <div>
                    <h3 className='font-bold text-lg mb-3'>About Us</h3>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus minima maiores excepturi consequatur, repudiandae quos.
                        Labore totam voluptate quisquam odio! Sint sapiente saepe dignissimos quas consequuntur et praesentium sunt! Enim.
                    </p>
                </div>

                <div>
                    <h3 className='font-bold text-lg mb-3'>Newsletter</h3>
                    <p className='mb-4'>Stay updated with our latest trends</p>
                    <div className='flex'>
                        <input
                            type="text"
                            placeholder="Email ID"
                            className="p-2 w-full rounded-l-md placeholder-gray-500 outline-none border border-white bg-transparent text-white"
                        />
                        <button className='bg-yellow-400 p-3 rounded-r-md hover:bg-yellow-500 transition'>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className='font-bold text-lg mb-3'>Follow Us</h3>
                    <p className='mb-4'>Let us be social</p>
                    <div className='flex'>
                        <FaInstagramSquare className='me-4 text-2xl cursor-pointer hover:text-pink-500' />
                        <FaXTwitter className='me-4 text-2xl cursor-pointer hover:text-blue-400' />
                        <FaFacebookSquare className='me-4 text-2xl cursor-pointer hover:text-blue-600' />
                        <BsLinkedin className='text-2xl cursor-pointer hover:text-blue-500' />
                    </div>
                </div>

            </div>

            <div className='bg-black p-3 text-center text-white text-sm'>
                <p>© 2025 All rights reserved | Made with ❤️ by <span className='font-semibold'>Jefry Paul</span></p>
            </div>
        </>
    );
}

export default Footer;
