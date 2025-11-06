import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaRegUser } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TiThMenu } from 'react-icons/ti';
import { Link } from 'react-router-dom';

function Header() { 

    const [listStatus, setListStatus] = useState(false)

    return (
        <>
            <div className='grid grid-cols-3 p-3 items-center'>
                <div className='flex items-center'>
                    <img
                        width="50"
                        height="50"
                        src="https://openclipart.org/image/800px/svg_to_png/275692/1489798288.png"
                        alt="Bookstore Logo"
                    />
                    <h1 className='font-bold text-2xl ms-2 md:hidden'>BOOKSTORE</h1>
                </div>

                <div className='md:flex justify-center items-center hidden'>
                    <h1 className='text-3xl font-bold tracking-wide'>BOOKSTORE</h1>
                </div>

                <div className='md:flex justify-end items-center hidden'>
                    <FaInstagramSquare className='me-3 text-2xl hover:text-pink-500 cursor-pointer' />
                    <FaXTwitter className='me-3 text-2xl hover:text-blue-400 cursor-pointer' />
                    <FaFacebookSquare className='me-3 text-2xl hover:text-blue-600 cursor-pointer' />
                    <Link to="/login">
                        <button className='flex items-center border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white transition'>
                            <FaRegUser className='me-2' /> Login
                        </button>
                    </Link>
                </div>
            </div>

            <nav className='w-full bg-gray-900 text-white p-5 md:flex md:justify-center md:items-center'>
                <div className='flex justify-between items-center md:hidden'>
                    <button onClick={() => setListStatus(!listStatus)}>
                        <TiThMenu className='text-3xl' />
                    </button>
                    <Link to="/login">
                        <button className='flex items-center border border-white rounded px-3 py-2 hover:bg-white hover:text-black transition'>
                            <FaRegUser className='me-2' /> Login
                        </button>
                    </Link>
                </div>

                <ul className={listStatus ? 'flex flex-col' : 'md:flex justify-center items-center hidden'}>
                    <li><Link to="/" className='mx-4 hover:text-yellow-400 transition'>Home</Link></li>
                    <li><Link to="/all-books" className='mx-4 hover:text-yellow-400 transition'>Books</Link></li>
                    <li><Link to="/careers" className='mx-4 hover:text-yellow-400 transition'>Careers</Link></li>
                    <li><Link to="/contact" className='mx-4 hover:text-yellow-400 transition'>Contact</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
