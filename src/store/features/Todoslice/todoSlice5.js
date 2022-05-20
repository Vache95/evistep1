import { createSlice} from '@reduxjs/toolkit'

const initialState= {
  form5:[
               {
                  id:Math.random(),
               },
                 {
                  id:Math.random(),
               }
           ],
}

export const todoSlice5 = createSlice({
  name: 'todo5',
  initialState,
  reducers: {
     additem5: (state) => {
       state.form5=[
               ...state.form5,
                          {
                     id:Math.random()
                    }
                   ]
     },
    deletitem5: (state,action)=>{
               console.log(action.payload)
                     let copy = [...state.form5]
                      state.form5 = copy.filter((elem,index)=> elem.id !== action.payload)

                  }
  },
})


 export const {additem5,deletitem5} = todoSlice5.actions
 export default todoSlice5.reducer