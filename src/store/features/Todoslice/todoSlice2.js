import { createSlice} from '@reduxjs/toolkit'

const initialState= {
  form2:[
               {
                  id:Math.random(),
               },
               {
                id:Math.random(),
              }
           ],
}

export const todoSlice2 = createSlice({
  name: 'todo2',
  initialState,
  reducers: {
     additem2: (state) => {
       state.form2=[
               ...state.form2,
                          {
                     id:Math.random()
                    }
                   ]
     },
    deletitem2: (state,action)=>{
               console.log(action.payload)
                     let copy = [...state.form2]
                      state.form2 = copy.filter((elem,index)=> elem.id !== action.payload)

                  }
  },
})


 export const {additem2,deletitem2} = todoSlice2.actions
 export default todoSlice2.reducer