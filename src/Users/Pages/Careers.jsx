import React, { useState } from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";



function Careers() {
    const [modalControl, setModalControl] = useState(false);

  return (
    <>
    <Header/>
      <div className="md:px-40 p-5">
        <div className="text-center my-5">
          <h1 className='text-3xl font-bold mb-5'>Careers</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ratione, quos maxime dolore tenetur quas voluptate excepturi facilis unde pariatur iure? Illo voluptatem quod inventore repellat delectus. Quisquam, quis corrupti, exercitationem modi sint iure similique doloremque ab quos debitis corporis. Facilis repellat ea deleniti? Quod labore eaque assumenda cum nihil rerum incidunt facere, quo doloremque nostrum tempore culpa! Architecto quisquam itaque amet neque, blanditiis veritatis iure tempore odio, corporis accusantium quam nisi sed laborum aliquam corrupti dolorum provident dolores error minima ratione soluta vel totam! Quod unde veniam iste incidunt praesentium! Placeat autem dolorem, magnam neque ad at provident sit?</p>
        </div>
        <div className="my-10">
          <h1 className='text-2xl font-bold text-center'>Current Openings</h1>
          <div className="flex my-10 justify-center items-center">
            <input className='p-2 border-3 border-gray-200 text-black w-100 placeholder-gray-500' type="text" placeholder='Search By Title'/>
            <button className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800'>Search</button>
      
          </div>
        </div>
        {/* job-listing */}
        <div className="border border-gray-200 p-5 shadow my-5">
          <div className="flex mb-5">
            <div className='w-full'>
              <h1 className='text-xl pb-3 font-bold'>Frontend Developer</h1>
              <hr />
            </div>
            <button onClick={() => setModalControl(true)} className='text-white p-3 ms-5 flex items-center bg-blue-900'>Apply <FaArrowUpRightFromSquare className='ms-2'/></button>
          </div>
          <p className='flex'><FaLocationDot className='me-2 mt-1' /> Kochi</p>
          <p className='text-lg my-2'>Job Type : FULL TIME</p>
          <p className='text-lg my-2'>Salary : 20000-30000/month</p>
          <p className='text-lg my-2'>Qualification : BSC-CS</p>
          <p className='text-lg my-2'>Experience : 1-2 years</p>
          <p className='text-lg my-2 text-justify'>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum error minus nobis ratione provident, vitae minima ipsum consequuntur quos adipisci explicabo iure qui distinctio voluptates debitis, commodi cumque nisi.</p>
        </div>
      </div>

      
      {modalControl &&
      <div className='relative z-10 overflow-y-hidden'>
        <div className='bg-gray-500/75 fixed inset-0'>
          <div className='flex justify-center items-center min-h-screen scroll-auto'>
            <div className='bg-white rounded-2xl md:w-200 w-100'>
              <div className='bg-gray-800 text-white flex justify-between rounded items-center p-3'>
                  <h3>Application Form</h3>
                  <button onClick={()=>setModalControl(false)}>X</button>
              </div>
              <div className='flex justify-between md:mx-10 md:my-5'>
                <input className='border md:p-2' type="text" placeholder='Full Name'/>
                <input className='border md:p-2' type="text" placeholder='Qualification'/>
              </div>
              <div className='flex justify-between md:mx-10 md:my-5'>
                <input className='border md:p-2' type="text" placeholder='Email Id'/>
                <input className='border md:p-2' type="text" placeholder='Phone'/>
              </div>
              <div className='md:mx-10'>
                <textarea
                  placeholder="Cover Letter"
                  className="w-full h-30 p-4 text-lg border"
                ></textarea>
              </div>
              <div className='ms-10 flex flex-col mb-5 me-10'>
                <p className='text-xl my-3'>Upload Resume:</p> 
                <div>
                  <input type="file" className='w-full border p-2'/>
                </div>
                
              </div>
              <div className='bg-gray-300 mt-5 p-5 flex justify-end'>
                  <button className='p-3 bg-amber-600 rounded text-white hover:border hover:border-amber-600 hover:bg-white hover:text-amber-600 hover:text-amber-600'>Reset</button>
                  <button className='p-3 bg-green-600 rounded text-white hover:border hover:border-green-600 hover:bg-white hover:text-green-600 ms-3'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div> 
      }
    <Footer/>      
    </>
  )
}

export default Careers