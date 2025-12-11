import React, { use, useEffect, useState } from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { FaBackward, FaRegEye } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { getABookAPI, makePaymentAPI } from '../../Services/allAPI'
import SERVERURL from '../../Services/serverURL'
import { loadStripe } from "@stripe/stripe-js";


function ViewBook() {

  const [modalStatus, setModalStatus] = useState(false)
  const [bookDetails, setBookDetails] = useState({})
  const { id } = useParams()

  const getABook = async () => {
    const token = sessionStorage.getItem("token")
    const reqHeader = { "Authorization": `Bearer ${token}` }
    try {
      const result = await getABookAPI(id, reqHeader)
      console.log(result);
      setBookDetails(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  console.log(bookDetails);

  const handlePurchase = async () => {
    const stripe = await loadStripe('pk_test_51ScgVZJA6pTsuTpK9c05tb06KmE40Gq7h7XUwDLsalpTK6I0ulQJw0Ne0hmKQ3P3IeoTAv9a35GOJeAMDPhAjesy00d8rpbVVB');
    console.log(stripe); 

    const token = sessionStorage.getItem("token") 
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      } 

      try {
        const result = await makePaymentAPI(bookDetails, reqHeader) 
        console.log(result); 
        const checkoutSessionUrl = result.data.checkoutSessionUrl 

        if (checkoutSessionUrl) {
          window.location.href = checkoutSessionUrl
        }
      } catch (error) {
        console.log(error);
      }
    }

  }


  useEffect(() => {
    getABook()
  }, [])

  return (
    <>
      <Header />

      <div className='md:p-20 p-5'>
        <div className='shadow w-full md:p-10 p-5'>
          <div className='flex justify-end'>
            <FaRegEye
              className='text-blue-700 cursor-pointer hover:text-blue-500'
              size={22}
              onClick={() => setModalStatus(true)}
              title='View Book Images'
            />
          </div>

          <div className='md:grid grid-cols-[1fr_3fr] w-full'>
            <div>
              <img
                src={bookDetails?.imageUrl}
                className='w-full h-100'
                alt={bookDetails?.title}
              />
            </div>

            <div className='px-4'>
              <h1 className='text-center font-medium text-2xl'>{bookDetails?.title}</h1>
              <p className='text-center text-blue-500'> - {bookDetails?.author}</p>
              <div className='md:flex justify-between mt-10'>
                <p>Publisher: {bookDetails?.publisher}</p>
                <p>Language: {bookDetails?.language}</p>
                <p>No: of Pages: {bookDetails?.noOfPages}</p>
              </div>

              <div className='md:flex justify-between mt-10'>
                <p>Seller Mail: {bookDetails?.userMail}</p>
                <p>Real Price: {bookDetails?.price}</p>
                <p>ISBN: {bookDetails?.isbn}</p>
              </div>

              <p className='text-justify mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet provident cum pariatur saepe sunt tenetur rem ut odio quae reiciendis dolorem ratione minima ad, debitis voluptate! Tempora, libero repudiandae!</p>

              <div className='mt-10 flex justify-end'>
                <button className='flex px-4 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800'> <FaBackward className='mt-1 me-2' />Back</button>
                <button onClick={handlePurchase} className='px-4 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-green-800 hover:border hover:border-green-800 ms-3'>Buy ₹</button>

              </div>
            </div>



          </div>
        </div>
      </div>

      {
        modalStatus &&

        <div className='relative z-10 overflow-y-hidden'>
          <div className='bg-gray-500/75 fixed inset-0'>
            <div className='flex justify-center items-center min-h-screen scroll-auto'>
              <div className='bg-white rounded-2xl md:w-250 w-100'>
                <div className='bg-black text-white flex justify-between items-center p-3'>
                  <h3>Book Images</h3>
                  <button onClick={() => setModalStatus(false)} className=''>X</button>
                </div>

                <div className='relative p-5'>
                  <p className='text-blue-600'>Camera click of the book in the hand of seller</p>
                </div>

                {
                  bookDetails?.uploadImages.length > 0 ?

                    bookDetails?.uploadImages?.map(img => (
                      <img src={`${SERVERURL}/Imageuploads/${img}`} alt="" className='mx-2 md:mb-0 mb-2' style={{ width: "100px", height: "100px" }} />
                    ))

                    :

                    <p className='font-bold text-red-700 ms-5'>User uploaded book images are unavailable</p>


                }


              </div>
            </div>
          </div>
        </div>
      }

      <Footer />
    </>
  )
}

export default ViewBook