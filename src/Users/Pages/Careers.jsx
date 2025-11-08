import React from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

function Careers() {
  return (
    <>
      <Header />

      <div className='md:px-40 p-5'>
        <div className='text-center my-5'>
          <h1 className='text-3xl font-bold mb-5 text-blue-900'>Careers</h1>
          <p className='text-gray-700'>
            Explore exciting opportunities to join our growing team. We value creativity, collaboration, and a passion for technology.
          </p>
        </div>

        <div className="my-10">
          <h1 className='text-2xl font-bold text-center text-blue-900'>Current Openings</h1>
          <div className="flex flex-col md:flex-row gap-3 justify-center items-center my-10">
            <input
              className='p-2 border border-gray-300 rounded-md text-black w-full md:w-1/2 placeholder-gray-500'
              type="text"
              placeholder='Search by Job Title'
            />
            <button className='bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800 transition'>
              Search
            </button>
          </div>
        </div>

        <div className='border border-gray-200 p-5 shadow-lg rounded-lg my-5 hover:shadow-xl transition'>
          <div className='flex justify-between items-center mb-5'>
            <div className='w-full'>
              <h2 className='text-xl font-semibold text-blue-900'>Frontend Developer</h2>
              <hr className='my-2 border-gray-300' />
            </div>
            <button className='flex items-center gap-2 text-blue-900 border border-blue-900 px-3 py-1 rounded-md hover:bg-blue-900 hover:text-white transition'>
              Apply <FaArrowUpRightFromSquare />
            </button>
          </div>

          <div className='text-gray-700 leading-relaxed space-y-1'>
            <p><strong>Location:</strong> Kochi</p>
            <p><strong>Job Type:</strong> Full Time</p>
            <p><strong>Salary:</strong> ₹20,000 - ₹30,000/month</p>
            <p><strong>Qualification:</strong> B.Sc Computer Science</p>
            <p><strong>Experience:</strong> 1-2 years</p>
            <p><strong>Description:</strong> We're seeking a skilled Frontend Developer proficient in React.js and Tailwind CSS. You'll collaborate with designers and backend developers to create responsive and user-friendly web interfaces.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Careers
