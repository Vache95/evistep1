import React from 'react'
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers';

export default function TimePiker() {
  const [value, setValue] = React.useState(null);
  const [value2, setValue2] = React.useState(null);
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="09"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      /> 
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="12"
        value={value2}
        onChange={(newValue) => {
          setValue2(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      /> 
    </LocalizationProvider>
    </>
  )
}
