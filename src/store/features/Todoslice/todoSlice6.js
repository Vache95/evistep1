import { createSlice} from '@reduxjs/toolkit'

const initialState= {
  form6:[
               {
                  id:Math.random(),
               }
           ],
}

export const todoSlice6 = createSlice({
  name: 'todo6',
  initialState,
  reducers: {
     additem6: (state) => {
       state.form6=[
               ...state.form6,
                          {
                     id:Math.random()
                    }
                   ]
     },
    deletitem6: (state,action)=>{
               console.log(action.payload)
                     let copy = [...state.form6]
                      state.form6 = copy.filter((elem,index)=> elem.id !== action.payload)

                  }
  },
})


 export const {additem6,deletitem6} = todoSlice6.actions
 export default todoSlice6.reducer