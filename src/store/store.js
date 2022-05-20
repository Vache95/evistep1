import {configureStore} from '@reduxjs/toolkit';
import emailreducer from './auth/LoginEmail/LoginEmail'
import codereducer from './auth/LoginCode/LoginCode'
import profilereducer from './auth/profile/Profile'
import todoSlice1 from './features/Todoslice/todoSlice1';
import todoSlice2 from './features/Todoslice/todoSlice2';
import todoSlice3 from './features/Todoslice/todoSlice3';
import todoSlice4 from './features/Todoslice/todoSlice4';
import todoSlice5 from './features/Todoslice/todoSlice5';
import todoSlice6 from './features/Todoslice/todoSlice6';

const store = configureStore({
  reducer:{
    profiledata:profilereducer,
    logincode:codereducer,
    loginemail:emailreducer,
    counter1:todoSlice1,
    counter2:todoSlice2,
    counter3:todoSlice3,
    counter4:todoSlice4,
    counter5:todoSlice5,
    counter6:todoSlice6,
  }
})

export default store