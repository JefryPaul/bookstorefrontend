import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import Footer from '../../Common/Components/Footer'
import AdminSidebar from '../Components/AdminSidebar'

function AdminSettings() {
  return (
    <>
      <AdminHeader />

      <div className='md:grid grid-cols-[1fr_4fr]'> 
        <div>
          <AdminSidebar />
        </div> 

        <div className='p-4'>
          <h1 className='text-3xl text-center font-semibold my-10'>Settings</h1> 
          <div className='md:grid grid-cols-2 mt-10'>
            <div className='md:px-10 px-5'>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus repellat excepturi pariatur a tempore laboriosam illo vero! Nobis facilis error odio libero quos eum saepe! Iste voluptatibus quia fugit.</p>
            </div> 

            <div className='md:px-10 px-5'>
              <form className='bg-blue-200 md:p-10 p-5 rounded my-10 md:my-0' action="">
                <div className='flex justify-center items-center my-10'>
                  <label htmlFor="editUserProfile">
                    <input type="file" id='editUserProfile' style={{display: "none"}}/> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7RCv36YVkXob6fUxYAr-WiDkABt28_MRIQ&s" style={{width: "170px", height: "170px", borderRadius: "50%"}} alt="Profile IMG" />
                  </label>
                </div> 

                <div className='mb-3'>
                  <label htmlFor="">Username</label>
                  <input type="text" placeholder='Username' className='bg-white rounded w-full p-2' />
                </div> 

                <div>
                  <label htmlFor="">Password</label>
                  <input type="text" placeholder='Password' className='bg-white rounded w-full p-2' />
                </div> 

                <div>
                  <label htmlFor="">Confirm Password</label>
                  <input type="text" placeholder='Confirm Password' className='bg-white rounded w-full p-2' />
                </div> 

                <div className='flex justify-between mt-10'>
                  <button className='bg-amber-600 text-white rounded p-4 w-1/2 hover:border hover:border-amber-600 hover:text-amber-600 hover:bg-white'>Reset</button>
                  <button className='bg-green-600 text-white rounded p-4 w-1/2 hover:border hover:border-green-600 hover:text-green-600 hover:bg-white ms-3'>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default AdminSettings