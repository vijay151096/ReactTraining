import React, {useContext, useState} from 'react';
import UserContext from "../../store/UserContext";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Login() {

    let {login} = useContext(UserContext);
    const theme = createTheme();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password)
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }} >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                        <Box component="main" noValidate sx={{ mt: 1 }} >
                            <TextField margin="normal" required fullWidth id="email" label="User Name" name="email" value={username} onChange={(e) => {setUserName(e.target.value)}} autoComplete="email" autoFocus />
                            <TextField margin="normal"  required  fullWidth  name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}  label="Password" type="password" id="password"  autoComplete="current-password"/>
                            <Button onClick={ handleSubmit } fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                                Sign In
                            </Button>
                        </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login;