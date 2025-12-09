import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../Components/AdminHeader'
import Footer from '../../Common/Components/Footer'
import AdminSidebar from '../Components/AdminSidebar'
import { updateAdminProfileAPI } from '../../Services/allAPI'
import { toast } from "react-toastify";
import SERVERURL from '../../Services/serverURL'
import { adminProfileUpdateContext } from '../../context/ContextShare'


function AdminSettings() {

  const [token, setToken] = useState("")
  const [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    profile: ""
  })

  const [existingProfile, setExistingProfile] = useState("")
  const [preview, setPreview] = useState("")
  const { setAdminProfileUpdateStatus } = useContext(adminProfileUpdateContext)

  console.log(adminDetails);
  console.log(existingProfile);

  const handleReset = () => {
    let user = JSON.parse(sessionStorage.getItem("existingUser"))
    setAdminDetails({ ...adminDetails, username: user.username, password: user.password, confirmPassword: user.password })
    setExistingProfile(user.profile)
    setPreview("")
  }

  const handleFile = (e) => {
    setAdminDetails({ ...adminDetails, profile: e.target.files[0] })

    setPreview(URL.createObjectURL(e.target.files[0]))
  }

  const handleSubmit = async () => {
    const { username, password, confirmPassword } = adminDetails

    if (!username || !password || !confirmPassword) {
      toast.info("Fill the form Completedly")
    } else {
      if (password != confirmPassword) {
        toast.warning("Password Must Match")
      } else {
        // create reqHeader
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        if (preview) {
          // formdata
          const reqBody = new FormData()
          for (let key in adminDetails) {
            if (key != "confirmPassword") {
              reqBody.append(key, adminDetails[key])
            }
          }
          // reqBody.append(bio = "")
          const result = await updateAdminProfileAPI(reqBody, reqHeader)
          console.log(result);
          if (result.status == 200) {
            toast.success("Profile Updated Successfully")
            sessionStorage.setItem("existingUser", JSON.stringify(result.data))
            setAdminProfileUpdateStatus(result)
          } else {
            toast.error("Something Went Wrong")
          }

        } else {
          const result = await updateAdminProfileAPI({ username, password, profile: existingProfile }, reqHeader)
          console.log(result);
          if (result.status == 200) {
            toast.success("Profile Updated Successfully")
            sessionStorage.setItem("existingUser", JSON.stringify(result.data))
            setAdminProfileUpdateStatus(result)
          } else {
            toast.error("Something Went Wrong")
          }
        }
      }
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
      let user = JSON.parse(sessionStorage.getItem("existingUser"))
      setAdminDetails({ ...adminDetails, username: user.username, password: user.password, confirmPassword: user.password })
      setExistingProfile(user.profile)
    }
  }, [])

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
              <form className='bg-blue-200 md:p-10 p-5 rounded my-10 md:my-0' onSubmit={e => e.preventDefault()}>
                <div className='flex justify-center items-center my-10'>
                  <label htmlFor="editUserProfile">
                    <input type="file" id='editUserProfile' style={{ display: "none" }} onChange={handleFile} />

                    {
                      existingProfile == "" ?

                        <img
                          src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7RCv36YVkXob6fUxYAr-WiDkABt28_MRIQ&s"}
                          style={{ width: "170px", height: "170px", borderRadius: "50%" }}
                          alt="Profile IMG"
                        />

                        :

                        <img
                          src={preview ? preview : `${SERVERURL}/Imageuploads/${existingProfile}`}
                          style={{ width: "170px", height: "170px", borderRadius: "50%" }}
                          alt="Profile IMG"
                        />

                    }


                  </label>
                </div>

                <div className='mb-3'>
                  <label>Username</label>
                  <input
                    value={adminDetails.username}
                    onChange={e => setAdminDetails({ ...adminDetails, username: e.target.value })}
                    type="text"
                    placeholder='Username'
                    className='bg-white rounded w-full p-2'
                  />
                </div>

                <div>
                  <label>Password</label>
                  <input
                    value={adminDetails.password}
                    onChange={e => setAdminDetails({ ...adminDetails, password: e.target.value })}
                    type="text"
                    placeholder='Password'
                    className='bg-white rounded w-full p-2'
                  />
                </div>

                <div>
                  <label>Confirm Password</label>
                  <input
                    value={adminDetails.confirmPassword}
                    onChange={e => setAdminDetails({ ...adminDetails, confirmPassword: e.target.value })}
                    type="text"
                    placeholder='Confirm Password'
                    className='bg-white rounded w-full p-2'
                  />
                </div>

                <div className='flex justify-between mt-10'>
                  <button
                    type="button"
                    onClick={handleReset}
                    className='bg-amber-600 text-white rounded p-4 w-1/2 hover:border hover:border-amber-600 hover:text-amber-600 hover:bg-white'
                  >
                    Reset
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className='bg-green-600 text-white rounded p-4 w-1/2 hover:border hover:border-green-600 hover:text-green-600 hover:bg-white ms-3'
                  >
                    Update
                  </button>
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