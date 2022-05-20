import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSide from '../../components/LeftSide/LeftSide'
import './auto.scss'
export default function AutoLayot() {
  return (
      <>
     <div id="auth-pages">
        <LeftSide/>
        <Outlet/>
     </div>
     </>
  )
}