import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './auto2.scss'
export default function AutoLayot() {
  return (
      <>
     <div id="auth-pages2">
        <Header/>
        <Outlet/>
     </div>
     </>
  )
}