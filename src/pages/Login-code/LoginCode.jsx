import React from 'react';
import './logincode.scss';
// import { TextField } from '@mui/material';
import Close from '../../assets/images/LoginCode/Vector (5).svg'
export default function LoginCode() {
  return (
    <div className="login__right">
      <div className="login__right-content">
        <h3 className="login__right-h3">Login</h3>
        <p className="login__right-text1">To finalize your verification, please enter the
          code that has been sent to your email address / SMS</p>
        <form id='form2' className="form">
          <div className="form__img">
            <img src={Close} alt="" />
          </div>
          <div className="form1__input">
           <input type="text"  maxLength="1"/>
           <input type="text"  maxLength="1"/>
           <input type="text"  maxLength="1"/>
           <input type="text"  maxLength="1"/>
           <input type="text"  maxLength="1"/>
           <input type="text"  maxLength="1"/>
          </div>
          <div className="form1__button">
            <button type='submit'>Submit</button>
          </div>
        </form>
        <p className="login__right-text2">
        If you do not receive the confirmation message within a few minutes,
         please check your Spam or Bulk E-Mail folder
        </p>
      </div>
    </div>
  )
}
