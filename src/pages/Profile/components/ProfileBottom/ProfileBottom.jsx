import React from 'react'
import TextField from '@mui/material/TextField';
import { TimePiker} from '../../../../components'
import { useDispatch,useSelector } from 'react-redux';
import { deletitem1,additem1 } from '../../../../store/features/Todoslice/todoSlice1';
import { deletitem2,additem2 } from '../../../../store/features/Todoslice/todoSlice2';
import { deletitem3,additem3 } from '../../../../store/features/Todoslice/todoSlice3';
import { deletitem4,additem4 } from '../../../../store/features/Todoslice/todoSlice4';
import { deletitem5,additem5 } from '../../../../store/features/Todoslice/todoSlice5';
import { deletitem6,additem6 } from '../../../../store/features/Todoslice/todoSlice6';



export default function ProfileBottom() {
  
   const time1 = useSelector((state) => state.counter1.form1)
   const time2 = useSelector((state) => state.counter2.form2)
   const time3 = useSelector((state) => state.counter3.form3)
   const time4 = useSelector((state) => state.counter4.form4)
   const time5 = useSelector((state) => state.counter5.form5)
   const time6 = useSelector((state) => state.counter6.form6)
   const dispatch = useDispatch()

  return (
   <>
       <div className="profile__bottom">
        <h3 className="profile__top-bottom-h3">Work logs</h3>
        <div className="profile__bottom-content">
        <form id='form4' className="form4">
        <TextField id="standard-basic" label="Sunday" variant="standard" />
              <div className="profile__bottom1">

               {
                 time1.map((elem,index)=>(
                  <div className="profile__bottom1-item" key={index}>
                     <TimePiker/> 
                    <span onClick={()=>{
                       dispatch(deletitem1(elem.id))
                  }}>X</span></div>
                 ))
               }
               
            </div>
            <span className='profile__bottom1-span'  onClick={()=>{
                dispatch(additem1())
            }}>+</span>
            </form>
            <form id='form4' className="form4">
            <TextField id="standard-basic" label="Monday" variant="standard" />
              <div className="profile__bottom2">
                {
                 time2.map((elem,index)=>(
                  <div className="profile__bottom2-item" key={index}>
                 <TimePiker/>
                    <span onClick={()=>{
                      dispatch(deletitem2(elem.id))
                  }}>X</span></div>
                 ))
               }  
            </div>
            <span className='profile__bottom1-span' onClick={()=>{
               dispatch(additem2())
            }}>+</span>
            </form>
            <form id='form4' className="form4">
            <TextField id="standard-basic" label="Tuesday" variant="standard" />
              <div className="profile__bottom3">
              {
                 time3.map((elem,index)=>(
                  <div className="profile__bottom3-item" key={index}>
                    <TimePiker/>
                  <span 
                  onClick={()=>{
                      dispatch(deletitem3(elem.id))
                  }}
                  >X</span></div>
                 ))
               } 
            </div>
            <span className='profile__bottom1-span'
            onClick={()=>{
                    dispatch(additem3())
            }}>+</span>
            </form>
            <form id='form4' className="form4">
            <TextField id="standard-basic" label="Wednesday" variant="standard" />
              <div className="profile__bottom4">
               {
                 time4.map((elem,index)=>(
                  <div className="profile__bottom4-item" key={index}>
                     <TimePiker/>
                    <span
                  onClick={()=>{
                     dispatch(deletitem4(elem.id))
                  }}
                  >X</span></div>
                 ))
               } 
            </div>
            <span className='profile__bottom1-span'
            onClick={()=>{
               dispatch(additem4())
            }}
            >+</span>
            </form>
            <form id='form4' className="form4">
            <TextField id="standard-basic" label="Thursday" variant="standard" />
              <div className="profile__bottom5">
              {
                 time5.map((elem,index)=>(
                  <div className="profile__bottom5-item" key={index}>
                    <TimePiker/>
                    <span
                  onClick={()=>{
                    dispatch(deletitem5(elem.id))
                  }}
                  >X</span></div>
                 ))
               } 
            </div>
            <span className='profile__bottom1-span'
            onClick={()=>{
                    dispatch(additem5())
            }}
            >+</span>
            </form>
            <form id='form4' className="form4">
            <TextField id="standard-basic" label="Friday" variant="standard" />
              <div className="profile__bottom6">
              {
                 time6.map((elem,index)=>(
                  <div className="profile__bottom6-item" key={index}>
                    <TimePiker/>
                    <span
                  onClick={()=>{
                     dispatch(deletitem6(elem.id))
                  }}
                  >X</span></div>
                 ))
               } 
            </div>
            <span className='profile__bottom1-span'
            onClick={()=>{
                dispatch(additem6())
            }}
            >+</span>
            </form>  
        </div>
        </div>
   </>
  )
}
