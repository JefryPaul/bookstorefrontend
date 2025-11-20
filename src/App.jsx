import { useState, useEffect } from "react"
import AdminBooks from "./Admin/Pages/AdminBooks"
import AdminCareers from "./Admin/Pages/AdminCareers"
import AdminHome from "./Admin/Pages/AdminHome"
import AdminSettings from "./Admin/Pages/AdminSettings"
import Auth from "./Common/Pages/Auth"
import Contact from "./Common/Pages/Contact"
import LandingPage from "./Common/Pages/LandingPage"
import Pnf from "./Common/Pages/Pnf"
import AllBooks from "./Users/Pages/AllBooks"
import Careers from "./Users/Pages/Careers"
import Profile from "./Users/Pages/Profile"
import ViewBook from "./Users/Pages/ViewBook"
import { Routes, Route } from 'react-router-dom'
import PreLoader from "./Common/Pages/PreLoader"
import { ToastContainer } from 'react-toastify';



function App() {

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])

  return (
    <>
      <Routes>
        <Route path={'/'} element={loader ? <PreLoader /> : <LandingPage />} />
        <Route path={'contact'} element={<Contact />} />
        <Route path={'login'} element={<Auth />} />
        <Route path={'register'} element={<Auth register />} />
        <Route path={'*'} element={<Pnf />} />

        <Route path={'all-books'} element={<AllBooks />} />
        <Route path={'careers'} element={<Careers />} />
        <Route path={'profile'} element={<Profile />} />
        <Route path={'view-books/:id'} element={<ViewBook />} />

        <Route path={'admin-home'} element={<AdminHome />} />
        <Route path={'admin-careers'} element={<AdminCareers />} />
        <Route path={'admin-books'} element={<AdminBooks />} />
        <Route path={'admin-settings'} element={<AdminSettings />} />
      </Routes>

      <ToastContainer position="top-center" autoClose={3000} theme="colored" />


    </>
  )
}

export default App
