import React from 'react'
import { TextField } from '@mui/material';
// import { Link } from 'react-router-dom'
import './loginemail.scss'
export default function LoginEmail() {
    return (
        <div className="login__right">
            <div className="login__right-content">
                <h3 className="login__right-h3">Login</h3>
                <form id='form1' className="form">
                    <div className="form1__input">
                    <TextField id="standard-basic" label="Enter your email" variant="standard" />
                        {/* <input type="text" placeholder='Enter your email' /> */}
                    </div>
                    <div className="form1__button">
                            <button type='submit'>Send code</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
