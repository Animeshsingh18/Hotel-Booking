import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './pages/hotelOwner/Layout'
import Dashboard from './pages/hotelOwner/Dashboard'
import AddRoom from './pages/hotelOwner/AddRoom'
import ListRoom from './pages/hotelOwner/ListRoom'
import HotelReg from './components/HotelReg'
// import { useAppContext } from './context/AppContext'
// import { Toaster } from 'react-hot-toast'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
// import Footer from './components/Footer'
import MyBookings from './pages/MyBookings'
// import Loader from './components/Loader'

const App = () => {

  // Check Is Route Starts With Owner
  const isOwnerPath = useLocation().pathname.includes("owner"); // it checcks the url as a string if there is owner written then isOwnerPath will return true client navbar will not been showed up in the screen
 

//   const { showHotelReg } = useAppContext();

  return (
   <div className='font-inter'>
      {!isOwnerPath && <Navbar />}
          {/* <HotelReg/> */}
       <div className='min-h-[70vh]'>
         <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<AllRooms/>} />
         <Route path='/rooms/:id' element={<RoomDetails/>} />
         <Route path='/my-bookings' element={<MyBookings/>} />
            <Route path='/owner' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<ListRoom />} />
          </Route>
         </Routes>
       </div>
      <Footer/>
    </div>
  )
}

export default App;