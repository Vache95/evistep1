import React, { useState } from 'react'
import './home.scss'
import Homeim from '../../assets/images/Home/image 1 (1).jpg'
import { Link, NavLink } from 'react-router-dom'
import { Header} from '../../components'
export default function Home() {
    return (
        <section className="home">
                     <Header/> 
            <div className="home__content">
                <div className="home__content-img">
                    <img src={Homeim} alt="" />
                </div>
                <div className="home__content-texts">
                    <h1>Coming soon</h1>
                    <NavLink to="/profile"><span>edit my profile and my worklog</span></NavLink>
                    <NavLink to="/login"><span>Logout</span></NavLink>
                </div>
            </div>
        </section>
    )
}
