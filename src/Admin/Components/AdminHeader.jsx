import React from 'react'
import { FaPowerOff } from 'react-icons/fa' 
import {Link} from 'react-router-dom'

function AdminHeader() {
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
                    <Link to="/login">
                        <button className='flex items-center border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white transition'>
                            <FaPowerOff className='me-2' /> Logout
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AdminHeader