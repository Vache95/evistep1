import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const initialState= {
  form4:[
               {
                  id:Math.random(),
               },
               {
                id:Math.random(),
             }
           ],
}

export const todoSlice4 = createSlice({
  name: 'todo4',
  initialState,
  reducers: {
     additem4: (state) => {
       state.form4=[
               ...state.form4,
                          {
                     id:Math.random()
                    }
                   ]
     },
    deletitem4: (state,action)=>{
               console.log(action.payload)
                     let copy = [...state.form4]
                      state.form4 = copy.filter((elem,index)=> elem.id !== action.payload)

                  }
  },
})


 export const {additem4,deletitem4} = todoSlice4.actions
 export default todoSlice4.reducer