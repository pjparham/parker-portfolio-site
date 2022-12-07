import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { css } from '@emotion/css'
import { send } from 'emailjs-com';

export default function ContactMe() {
    const [value, setValue] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    function handleChange(e){
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        })
    }
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     send(
    //       'SERVICE ID',
    //       'TEMPLATE ID',
    //       toSend,
    //       'User ID'
    //     )
    //       .then((response) => {
    //         console.log('SUCCESS!', response.status, response.text);
    //       })
    //       .catch((err) => {
    //         console.log('FAILED...', err);
    //       });
    //   };

    function handleSubmit(){
        console.log(value)
        send(
            'service_i2rfgj9',
            'template_dl5ta0b',
            value,
            'wimlVlaqMA5lWMJ3a'
        )
        .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                  })
                  .catch((err) => {
                    console.log('FAILED...', err);
                  });
        setValue({
            name: "",
            email: "",
            company: "",
            message: "",
        })
    }

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
                name="name"
                value={value.name}
                onChange={handleChange}
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
                name="email"
                value={value.email}
                onChange={handleChange}
                className={css`
                background-color: white;
                `}
                /><br/>
                 <TextField
                id="outlined-textarea"
                label="Company"
                placeholder="Company"
                variant="filled"
                name="company"
                value={value.company}
                onChange={handleChange}
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
                placeholder="Please include additional info here. I look forward to connecting with you!"
                name="message"
                value={value.message}
                onChange={handleChange}
                className={css`
                background-color: white;
                `}
                />
            </div>
                <div className="contact-button-container">
                    <div onClick={handleSubmit} className="contact-button">Submit</div>
                </div>
            </Box>
        </div>
      );
    }
