import React, { createContext, useState } from 'react'

export const userProfileUpdate = createContext()
export const adminProfileUpdateContext = createContext()

function ContextShare({ children }) {


  const [updateProfileStatus, setUpdateProfileStatus] = useState({})
  const [adminProfileUpdateStatus, setAdminProfileUpdateStatus] = useState({})

  return (
    <>
      <userProfileUpdate.Provider value={{ updateProfileStatus, setUpdateProfileStatus }}>
        <adminProfileUpdateContext.Provider value={{ adminProfileUpdateStatus, setAdminProfileUpdateStatus }}>
          {children}
        </adminProfileUpdateContext.Provider>
      </userProfileUpdate.Provider>
    </>
  )
}

export default ContextShare