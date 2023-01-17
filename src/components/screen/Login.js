import { Button, Divider, Grid,  TextField, Typography } from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';



import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Login = () => {
    

    const schema = yup.object().shape({
        usuario: yup.string().max(32).required().email(),
        password: yup.string().max(32).required(),
    });

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

 

   
    const onSave = (data) => {
        console.log(data)
    }


    
    return (

        <Grid container direction='column' justifyContent='center' alignItems='center' sx={{ backgroundColor: 'grey', flexGrow: 1, minHeight: '100vh' }}>
            <Grid item sm={12}>
                <Grid container md={12} sx={{ backgroundColor: 'white', display: "flex", borderRadius: 3, p: 3 }}  flexDirection="column">
                    <Grid item sx={{ display: "flex", p: 3 }} flexDirection="column" alignItems="center"  >
                        <Typography color="secondary" fontSize="1.6rem">
                            Hi, Welcome Back
                        </Typography>
                        <Typography>
                            Enter your credential to continue
                        </Typography>
                        
                        <Button variant="outlined" startIcon={<GoogleIcon />}  sx={{ width: "100%", mt: 3 }} >
                            Sign In With Google
                        </Button>
                        <Divider sx={{ mt: 3, mb: 3 }}>OR</Divider>
                        <Typography color="secondary" >
                            Sign In With Email Address
                        </Typography>
                        <Controller render={({ formState, field}) => {
                            return <TextField {...field} error={!!formState.errors?.usuario}
                                id="outlined-basic" sx={{ width: "100%", mt: 3 }} label="Email Address/Username" variant="outlined" />
                        }}
                        name="usuario"
                        control={control}
                        defaultValue=""
                        />
                        <Controller render={({ formState, field}) => {
                            return <TextField {...field} error={!!formState.errors?.password}
                                id="outlined-basic" sx={{ width: "100%", mt: 3 }} label="Password" variant="outlined" />
                        }}
                        name="password"
                        control={control}
                        defaultValue=""
                        />
                        {/* <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl> */}
                        <Grid container sx={{ mb: 3 }}>
                            <Grid item sm='6'>
                                <Typography fontSize="0.8rem">
                                    Remember me
                                </Typography>
                            </Grid>
                            <Grid item sm='6'>
                                <Typography fontSize="0.8rem">
                                Forgot My password
                                </Typography>
                            </Grid>
                        </Grid>
                        <Button onClick={handleSubmit(onSave)}
                         variant="contained" size="medium" sx={{ width: "100%" }} color='secondary'>
                            Login
                        </Button>
                        <Divider />
                        <Button variant='subtitle1'>
                            Don't have an account?
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )

}
export default Login;