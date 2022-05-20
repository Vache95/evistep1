import React from 'react'
import LeftSide from '../../components/LeftSide/LeftSide'
import LoginCode from './components/Login-code/LoginCode'
import LoginEmail from './components/Login-email/LoginEmail'
import { useSelector } from 'react-redux'
export default function () {
  const email = useSelector(state=>state.loginemail.email)
  return (
    <>
    <LeftSide/>
    {
     email ? <LoginCode /> : <LoginEmail/>
    }
    </>
  )
}
