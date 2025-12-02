import React, { useState, useEffect } from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { Link } from 'react-router-dom'
import { getAllBooksAPI } from '../../Services/allAPI'

function AllBooks() {

  const [token, setToken] = useState("")
  const [allBooks, setAllBooks] = useState([])
  const [allCategory, setAllCategory] = useState([]) 
  const [tempBooks, setTempBooks] = useState([]) 
  const [searchKey, setSearchKey] = useState("") 
  
  console.log(searchKey);



  const getAllBooks = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await getAllBooksAPI(searchKey, reqHeader)
      console.log(result);

      if (result.status === 200) {
        setAllBooks(result.data)
      } 
      
      setTempBooks(result.data) 

      // setAllCategory(result.data.map(item => item.category)) 

      const tempCategory = result.data.map(item => item.category) 

      setAllCategory([...new Set(tempCategory)])

    } catch (error) {
      console.log(error);
    }
  }

  console.log(allCategory); 

  const categoryFilter = (category) => {
    if (category == "No Filter") {
      setAllBooks(tempBooks)
    } else {
      setAllBooks(tempBooks.filter(item => item.category.toLowerCase() == category.toLowerCase()))
    }
  }


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = (sessionStorage.getItem("token"))
      setToken(userToken)
      getAllBooks(userToken)
    }
  }, [searchKey])

  return (
    <>
      <Header />
      <div className='flex justify-center items-center flex-col my-5'>
        <h1 className='text-3xl font-bold my-5'>COLLECTIONS</h1>
        <div className='flex my-5'>
          <input onChange={(e) => setSearchKey(e.target.value)} className='p-2 border-3 border-gray-200 text-black w-100 placeholder-gray-500' type="text" placeholder='Search By Title' />
          <button className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800'>Search</button>
        </div>
      </div>
      {token && (
        <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
          {/* filter */}

          <div className="col-span-1">
            <h1>Filters</h1>
            {allCategory.map((item, index) => (
              <div key={index} onClick={() => categoryFilter(item)} className='mt-5'>
                <input name="filter" id={item} type="radio" />
                <label className='ms-2' htmlFor={item}> {item}</label>
              </div>
            ))
            }
            <div onClick={() => categoryFilter("No Filter")} className='mt-5'>
              <input name='filter' id='nofilter' type="radio" />
              <label className='ms-2' htmlFor="nofilter">No Filter</label>
            </div>
          </div>

          <div className='col-span-3'>

            {
              allBooks?.length > 0 ?
                <div className='md:grid grid-cols-4 mt-5 md:mt-0'>

                  {allBooks.map((book, index) => (
                    <div key={index} className='shadow rounded p-3 mx-4 my-3'>
                      <img
                        src={book.imageUrl}
                        width={"100%"}
                        height={"300px"}
                        alt={book.title}
                      />
                      <div className='flex flex-col justify-center items-center mt-4'>
                        <p className='font-bold'>{book.title}</p>
                        <p className='text-gray-600'>{book.author}</p>

                        <Link to={`/view-books/${book._id}`}
                          className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border-blue-800 w-full text-center'
                        >
                          View Book
                        </Link>
                      </div>
                    </div>
                  ))}

                </div>
                :
                <p className='text-center mt-5 font-semibold'>No books available</p>
            }



          </div>





        </div>
      )}

      {!token && (
        <div className='my-10 flex justify-center items-center flex-col'>
          <img src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif" alt="" width={"400px"} />
          <p className='font-semibold text-xl mt-5'>
            Please <Link to={'/login'} className='text-blue-700 font-bold'>Login</Link> to explore more...
          </p>
        </div>
      )}

      <Footer />
    </>
  )
}

export default AllBooks