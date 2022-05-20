import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  form1:[
               {
                  id:Math.random(),
               }
           ],
}

export const todoSlice1 = createSlice({
  name: 'todo1',
  initialState,
  reducers: {
     additem1: (state) => {
       state.form1=[
               ...state.form1,
                          {
                     id:Math.random()
                    }
                   ]
     },
    deletitem1: (state,action)=>{
               console.log(action.payload)
                     let copy = [...state.form1]
                      state.form1 = copy.filter((elem,index)=> elem.id !== action.payload)

                  }
  },

})


 export const {additem1,deletitem1} = todoSlice1.actions
 export default todoSlice1.reducer