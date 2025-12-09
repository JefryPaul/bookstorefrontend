import React, { useEffect, useState } from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaBook } from 'react-icons/fa'
import { getAllBooksAdminAPI, getAllAdminUsersAPI } from '../../Services/allAPI'

function AdminHome() {

  const [allBooks, setAllBooks] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [token, setToken] = useState("")
  const [noOfApplications, setNoOfApplications] = useState(0)

  const getAllBooks = async () => {
    try {
      const result = await getAllBooksAdminAPI()
      if (result.status === 200) {
        setAllBooks(result.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getAllUsers = async () => {
    try {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      const result = await getAllAdminUsersAPI(reqHeader)
      if (result.status === 200) {
        setAllUsers(result.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  useEffect(() => {
    if (token) {
      getAllBooks()
      getAllUsers()
      // temporary static
      setNoOfApplications(85)
    }
  }, [token])

  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div>
          <AdminSidebar />
        </div>
        <div className='p-4'>
          <div className='md:grid grid-cols-3 text-white'>

            {/* Total Books */}
            <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-blue-700 rounded p-4'>
                <div className='flex justify-center items-center'>
                  <FaBook className='text-3xl' />
                </div>
                <div>
                  <h1>Total No. Of Books : <span className='text-xl'>{allBooks.length}</span></h1>
                </div>
              </div>
            </div>

            {/* Total Users */}
            <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-green-700 rounded p-4'>
                <div className='flex justify-center items-center'>
                  <FaBook className='text-3xl' />
                </div>
                <div>
                  <h1>Total No. Of Users : <span className='text-xl'>{allUsers.length}</span></h1>
                </div>
              </div>
            </div>

            {/* Total Applicants */}
            <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-yellow-700 rounded p-4'>
                <div className='flex justify-center items-center'>
                  <FaBook className='text-3xl' />
                </div>
                <div>
                  <h1>Total No. Of Applicants : <span className='text-xl'>{noOfApplications}</span></h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHome
