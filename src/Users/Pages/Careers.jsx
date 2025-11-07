import React from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
// import FaArrowUpRightFromSquare from 'react-icons/fa6'

function Careers() {
  return (
    <>
      <Header />


      <div className='md:px-40 p-5'>
        <div className='text-center my-5'>
          <h1 className='text-3xl font-bold mb-5'>Careers</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, minima et inventore quo fuga sint officiis veritatis ipsam saepe sed eius atque magnam eum temporibus sapiente perferendis excepturi dicta dolores?</p>
        </div>

        <div className="my-10">
          <h1 className='text-2xl font-bold text-center'>Current Openings</h1>
          <div className="flex my-10 justify-center items-center">
            <input className='p-2 border-3 border-gray-200 text-black w-100 placeholder-gray-500' type="text" placeholder='Search By Title' />
            <button className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800'>Search</button>
          </div>
        </div>

        <div className='border border-gray-200 p-5 shadow my-5'>
          <div className='flex mb-5'>
            <div className='w-full'>
              <h1>Frontend Developer</h1>
              <hr />
            </div>
            {/* <button>Apply <FaArrowUpRightFromSquare /></button> */}
          </div>

          <p>Kochi</p>
          <p>Job Type: FULL TIME</p>
          <p>Salary: 20000 - 30000/month</p>
          <p>Qualification: BSC.CS</p>
          <p>Experience: 1-2 yr</p>
          <p>Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequuntur cum fugit iure reprehenderit et ducimus iste. Eos illum vel voluptates corrupti voluptate possimus voluptatibus a, eum, saepe, id sed!</p>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Careers