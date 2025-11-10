import React from 'react'
import { FaGraduationCap, FaHome } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { PiBooks } from 'react-icons/pi'

function AdminSidebar() {
    return (
        <>
            <div className='bg-gray-200 w-full md:min-h-screen flex items-center flex-col'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7RCv36YVkXob6fUxYAr-WiDkABt28_MRIQ&s" style={{ width: "170px", height: "170px", borderRadius: "50%" }} alt="profile image" />
                </div>
                <h1 className='text-2xl mb-10'>Jefry Paul</h1>
                <div className='mb-10'>
                    <div className='mb-4 flex'>
                        <input type="radio" id='home' readOnly />
                        <label htmlFor="home" className='flex ms-3'><FaHome className='mt-1 me-1' />Home</label>
                    </div>
                    <div className='mb-4 flex'>
                        <input type="radio" id='books' readOnly />
                        <label htmlFor="books" className='flex ms-3'><PiBooks className='mt-1 me-1' />Books</label>
                    </div>
                    <div className='mb-4 flex'>
                        <input type="radio" id='careers' readOnly />
                        <label htmlFor="careers" className='flex ms-3'><FaGraduationCap className='mt-1 me-1' />Careers</label>
                    </div>
                    <div className='mb-4 flex'>
                        <input type="radio" id='settings' readOnly />
                        <label htmlFor="settings" className='flex ms-3'><IoMdSettings className='mt-1 me-1' />Settings</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar