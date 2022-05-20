import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { loginGeneratePassword } from "../../../helpers/auth-service";

  const loginEmailSlice = createSlice({
    name: 'loginemailslice',
    initialState:{
      loading: false,
      users:[],
      error: '',
      email: ''
    },
    reducers:{
      clearEmail:(state,action)=>{
         state.email = action.payload
      }
    },
    extraReducers: builder => {

      builder.addCase(loginEmailThunk.pending, state => {
        state.loading = true
      })

      builder.addCase(loginEmailThunk.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
        state.email = action.meta.arg
        state.error = ''
      })

      builder.addCase(loginEmailThunk.rejected, (state, action) => {
        state.loading = false
        state.users = []
        state.error = action.error.message
      })
      
    }
  })
  export const {clearEmail} = loginEmailSlice.actions
  export default loginEmailSlice.reducer
  // * loginemail thunk==================================================================
  export const loginEmailThunk = createAsyncThunk('loginemail', async function(data){
       const response  = await loginGeneratePassword(
          {
            "email": data, 
            "languageID": 1   
          }
       )
       const logemail = await response.data;
       return logemail
  })

  