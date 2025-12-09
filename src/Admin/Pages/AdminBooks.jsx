import React, { useEffect, useState } from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { getAllBooksAdminAPI, updateBookStatusAdminAPI, getAllAdminUsersAPI } from '../../Services/allAPI'
import SERVERURL from '../../Services/serverURL'

function AdminBooks() {

  const [bookListStatus, setBookListStatus] = useState(true)
  const [userListStatus, setUserListStatus] = useState(false)
  const [allBooks, setAllBooks] = useState([])
  const [token, setToken] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  // ---------------------- Get all Books ----------------------
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

  // ---------------------- Update Book Status ----------------------
  const updateBookStatus = async (id) => {
    try {
      await updateBookStatusAdminAPI(id)
      getAllBooks()
    } catch (error) {
      console.log(error)
    }
  }

  // ---------------------- Get all Users ----------------------
  const getAllUsers = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getAllAdminUsersAPI(reqHeader);

      if (result.status === 200) {
        setAllUsers(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ---------------------- Initial Loads ----------------------
  useEffect(() => {
    getAllBooks();

    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Fetch users only after token loads
  useEffect(() => {
    if (token) {
      getAllUsers();
    }
  }, [token]);

  return (
    <>
      <AdminHeader />

      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSidebar />
        </div>

        <div className='col-span-4 p-10'>
          <h1 className='text-center text-3xl font-bold'>All Books</h1>

          {/* ---------------------- TABS ---------------------- */}
          <div className='flex justify-center items-center my-8 font-medium text-lg'>

            <p
              onClick={() => { setUserListStatus(false); setBookListStatus(true) }}
              className={
                bookListStatus
                  ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer'
                  : 'p-4 border-b border-gray-200 cursor-pointer'
              }
            >
              Book List
            </p>

            <p
              onClick={() => { setUserListStatus(true); setBookListStatus(false) }}
              className={
                userListStatus
                  ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer'
                  : 'p-4 border-b border-gray-200 cursor-pointer'
              }
            >
              Users
            </p>

          </div>

          {/* ---------------------- BOOK LIST ---------------------- */}
          {bookListStatus &&
            (
              allBooks?.length > 0 ?
                <div className="md:grid grid-cols-3 gap-5">
                  {allBooks.map((item, index) => (
                    <div className='p-3' key={index}>
                      <div className='p-3 shadow-lg'>
                        <img
                          style={{ width: "100%", height: "300px" }}
                          src={item?.imageUrl}
                          alt="book-img"
                        />

                        <div className='flex justify-center items-center flex-col my-3'>
                          <h3>{item?.title}</h3>
                          <p>{item?.author}</p>

                          {item?.status === "pending" &&
                            <button
                              onClick={() => updateBookStatus(item?._id)}
                              type='button'
                              className='bg-green-900 w-full p-2 text-white mt-3 hover:bg-green-950'>
                              Approve
                            </button>
                          }

                          {item?.status === "approved" &&
                            <div className='w-full flex justify-end'>
                              <img
                                style={{ width: "40px", height: "40px" }}
                                src="https://static.vecteezy.com/system/resources/thumbnails/024/382/913/small/green-check-mark-icon-symbol-logo-in-a-circle-tick-symbol-green-checkmark-approve-transparent-free-png.png"
                                alt="approved"
                              />
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                :
                <p>Loading…</p>
            )
          }

          {/* ---------------------- USER LIST ---------------------- */}
          {userListStatus && (
            <>
              {allUsers?.length > 0 ? (
                <div className="md:grid grid-cols-3 w-full my-5">
                  {allUsers.map((user, index) => (
                    <div
                      key={index}
                      className="shadow rounded p-2 m-2 bg-gray-200"
                    >
                      <p className="text-red-700 font-bold">ID : {user?._id}</p>

                      <div className="flex items-center mt-3">
                        <img
                          width="80px"
                          height="80px"
                          src={
                            user?.profile === ""
                              ? "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png"
                              : `${SERVERURL}/Imageuploads/${user?.profile}`  // <-- Correct Folder Name
                          }
                          alt="profile"
                          style={{ borderRadius: "50%" }}
                        />

                        <div className="flex flex-col ml-3 w-full">
                          <p className="text-blue-800 text-lg font-bold">
                            {user?.username}
                          </p>
                          <p>{user?.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No users found</p>
              )}
            </>
          )}

        </div>
      </div>
    </>
  )
}

export default AdminBooks
