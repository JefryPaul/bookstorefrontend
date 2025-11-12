import React from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { MdVerified } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import { useState } from 'react'

function Profile() {

  const [sellBookstatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseHistoryStatus, setPurchaseHistoryStatus] = useState(false)



  return (
    <>
      <Header />
      <div style={{ height: "200px" }} className='bg-black'></div>
      <div className='bg-white p-3' style={{ width: "230px", height: "230px", borderRadius: "50%", marginLeft: "70px", marginTop: "-130px" }}>
        <img style={{ width: "200px", height: "200px", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7RCv36YVkXob6fUxYAr-WiDkABt28_MRIQ&s" alt="" />
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


      <div className="col-span-4 p-10">
        {/* <h1 className='text-center text-3xl font-bold'>Careers</h1> */}
        {/* tabs */}
        <div className='flex justify-center items-center my-8 font-medium'>
          <p onClick={() => { setSellBookStatus(true), setBookStatus(false), setPurchaseHistoryStatus(false) }} className={sellBookstatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-gray-200 cursor-pointer'}>Sell Books</p>
          <p onClick={() => { setSellBookStatus(false), setBookStatus(true), setPurchaseHistoryStatus(false) }} className={bookStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-gray-200 cursor-pointer'}>Book Status</p>
          <p onClick={() => { setSellBookStatus(false), setBookStatus(false), setPurchaseHistoryStatus(true) }} className={purchaseHistoryStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-gray-200 cursor-pointer'}>Purchase History</p>
        </div>
        {sellBookstatus &&
          <div className='md:px-40 p-5'>
            <div className='flex flex-col bg-gray-300 p-6 rounded-lg'>
              <h1 className='text-center font-bold text-xl mb-4'>Book Details</h1>

              <form>
                <div className='grid md:grid-cols-2 gap-4'>

                  <div className='flex flex-col'>
                    <input className='border p-2 rounded mt-2' type='text' placeholder='Title' />
                    <input className='border p-2 rounded mt-2' type='text' placeholder='Author' />
                    <input className='border p-2 rounded mt-2' type='text' placeholder='No of Pages' />
                    <input className='border p-2 rounded mt-2' type='text' placeholder='Image Url' />
                    <input className='border p-2 rounded mt-2' type='text' placeholder='Price' />
                    <input className='border p-2 rounded mt-2' type='text' placeholder='Discount Price' />
                    <input className='border p-2 rounded mt-2' type='text' placeholder='abstract' />
                  </div>

                  <div className='flex flex-col'>
                    <input className='border p-2 rounded mt-2' type='text' placeholder='Publisher' />
                    <input className='border p-2 rounded mt-2' type='text' placeholder='Language' />
                    <input className='border p-2 rounded mt-2' type='text' placeholder='ISBN' />
                    <input className='border p-2 rounded mt-2' type='text' placeholder='Category' />


                    <div className='flex justify-center items-center mt-10 flex-col'>
                      <label htmlFor="uploadBookImg">
                        <input type="file" id='uploadBookImg' style={{ display: "none" }} alt='no-image' />
                        <img src="https://www.kindpng.com/picc/m/157-1571844_upload-icon-png-image-free-download-searchpng-upload.png" alt="" style={{ width: "120px", height: "100px" }} />
                      </label>
                    </div>

                    <div className='flex justify-center gap-4 mt-6'>
                      <button
                        type='reset'
                        className='bg-red-400 text-white font-semibold px-6 py-2 rounded'>
                        Reset
                      </button>

                      <button
                        type='submit'
                        className='bg-green-500 text-white font-semibold px-6 py-2 rounded'>
                        Submit
                      </button>
                    </div>


                  </div>





                </div>





              </form>
            </div>
          </div>



        }

        {bookStatus &&
          <div className='p-10 my-20 shadow rounded'>
            <div className="bg-gray-200 p-5 rounded mt-4">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className='text-2xl'>Book Title</h1>
                  <h2>Author Name</h2>
                  <h3 className='text-blue-600'>₹500</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam similique minima itaque blanditiis nisi libero nam sunt illo, perferendis est vel. Explicabo aut excepturi dolores quod minima voluptatem ex ea?</p>
                  <div className="flex mt-5">
                    <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" className='w-full' style={{ height: "70px", width: "70px" }} alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" className='w-full' style={{ height: "70px", width: "70px" }} alt="" />
                    <img src="https://juststickers.in/wp-content/uploads/2017/08/seal-of-approval.png" className='w-full' style={{ height: "70px", width: "70px" }} alt="" />
                  </div>
                </div>
                <div className="px-4 mt-4 md:mt-4">
                  <img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="" className='w-full' style={{ height: "250px" }} />
                  <div className="flex justify-end mt-4">
                    <button type='button' className='p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600'>Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col'>
              <img style={{ width: "200px", height: "200px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuFlmxinymbZB0Btt2vdYDeuFwZUiSVwdGQ&s" alt="" />
              <p className='text-2xl text-red-600'>No Book Added yet</p>
            </div>
          </div>
        }


        {purchaseHistoryStatus &&
          <div>Purchase History</div>

        }
      </div>


      <Footer />
    </>
  )
}

export default Profile