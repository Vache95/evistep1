import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import TokenService from '../../../helpers/TokenService';
// import  {loginWithCode } from "../../../helpers/auth-service";
import { NotificationManager} from 'react-notifications';
import axios from "axios";
const initialState = {
  loading: false,
  users:[],
  token: null,
  error: '',
}
  const loginCodeSlice = createSlice({
    name: 'loginCodeSlice',
    initialState,
    reducers:{
       clearThunk:(state,action)=>{
            state.token = action.payload
       },
    },
    extraReducers: builder => {
      builder.addCase(loginCodeThunk.pending, (state) => {
       state.loading = true
      })
      builder.addCase(loginCodeThunk.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
        state.token = action.payload.jwt.token
        state.error = ''
      })
      builder.addCase(loginCodeThunk.rejected, (state, action) => {
        state.loading = false
        state.users = []
        state.error = action.error.message
      })
    }
  })
  
  export default loginCodeSlice.reducer
  export const {clearThunk} = loginCodeSlice.actions

// * logincode thunk===========================================================================

  export const loginCodeThunk = createAsyncThunk('logincode', (obj)=>{  
      // const response  = await loginWithCode({
      //   "email":obj.email, 
      //   "code": obj.code, 
      //   "languageID": 1   
      //   })
      //    const logemail = await response.data;
      //    TokenService.setLocalAccessToken(logemail.jwt.token)
      //    TokenService.setLocalRefreshToken(logemail.jwt.refreshToken)
      //    return logemail
  
      const test =  axios.post("https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/LoginWithCode",{
          "email":obj.email, 
          "code": obj.code, 
          "languageID": 1  
        }).then((response)=>{
              NotificationManager.success("Success","",1000)
              return response 
        }).then((response)=>{
          const logemail = response.data;
          TokenService.setLocalAccessToken(logemail.jwt.token)
          TokenService.setLocalRefreshToken(logemail.jwt.refreshToken)
          return logemail
        })
        .catch((err)=> {NotificationManager.error('Error message', 'Click me!', 5000,)})
      return test;
  })