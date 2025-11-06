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
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<LandingPage />}/>
        <Route path={'contact'} element={<Contact />}/>
        <Route path={'login'} element={<Auth />}/>
        <Route path={'register'} element={<Auth />}/>
        <Route path={'*'} element={<Pnf />}/> 


        <Route path={'all-books'} element={<AllBooks />} />
        <Route path={'careers'} element={<Careers />} />
        <Route path={'profile'} element={<Profile />} />
        <Route path={'view-books/:id'} element={<ViewBook />} /> 


        <Route path={'admin-home'} element={<AdminHome />} />
        <Route path={'admin-careers'} element={<AdminCareers />} />
        <Route path={'admin-books'} element={<AdminBooks />} />
        <Route path={'admin-settings'} element={<AdminSettings />} />
      </Routes> 

    </>
  )
}

export default App
