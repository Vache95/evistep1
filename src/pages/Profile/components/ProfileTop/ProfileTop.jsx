import React from 'react'
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl'; 
import Sl from '../../../../assets/images/Profile/slack.svg'
import Git from '../../../../assets/images/Profile/github.svg'


export default function ProfileTop({user}) {
  const [value, setValue] = React.useState(null);

  return (
    <> <div className="profile__top">
    <div className="profile__top-left">
      <h3 className="profile__top-left-h3">General Info</h3>
      <form id='form3' className="form3">
        <div className="form3__top">
          <TextField id="standard-basic" label={user.users.firstName ? user.users.firstName :"firstName"} variant="standard" />
          <TextField id="standard-basic" label={user.users.lastName ? user.users.lastName :"lastName"} variant="standard" />
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DesktopDatePicker
              label="Date of birth"
              value={value}
              minDate={new Date('2017-01-01')}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
           </LocalizationProvider>
        </div>
        <div className="form3__middle">
          <TextField id="standard-basic"  label={user.users.email ? user.users.email  :"Email"} variant="standard" />
          <TextField id="standard-basic" label="Personal Email" variant="standard" />
          <TextField id="standard-basic" label={user.users.mobilePhone ? user.users.mobilePhone : "Mobile Phone"} variant="standard" />
        </div>
        <div className="form3__bottom">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label={user.users.startDate}
              value={value}
              minDate={new Date('2017-01-01')}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
           </LocalizationProvider>
          <TextField id="standard-basic" label={user.users.absences ? user.users.absences : "Absences"} variant="standard" />
              <div className="form3__bottom-chekbox">
               
                <input type="checkbox" defaultChecked/>
                <label htmlFor="ch1">
                Core team member
                </label>
              </div>
              </div>
      </form>
    </div>

    <div className="profile__top-right">
      <h3 className="profile__top-right-h3">
        My accounts
      </h3>
      <form id="form4" className="form4">
        <div className="form4__slack">
          <div className="form4__slack-img">
            <img src={Sl} alt="" />
          </div>         
          <FormControl variant="standard"> 
            <Input
              id="input-with-icon-adornment"
              placeholder='Enter you slack user name'
            />
          </FormControl>
        </div>
        <div className="form4__github">
        <div className="form4__github-img">
            <img src={Git} alt="" />
          </div>
        <FormControl variant="standard">
          <Input
            id="input-with-icon-adornment"
            placeholder='Enter your github user name'
          />
        </FormControl>
        </div>
      </form>
    </div>
  </div></>
  )
}
