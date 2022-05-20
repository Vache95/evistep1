import { createSlice} from '@reduxjs/toolkit'

const initialState= {
  form3:[
               {
                  id:Math.random(),
               },
               {
                id:Math.random(),
             }
           ],
}

export const todoSlice3 = createSlice({
  name: 'todo3',
  initialState,
  reducers: {
     additem3: (state) => {
       state.form3=[
               ...state.form3,
                          {
                     id:Math.random()
                    }
                   ]
     },
    deletitem3: (state,action)=>{
               console.log(action.payload)
                     let copy = [...state.form3]
                      state.form3 = copy.filter((elem,index)=> elem.id !== action.payload)

                  }
  },
})


 export const {additem3,deletitem3} = todoSlice3.actions
 export default todoSlice3.reducer