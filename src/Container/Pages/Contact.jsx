import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, FormControl, Grid, outlinedInputClasses, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.scss'; // Ensure the image is properly referenced in the SCSS file
import { ThemeContext } from '../Layouts/GeneralLayout';
// import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { purple } from '@mui/material/colors';
// import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LoadingIndicator from '../Common/LoadingIndicator';
import { contact } from '../../Components/Constants';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { Label } from '@mui/icons-material';
const SubmitButton = styled(Button)(({ theme }) => ({
    color: theme.textColor,
    backgroundColor: "#fff",
    '&:hover': {
      backgroundColor: theme.headingColor,
      color:"#fff"
    },
  }));

  const customTheme = (outerTheme,theme) =>
    createTheme({
      palette: {
        mode: outerTheme.palette.mode,
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              '--TextField-brandBorderColor': theme.textColor,
              '--TextField-brandBorderHoverColor': theme.textColor,
              '--TextField-brandBorderFocusedColor': theme.textColor,
              '& label.Mui-focused': {
                color: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        // MuiOutlinedInput: {
        //   styleOverrides: {
        //     notchedOutline: {
        //       borderColor: 'var(--TextField-brandBorderColor)',
        //     },
        //     root: {
        //       [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        //         borderColor: 'var(--TextField-brandBorderHoverColor)',
        //       },
        //       [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
        //         borderColor: 'var(--TextField-brandBorderFocusedColor)',
        //       },
        //     },
        //   },
        // },
        // MuiFilledInput: {
        //   styleOverrides: {
        //     root: {
        //       '&::before, &::after': {
        //         borderBottom: '2px solid var(--TextField-brandBorderColor)',
        //       },
        //       '&:hover:not(.Mui-disabled, .Mui-error):before': {
        //         borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
        //       },
        //       '&.Mui-focused:after': {
        //         borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
        //       },
        //     },
        //   },
        // },
        MuiInput: {
          styleOverrides: {
            root: {
              '&::before': {
                borderBottom: `2px solid ${theme.textColor}`,
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom: `2px solid ${theme.textColor}`,
              },
              '&.Mui-focused:after': {
                borderBottom: `1px solid ${theme.textColor}`,
              },
            },
          },
        },
        MuiFormLabel: {
          styleOverrides: {
            root: {
             "color":theme.textColor
            },
          },
        },
        MuiInputBase:{
          styleOverrides: {
            root: {
                "color":theme.headingColor
            },
          },
        }
      },
    });

  function Contact() {
      const { theme } = useContext(ThemeContext);
      const [animate, setAnimate] = useState(false);
      const [error, setError] = useState(['firstNameError', 'lastNameError','emailError','phoneError','messageError']);
      const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:""
      })
      const [open, setOpen] = React.useState(false);
      const [submit, setSubmit] = React.useState(false);

      const handleClick = () => {
        setOpen(true)
      };
    
      const handleClose = () =>{ 
        setOpen(false);
      };
    
      const outerTheme = useTheme();
      useEffect(() => {
          setTimeout(() => setAnimate(true), 100);
      }, []);

          
      const onSubmit = async (event) => {
        event.preventDefault();
        if(error.length > 0){
          for(let i=0; i< error.length; i++){
            document.getElementById(error[i]).innerText = error[i].replace('Error', ' ').slice(0,1).toUpperCase()+  error[i].replace('Error', ' ').slice(1, error[i].replace('Error', ' ').length) +"is Required";
          }
          return;
        }
        setSubmit(true)

        const formData = new FormData(event.target);

        formData.append("access_key", "e5a9d894-4468-42e6-b8cb-9b3309a5ef5a");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          event.target.reset();
          setOpen(true);
          setSubmit(false)
        } else {
          console.log("Error", data);
          setOpen(true);
          setSubmit(false)
        }
      };

      const handleChange = (type,val) => {
          document.getElementById(type+"Error").innerText = "";
          setData({...data,[type]:val});
          if(val != ""){
            setError(error.filter((item)=> item != type+"Error"));
          }else{
            setError([...error,type+"Error"]);
          }
      }

      return (
          <Box alignItems="center" className="home-container">
            {submit ? 
                <LoadingIndicator message='Submitting...'/>
                :
              <Box height={600} className="pl-4"
              sx={{ mb: { xs: "400px", md:0 } }}
                style={{ opacity: animate ? 1 : 0, transition: 'opacity 1s ease-in-out' }} // Apply opacity transition
              >
                  <Snackbar open={open} 
                      anchorOrigin={{ vertical :'top' , horizontal: 'right' }}
                      autoHideDuration={1200}
                      onClose={handleClose}>
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      variant="filled"
                      sx={{ width: '100%' }}
                    >
                      Data submit Successfully.
                    </Alert>
                  </Snackbar>
                  <Grid container pt={2}>
                      <Grid mt={12} item xs={12} md={theme.type === "light" ? 6 : 6}>
                        <Box sx={{justifyItems:"center", color:theme.textColor}} className={`page-heading ${animate ? 'animate' : ''}`}>
                            <Typography variant="h4" sx={{color:theme.headingColor}}>⎯ Contact Me</Typography>
                            <Box sx={{color:theme.textColor}} className="my-5">
                                <Typography mb={2} color={theme.subHeadingColor}>Ready to embark on an amazing journey together? Get in touch!</Typography>
                                <Typography><WhatsAppIcon  sx={{cursor:"pointer", color:theme.headingColor}}/>  9518055232</Typography>
                                <Typography><EmailIcon  sx={{cursor:"pointer", color:theme.headingColor}}/>  tajindersohi1@gmail.com</Typography>
                                <Typography><LocationOnIcon  sx={{cursor:"pointer", color:theme.headingColor}}/>  Shahabad(M.), Haryana</Typography>
                            </Box>
                            		{/* {contact.map((item, key) => (
                                    <Box className="flex items-center gap-2 mb-2" key={key}>
                                      {item.icon}
                                      <Typography variant="body1" {...item.props}>
                                        {item.label}
                                      </Typography>
                                    </Box>
                                  ))} */}
                        </Box>
                      </Grid>

                      <Grid mt={12} item xs={12} md={6}>
                          <Box width={'90%'} margin={'auto'}>
                          <form onSubmit={onSubmit}>
                              <ThemeProvider theme={customTheme(outerTheme, theme)}>
                                <Box display={'flex'} gap={8} >
                                <FormControl defaultValue="" sx={{ width: '300px' }} required>
                                  <TextField
                                      sx={{ color: theme.textColor }}
                                      id="standard-basic"
                                      label={<span>First Name <span style={{ color: 'red' }}>*</span></span>}
                                      onChange={(e) => handleChange("firstName", e.target.value)}
                                      value={data.firstName}
                                      name="firstname"
                                      variant="standard"
                                  />
                                  <p id="firstNameError" className='text-danger' style={{ color: "red" }}></p>
                              </FormControl>

                                <FormControl defaultValue="" sx={{width:'300px'}} required>
                                    <TextField id="standard-basic" 
                                    label={<span>Last Name <span style={{ color: 'red' }}>*</span></span>}
                                    name="lastname" value={data.lastName} onChange={(e)=>handleChange("lastName",e.target.value)} variant="standard" />
                                    <p id="lastNameError" className='text-danger' style={{color:"red"}}></p>
                                </FormControl>
                                </Box>
                                <Box display={'flex'} gap={8} mt={5}>
                                <FormControl defaultValue="" sx={{width:'300px'}} required>
                                    <TextField id="standard-basic" 
                                    label={<span>Email<span style={{ color: 'red' }}>*</span></span>}
                                    name="email" value={data.email} onChange={(e)=>handleChange("email",e.target.value)} variant="standard" />
                                    <p id="emailError" className='text-danger'style={{color:"red"}}></p>
                                </FormControl>
                                <FormControl defaultValue="" sx={{width:'300px'}} required>
                                    <TextField id="standard-basic" 
                                    label={<span>Phone<span style={{ color: 'red' }}>*</span></span>}
                                    name="phone" value={data.phone} onChange={(e)=>handleChange("phone",e.target.value)} variant="standard" />
                                    <p id="phoneError" className='text-danger' style={{color:"red"}}></p>
                                </FormControl>
                                </Box>
                                <Box mt={5}>
                                    <FormControl defaultValue="" sx={{width:'300px'}}required>
                                        <TextField id="standard-basic" 
                                        label={<span>Leave a message<span style={{ color: 'red' }}>*</span></span>}
                                        name="message" onChange={(e)=>handleChange("message",e.target.value)} value={data.message} variant="standard" sx={{width:"100%"}}/>
                                        <p id="messageError" className='text-danger' style={{color:"red"}}></p>
                                    </FormControl>
                                </Box>
                                <Box mt={5} textAlign={'end'}>
                                    <SubmitButton type="submit" theme={theme} variant="outlined" mt={5} sx={{color:'black', border:'1px solid black'}}>Submit</SubmitButton>
                                </Box>
                              </ThemeProvider>
                              </form>
                          </Box>
                      </Grid>
                  </Grid>
              </Box>
            }
          </Box>
      );
  }

export default Contact;

