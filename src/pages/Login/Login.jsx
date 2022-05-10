import React from 'react'
import './login.scss'
import Logimg from '../../assets/images/Login/image 1 (1).png'
// import {LoginEemail} from './pages'
export default function Login() {
    return (
        <section className='login' >
            <div className="login__left">
                <div className="login__left-content">
                    <h2 className="login__left-h2">
                        Playground
                    </h2>
                    <div className="login__left-img">
                        <img src={Logimg} alt="" />
                    </div>
                </div>
            </div>
           {/* <LoginCode/>
           <LoginEmail/> */}
        </section>
    )
}
