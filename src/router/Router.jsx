import React from 'react'
import { Navigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import AutoLayotHeader from '../Layot/AuthLayoHeader/AuthLayotHeader'
import Login from '../pages/Login/Login'

// export default function Router() {
//   const user = useSelector(state => state.logincode)
//   const token = user.token
  
//   if(token){
//     return (
//       <>
//             <Routes>
//               <Route path="/" element={<AutoLayotHeader/>}>
//                 <Route path='/' element={<Home/>}/>
//               </Route> 
//               <Route path="/profile" element={<AutoLayotHeader/>}>
//                 <Route path='/profile' element={<Profile/>}/>
//               </Route>
//                 <Route path='*' element={<Navigate to="/"/>}/> 
//             </Routes>
//       </>
//     )
//     } else {
//     return ( 
//       <>
//             <Routes>
//             <Route path="/loginemail" element={<AutoLayot/>}>
//               <Route path='/loginemail' element={<LoginEmail/>}/>
//             </Route> 
//             <Route path="/logincode" element={<AutoLayot/>}>
//               <Route path='/logincode' element={<LoginCode />}/>
//             </Route>
//               <Route path='*' element={<Navigate to="/loginemail"/>}/> 
//             </Routes>
//       </>
//   )
//   }

// }

export default function Router() {
  const user = useSelector(state => state.logincode)
  const token = user.token
  
  if(token){
    return (
      <>
            <Routes>
              <Route path="/" element={<AutoLayotHeader/>}>
                <Route path='/' element={<Home/>}/>
              </Route> 
              <Route path="/profile" element={<AutoLayotHeader/>}>
                <Route path='/profile' element={<Profile/>}/>
              </Route>
                <Route path='*' element={<Navigate to="/"/>}/> 
            </Routes>
            <NotificationContainer />
      </>
    )
    } else {
    return ( 
      <>
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='*' element={<Navigate to="/login"/>}/> 
            </Routes>
            <NotificationContainer />
      </>
  )
  }

}