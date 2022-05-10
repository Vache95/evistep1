import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header,Home } from './components'
import { Profile,Login } from './pages'
export default function App() {
  return (
    <div className='wrapper'>
      <Routes>
           <Route path='/' element={<Header/>}/>
      </Routes>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </main>
    </div>
  )
}
