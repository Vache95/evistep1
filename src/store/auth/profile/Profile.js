import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { currentAppUser } from "../../../helpers/auth-service";

  const profileSlice = createSlice({
    name: 'profileslice',
    initialState:{
      loading: false,
      users:[],
      error: '',
    },
   
    extraReducers: builder => {
      builder
      .addCase(profileThunk.pending, state => {
        state.loading = true
      })
      builder
      .addCase(profileThunk.fulfilled, (state, action) => {
        state.loading = false,
        state.users = action.payload,
        state.error = ''
      })
      builder
      .addCase(profileThunk.rejected, (state, action) => {
        state.loading = false
        state.users = []
        state.error = action.error.message
      })
    }
  })
  
  export default profileSlice.reducer
  
  // profile thunk==============================================================
  export const profileThunk = createAsyncThunk('profile', async function(){ 
       const response  = await currentAppUser();
       const logemail = await response.data;
       console.log(logemail)
      return logemail
  })



  