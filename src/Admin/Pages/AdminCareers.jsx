import React, { useState } from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaLocationDot } from 'react-icons/fa6'
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';


function AdminCareers() {

  const [jobPostStatus, SetjobPostStatus] = useState(true)
  const [applicantListStatus, setApplicantListStatus] = useState(false)
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className='text-center text-3xl font-bold'>Careers</h1>
          {/* tabs */}
          <div className='flex justify-center items-center my-8 font-medium'>
            <p onClick={() => { setApplicantListStatus(false), SetjobPostStatus(true) }} className={jobPostStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-gray-200 cursor-pointer'}>Job Post</p>
            <p onClick={() => { setApplicantListStatus(true), SetjobPostStatus(false) }} className={applicantListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-gray-200 cursor-pointer'}>View Applicant</p>
          </div>
          {jobPostStatus &&
            <div className=''>
              <div>
                <div className="md:flex justify-center items-center my-8 w-full md:px-20 px-5">
                  <div className='md:flex w-full ms-2 md:ms-0'>
                    <input type="text" placeholder='Search By Title...' className='border border-gray-200 placeholder-gray-200 p-2 md:w-1/4 w-3/4' />
                    <button className='bg-green-800 mt-5 md:mt-0 text-white p-2 rounded md:ms-2 hover:bg-white hover:border hover:border-green-700 hover:text-green-800'>Search</button>
                  </div>
                  <div>
                    <button className='bg-blue-800 mt-5 md:mt-0 text-white p-2 rounded md:ms-2 hover:bg-white hover:border hover:border-green-700 hover:text-blue-700'>Add Job +</button>
                  </div>
                </div>

                <div className="border border-gray-200 p-5 shadow my-5">
                  <div className="flex mb-5">
                    <div className='w-full'>
                      <h1 className='text-xl pb-3 font-bold'>Frontend Developer</h1>
                      <hr />
                    </div>
                    <button className='text-white p-3 ms-5 flex items-center bg-red-900'>Delete <MdDeleteForever className='ms-2' /></button>
                  </div>
                  <p className='flex'><FaLocationDot className='me-2 mt-1' /> Kochi</p>
                  <p className='text-lg my-2'>Job Type : FULL TIME</p>
                  <p className='text-lg my-2'>Salary : 20000-30000/month</p>
                  <p className='text-lg my-2'>Qualification : BSC-CS</p>
                  <p className='text-lg my-2'>Experience : 1-2 years</p>
                  <p className='text-lg my-2 text-justify'>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum error minus nobis ratione provident, vitae minima ipsum consequuntur quos adipisci explicabo iure qui distinctio voluptates debitis, commodi cumque nisi.</p>
                </div>
                <p className='text-red-800'>NO JOB AVAILABLE</p>
              </div>
            </div>

          }

          {applicantListStatus &&
            <div className='p-10'>
              <table className='w-full my-3 shadow'>
                <thead>
                  <tr>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>SL.NO</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qualification</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Email</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover Letter</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-500 p-3 text-center'>1</td>
                    <td className='border border-gray-500 p-3 text-center'>Software Tester</td>
                    <td className='border border-gray-500 p-3 text-center'>Sijo Johnson</td>
                    <td className='border border-gray-500 p-3 text-center'>B-Tech</td>
                    <td className='border border-gray-500 p-3 text-center'>sijo@gmail.com</td>
                    <td className='border border-gray-500 p-3 text-center'>9325647812</td>
                    <td className='border border-gray-500 p-3 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum alias hic ipsum excepturi doloremque accusantium. Incidunt laudantium deserunt eaque! Reiciendis delectus voluptatibus nemo ut in quis sequi, iusto eaque unde.</td>
                    <td className='border border-gray-500 p-3 text-center'><Link className='text-blue-500 underline'>Resume</Link></td>
                  </tr>
                </tbody>
              </table>
              <p className='text-red-800 font-bold text-xl'>No Applicants are Available....</p>
            </div>

          }
        </div>
      </div>
    </>
  )
}

export default AdminCareers