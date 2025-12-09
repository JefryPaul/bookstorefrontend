import React, { useContext, useEffect, useState } from 'react'
import { FaGraduationCap, FaHome } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { PiBooks } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { adminProfileUpdateContext } from '../../context/ContextShare'
import SERVERURL from '../../Services/serverURL'

function AdminSidebar() {

    const [adminName, setAdminName] = useState("")
    const [existingProfile, setExistingProfile] = useState()
    const { adminProfileUpdateStatus } = useContext(adminProfileUpdateContext)


    useEffect(() => {
        setAdminName(JSON.parse(sessionStorage.getItem("existingUser")).username)
        setExistingProfile(JSON.parse(sessionStorage.getItem("existingUser")).profile)
    }, [adminProfileUpdateStatus])

    return (
        <>
            <div className='bg-gray-200 w-full md:min-h-screen flex items-center flex-col'>
                <div>
                    {existingProfile == "" ? (
                        <img
                            style={{ height: "150px", width: "150px", borderRadius: "50%" }}
                            src={"https://cdn-icons-png.flaticon.com/512/219/219983.png"}
                            alt=""
                        />
                    ) : (
                        <img
                            style={{ height: "150px", width: "150px", borderRadius: "50%" }}
                            src={`${SERVERURL}/Imageuploads/${existingProfile}`}
                            alt=""
                        />
                    )}
                </div>
                <h1 className='text-2xl mb-10'>{adminName}</h1>
                <div className='mb-10'>
                    <div className='mb-4 flex'>
                        <input type="radio" id='home' readOnly />
                        <Link to={'/'}><label htmlFor="home" className='flex ms-3'><FaHome className='mt-1 me-1' />Home</label></Link>
                    </div>
                    <div className='mb-4 flex'>
                        <input type="radio" id='books' readOnly />
                        <Link><label htmlFor="books" className='flex ms-3'><PiBooks className='mt-1 me-1' />Books</label></Link>
                    </div>
                    <div className='mb-4 flex'>
                        <input type="radio" id='careers' readOnly />
                        <Link><label htmlFor="careers" className='flex ms-3'><FaGraduationCap className='mt-1 me-1' />Careers</label></Link>
                    </div>
                    <div className='mb-4 flex'>
                        <input type="radio" id='settings' readOnly />
                        <Link><label htmlFor="settings" className='flex ms-3'><IoMdSettings className='mt-1 me-1' />Settings</label></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar