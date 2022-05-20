import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import TokenService from '../../helpers/TokenService'
import './home.scss'
import Homeim from '../../assets/images/Home/imageh.jpg'
import { useDispatch } from 'react-redux'
import { clearThunk } from '../../store/auth/LoginCode/LoginCode'
import { clearEmail } from '../../store/auth/LoginEmail/LoginEmail'

export default function Home() {
    const dispatch = useDispatch()
    const local = () =>{
        TokenService.removeLocalAccessToken()
        TokenService.removeLocalRefreshToken()
        dispatch(clearThunk())
        dispatch(clearEmail())
    }

    return (
        <section className="home">
     
            <div className="home__content">
                <div className="home__content-img">
                    <img src={Homeim} alt="" />
                </div>
                <div className="home__content-texts">
                    <h1>Coming soon</h1>
                    <NavLink to="/profile"><span>edit my profile and my worklog</span></NavLink>
                        <span onClick={local}>
                            Logout
                        </span>
             
                </div>
            </div>
        </section>
    )
}
