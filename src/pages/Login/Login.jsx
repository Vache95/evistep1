import React from 'react'
import './login.scss'
import Logimg from '../../assets/images/Login/image 1 (1).png'
import LoginEmail from '../Login-email/LoginEmail'
import LoginCode from '../Login-code/LoginCode'
 import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <section className='login' >
            <div className="login__left">
                <div className="login__left-content">
                    <Link to="/">
                        <h2 className="login__left-h2">
                            Playground
                        </h2>
                    </Link>
                    <div className="login__left-img">
                        <img src={Logimg} alt="" />
                    </div>
                </div>
            </div>

            {/* <LoginEmail/> */}
            <LoginCode />

        </section>
    )
}
