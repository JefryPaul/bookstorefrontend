import React from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { FaBackward, FaRegEye } from 'react-icons/fa'

function ViewBook() {
  return (
    <>
      <Header />

      <div className='md:p-20 p-5'>
          <div className='shadow w-full md:p-10 p-5'>
            <div className='flex justify-end'>
              <FaRegEye />
            </div> 

            <div className='md:grid grid-cols-[1fr_3fr] w-full'>
              <div>
                <img src="https://m.media-amazon.com/images/I/81tFwEZOFcL._SY425_.jpg" className='w-full h-100' alt="" />
              </div> 

              <div className='px-4'> 
                <h1 className='text-center font-medium text-2xl'>Crooked Plow</h1> 
                <p className='text-center text-blue-500'> - Itamar Vieira Junior (Author)</p> 
                <div className='md:flex justify-between mt-10'>
                  <p>Publisher: </p>
                  <p>Language: </p>
                  <p>No: of Pages: </p>
                </div> 

                <div className='md:flex justify-between mt-10'>
                  <p>Seller Mail: </p>
                  <p>Real Price: </p>
                  <p>ISBN: </p>
                </div> 

                <p className='text-justify mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet provident cum pariatur saepe sunt tenetur rem ut odio quae reiciendis dolorem ratione minima ad, debitis voluptate! Tempora, libero repudiandae!</p> 

                <div className='mt-10 flex justify-end'>
                  <button className='flex px-4 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800'> <FaBackward className='mt-1 me-2'/>Back</button>
                  <button className='px-4 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-green-800 hover:border hover:border-green-800 ms-3'>Buy ₹</button>

                </div>
              </div> 
              
               

            </div>
          </div>
      </div>

      <Footer />
    </>
  )
}

export default ViewBook