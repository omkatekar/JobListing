import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import React from 'react'

export default function MainLayout() {
  return (
   <>
   <Navbar />
   <Outlet />
   <ToastContainer />
   </>
  )
}
