import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { css } from '@emotion/css'

export default function ContactMe() {
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
        setValue(event.target.value);
      };
      console.log(value)
      return (
        <div className="pages contact">
            <h1>Contact Me:</h1>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            className="contact-form">
            <div>
            <TextField
                id="outlined-textarea"
                label="Name"
                placeholder="Name"
                variant="filled"
                className={css`
                background-color: white;
                `}
                /><br/>
                <TextField
                id="outlined-textarea"
                label="E-Mail"
                placeholder="E-Mail"
                variant="filled"
                className={css`
                background-color: white;
                `}
                /><br/>
                 <TextField
                id="outlined-textarea"
                label="Company"
                placeholder="Company"
                variant="filled"
                className={css`
                background-color: white;
                `}
                /><br/>
                <TextField
                id="outlined-multiline-static"
                label="Additional Info"
                variant="filled"
                multiline
                rows={4}
                defaultValue="Please include additional info here. I look forward to connecting with you!"
                className={css`
                background-color: white;
                `}
                />
            </div>
                <div className="contact-button-container">
                    <div className="contact-button">Submit</div>
                </div>
            </Box>
        </div>
      );
    }
