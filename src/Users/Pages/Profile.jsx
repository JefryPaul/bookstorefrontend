import React from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { MdVerified } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'

function Profile() {
  return (
    <>
      <Header /> 
        <div style={{height: "200px"}} className='bg-black'></div> 
        <div className='bg-white p-3' style={{width: "230px", height: "230px", borderRadius: "50%", marginLeft: "70px", marginTop: "-130px"}}>
          <img style={{width: "200px", height: "200px", borderRadius: "50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7RCv36YVkXob6fUxYAr-WiDkABt28_MRIQ&s" alt="" />
        </div> 

        <div className='md:flex justify-between px-20 mt-5'>
          <div className='flex items-center'>
            <h1 className='font-bold md:text-3xl text-2xl'>Sijo Johnson</h1> 
            <MdVerified className='text-blue-500 ms-3 text-xl' />
          </div> 

          <div>
            <button className='flex px-4 py-3 font-bold border border-blue-200 text-blue-600'><FaRegEdit className='mt-1 me-2' />Edit</button>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Profile