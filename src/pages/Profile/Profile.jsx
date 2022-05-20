
import React, { useEffect} from 'react'
import './profile.scss'
import { ProfileTop,ProfileBottom } from './components'
import { profileThunk } from '../../store/auth/profile/Profile'
import { useDispatch ,useSelector } from 'react-redux';

export default function Profile() {
  const user = useSelector(state => state.profiledata)
  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(profileThunk())
  },[])

  return (
    <section className="profile">
  
      <div className="profile__container">
         <h2 className="profile__h2">My Profile</h2>
          <ProfileTop user={user}/>
          <ProfileBottom/>  
      </div>
    </section>
  )
}
