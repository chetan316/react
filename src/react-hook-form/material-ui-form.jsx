// import React, { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import {
//     Container, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Button, Checkbox, CssBaseline,
//     Avatar, Typography, Radio, makeStyles
// } from '@material-ui/core';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { yupResolver } from '@hookform/resolvers';
// import * as yup from 'yup';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2)
//     }
// }));

// const defaultValues = {
//     testCheckBox: false,
//     email: "",
//     password: ""
// };
// const formValidationSchema = yup.object().shape({
//     email: yup.string().required('EmailId is required'),
//     password: yup.string().required().min(2),
//     remember: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
//     gender: yup.string().oneOf(["male", "female"]).required()
// })

// const MaterialUiLogin = () => {
//     const classes = useStyles();
//     const [data, setData] = useState(null);
//     const { register, handleSubmit, errors, control } = useForm({
//         //resolver: yupResolver(formValidationSchema)
//         defaultValues
//     });
//     return (
//         <>
//             <Container componet="main" maxWidth="xs">
//                 <CssBaseline />
//                 <div className={classes.paper}>
//                     <Avatar className={classes.avatar}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Sign in
//                 </Typography>
//                     <form className={classes.form} onSubmit={handleSubmit(data => setData(data))}>
//                         <TextField variant="outlined" margin="normal" fullWidth
//                             label="Email Address"
//                             autoFocus
//                             inputRef={register}
//                             name="email"
//                             autoComplete="off"
//                         ></TextField>
//                         {errors.email && <p>{errors.email.message}</p>}
//                         <TextField variant="outlined" margin="normal" fullWidth
//                             label="Password"
//                             inputRef={register}
//                             name="password"
//                             type="password">
//                         </TextField>
//                         {errors.password && <p>{errors.password.message}</p>}
//                         {/* <Controller
//                         as={Checkbox}
//                         name="Checkbox"
//                         type="checkbox"
//                         control={control}
//                     /> */}
//                         {/* <FormControlLabel

//                             control={
//                                 <Controller as={Checkbox} control={control} name="remember" color="primary"
//                                     defaultValue={false}
//                                 />
//                             }
//                             // control={
//                             //     <Checkbox inputRef={register} name="remember" color="primary" defaultValue={false} />
//                             // }
//                             label="Accept Terms and Conditions"
//                         /> */}
//                         <section>
//                             <FormLabel>MUI Checkbox</FormLabel>
//                             <Controller
//                                 as={<Checkbox />}
//                                 name="testCheckBox"
//                                 type="checkbox"
//                                 control={control}
//                             />
//                         </section>
//                         {errors.remember && <p>{errors.remember.message}</p>}
//                         {/* <div style={{ display: 'flex' }}>
//                             <FormLabel>Gender</FormLabel>
//                             <RadioGroup aria-label="gender" name="gender" value={false} row>
//                                 <FormControlLabel value="male" control={<Radio />} label="Male" />
//                                 <FormControlLabel value="female" control={<Radio />} label="Female" />
//                             </RadioGroup>
//                         </div> */}
//                         <Button type="submit" fullWidth
//                             variant="contained"
//                             color="primary"
//                             className={classes.submit}
//                         >Sign In</Button>
//                     </form>
//                     {data && (
//                         <pre style={{ textAlign: "left", color: "black" }}>
//                             {JSON.stringify(data, null, 2)}
//                         </pre>
//                     )}
//                 </div>
//             </Container >
//             {/* <input type="radio" name="myradio" value="green" />
//             <input type="radio" name="myradio" value="red" />
//             <input type="radio" name="myradio" value="blue" />
//             {errors.myradio && <p>{errors.myradio.message}</p>} */}
//         </>
//     );
// }

// export default MaterialUiLogin;

// // import React from 'react';
// // import Avatar from '@material-ui/core/Avatar';
// // import Button from '@material-ui/core/Button';
// // import CssBaseline from '@material-ui/core/CssBaseline';
// // import TextField from '@material-ui/core/TextField';
// // import FormControlLabel from '@material-ui/core/FormControlLabel';
// // import Checkbox from '@material-ui/core/Checkbox';
// // import Link from '@material-ui/core/Link';
// // import Grid from '@material-ui/core/Grid';
// // import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// // import Typography from '@material-ui/core/Typography';
// // import { makeStyles } from '@material-ui/core/styles';
// // import Container from '@material-ui/core/Container';
// // import { useForm, Controller } from 'react-hook-form'

// // const useStyles = makeStyles((theme) => ({
// //     paper: {
// //         marginTop: theme.spacing(8),
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //     },
// //     avatar: {
// //         margin: theme.spacing(1),
// //         backgroundColor: theme.palette.secondary.main,
// //     },
// //     form: {
// //         width: '100%', // Fix IE 11 issue.
// //         marginTop: theme.spacing(1),
// //     },
// //     submit: {
// //         margin: theme.spacing(3, 0, 2),
// //     },
// // }));

// // export default function MaterialUiLogin() {
// //     const classes = useStyles();
// //     const { register, handleSubmit, control } = useForm()

// //     return (
// //         <Container component="main" maxWidth="xs">
// //             <CssBaseline />
// //             <div className={classes.paper}>
// //                 <Avatar className={classes.avatar}>
// //                     <LockOutlinedIcon />
// //                 </Avatar>
// //                 <Typography component="h1" variant="h5">
// //                     Sign in
// //         </Typography>
// //                 <form className={classes.form} noValidate onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
// //                     <TextField
// //                         variant="outlined"
// //                         margin="normal"
// //                         inputRef={register}
// //                         required
// //                         fullWidth
// //                         id="email"
// //                         label="Email Address"
// //                         name="email"
// //                         autoComplete="email"
// //                         autoFocus
// //                     />
// //                     <TextField
// //                         variant="outlined"
// //                         margin="normal"
// //                         inputRef={register}
// //                         required
// //                         fullWidth
// //                         name="password"
// //                         label="Password"
// //                         type="password"
// //                         id="password"
// //                         autoComplete="current-password"
// //                     />
// //                     <FormControlLabel
// //                         control={
// //                             <Controller as={Checkbox} control={control} name="remember" color="primary" defaultValue={false} />}
// //                         label="Remember me"
// //                     />
// //                     <Button
// //                         type="submit"
// //                         fullWidth
// //                         variant="contained"
// //                         color="primary"
// //                         className={classes.submit}
// //                     >
// //                         Sign In
// //           </Button>
// //                     <Grid container>
// //                         <Grid item xs>
// //                             <Link href="#" variant="body2">
// //                                 Forgot password?
// //               </Link>
// //                         </Grid>
// //                         <Grid item>
// //                             <Link href="#" variant="body2">
// //                                 {"Don't have an account? Sign Up"}
// //                             </Link>
// //                         </Grid>
// //                     </Grid>
// //                 </form>
// //             </div>
// //         </Container>
// //     );
// // }

import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { RHFInput } from 'react-hook-form-input';
// import ReactSelect from "react-select";
import {
    TextField,
    Checkbox,
    Select,
    MenuItem,
    Switch,
    RadioGroup,
    FormControlLabel,
    ThemeProvider,
    Radio,
    createMuiTheme
} from "@material-ui/core";

const defaultValues = {
    Native: "",
    TextField: "",
    Select: "",
    ReactSelect: "",
    chch: false,
    switch: false,
    RadioGroup: "",
    textTest: ""
};

function MaterialUiLogin() {
    const { handleSubmit, register, reset, control, setValue } = useForm({ defaultValues });
    const [data, setData] = useState(null);

    return (

        <form onSubmit={handleSubmit(data => setData(data))}>
            <section>
                <label>MUI Checkbox</label>
                <Controller
                    as={<Checkbox />}
                    name="chch"
                    type="checkbox"
                    control={control}
                />
            </section>

            <section>
                <label>MUI TextField</label>
                <Controller as={<TextField />} name="TextField" control={control} />
            </section>


            <button>submit</button>
            {data && (
                <pre style={{ textAlign: "left", color: "black" }}>
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </form>)
}

export default MaterialUiLogin