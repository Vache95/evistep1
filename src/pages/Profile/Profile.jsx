import React from 'react'
import './profile.scss'
import { Header } from '../../components/'
import TextField from '@mui/material/TextField';

export default function Profile() {
  return (
    <section className="profile">
      <Header />
      <div className="profile__container">
        <h2 className="profile__h2">My Profile</h2>
        <div className="profile__top">
          <div className="profile__top-left">
            <h3 className="profile__top-left-h3">General Info</h3>
            <form id='form3' className="form3">
              <div className="form3__top">
                <TextField id="standard-basic" label="First name" variant="standard" />
                <TextField id="standard-basic" label="Last name" variant="standard" />
                <TextField id="standard-basic" label="Date of birth" variant="standard" />
              </div>
              <div className="form3__middle">
                <TextField id="standard-basic" label="Enter your email" variant="standard" />
                <TextField id="standard-basic" label="Enter your email" variant="standard" />
                <TextField id="standard-basic" label="Enter your email" variant="standard" />
              </div>
              <div className="form3__bottom">
                <TextField id="standard-basic" label="Enter your email" variant="standard" />
                <TextField id="standard-basic" label="Enter your email" variant="standard" />
              </div>
            </form>
          </div>
          <div className="profile__top-right">
            <h3 className="profile__top-right-h3">
              My accounts
            </h3>
            <form id="form4" className="form4">
              <div className="form4__slack">

              </div>
              <div className="form4__github"></div>
            </form>
          </div>
        </div>
        <div className="profile__bottom">
        <h3 className="profile__top-bottom-h3">Work logs</h3>
        </div>
      </div>
    </section>
  )
}
