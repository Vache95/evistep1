import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { TextField } from '@mui/material';
import { loginEmailThunk } from '../../../../store/auth/LoginEmail/LoginEmail';
import './loginemail.scss'

export default React.memo(function LoginEmail() {

    const user = useSelector(state => state.loginemail) 
    const dispatch = useDispatch()
    const navigate = useNavigate()

  //* useForm========================================================
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onBlur'
    })

 //* handelLogin========================================================
    const  handleLogin = (data) => {   
        dispatch(loginEmailThunk(data.email)) 
     
    } 

//* navigetion loginCode========================================================
    //  useEffect(()=>{
    //     if(user.users === "done"){
    //         navigate("/logincode") 
    //       }
    //  },[])

     if(user.users === "done"){
        navigate("/logincode") 
      }
    return (
        <section className='login' >
        <div className="login__right">
            <div className="login__right-content">
                <h3 className="login__right-h3">Login</h3>
                <form id='form1' className="form" onSubmit={handleSubmit(handleLogin)}>
                    <div className="form1email__input">
 
                           
                           <TextField 
                           {
                               ...register('email', {
                                   required: true,
                                   pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                               })}
                           id="standard-basic"
                           label="Enter your email"
                           variant="standard"
                        
           
                              
                             />   
                       {
                           user?.error ? <span>Error Incorrect entry.</span> : null
                       }
                
                    </div>
                    <div className="form1__button">
                                 <button type='submit'>Send code</button>                
                    </div>
                </form>
            </div>
        </div>
     
    </section>
        
    )
}
)