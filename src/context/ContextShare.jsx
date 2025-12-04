import React, { createContext, useState } from 'react' 

export const userProfileUpdate = createContext()

function ContextShare({children}) { 

    const [updateProfileStatus, setUpdateProfileStatus] = useState({})

  return (
    <>
        <userProfileUpdate.Provider value={{updateProfileStatus, setUpdateProfileStatus}}>
            {children}
        </userProfileUpdate.Provider>
    </>
  )
}

export default ContextShare