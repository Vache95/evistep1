import React from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import 'react-notifications/lib/notifications.css';
import Closeimg from '../../../../assets/images/LoginCode/Vector.svg';

import { loginCodeThunk } from '../../../../store/auth/LoginCode/LoginCode';
import './logincode.scss';

export default React.memo(function LoginCode() {
  const user3 = useSelector(state => state.loginemail.email)
  const dispatch = useDispatch()

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
    mode: 'onSubmit'
  })

 //* handelLogin========================================================
  const handleLogin = (data) => {
    let value = Object.values(data)
    let join = value.join("")
    let num = +join
    let obj = {
      code: num,
      email: user3
    }
    dispatch(loginCodeThunk(obj))
  
  }

 //* handelFocus========================================================
  const handleFocus = (e) => {
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 1)
  }


  return (
    <section className='login' >
      <div className="login__right">
        <div className="login__right-content">
          <h3 className="login__right-h3">Login</h3>
          <p className="login__right-text1">To finalize your verification, please enter the
            code that has been sent to your email address / SMS</p>
          <form id='form2' className="form" onSubmit={handleSubmit(handleLogin)}>
            <div className="form__img">
              <img src={Closeimg} alt="" onClick={() => {
                reset()
              }} />
            </div>
            <div className="form1__input">
              <input   {
                ...register('number1', {
                  required: true,
                 

                })}
                type="number" onChange={handleFocus} className={errors?.number1 ? "act" : null} />
              <input   {
                ...register('number2', {
                  required: true,
                  max:1,
                  min:1


                })}
                type="number" onChange={handleFocus} className={errors?.number2 ? "act" : null} />
              <input   {
                ...register('number3', {
                  required: true,
                  max:1,
                  min:1
                  

                })}
                type="number" onChange={handleFocus} className={errors?.number3 ? "act" : null} />
              <input   {
                ...register('number4', {
                  required: true,
                  max:1,
                  min:1
                

                })}
                type="number" onChange={handleFocus} className={errors?.number4 ? "act" : null} />
              <input   {
                ...register('number5', {
                  required: true,
                  max:1,
                  min:1
                 

                })}
                type="number" onChange={handleFocus} className={errors?.number5 ? "act" : null} />
              <input   {
                ...register('number6', {
                  required: true,
                  max:1,
                  min:1
                 

                })}
                type="number" onChange={handleFocus} className={errors?.number6 ? "act" : null} />
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
    </section>

  )
})
