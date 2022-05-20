import React from 'react'
import Logimg from '../../assets/images/Login/image 1 (1).png'
import { Link} from 'react-router-dom';
const LeftSide = () => {
  return (
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
  )
}

export default LeftSide