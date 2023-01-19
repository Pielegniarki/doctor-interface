import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Page from '../components/Root';
import { DoctorService } from '../services/DoctorService';
import { tokenState } from '../stores/DoctorStore';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { isOk } from '../models/Result';
import { AuthenticationService } from '../services/AuthenticationService';


export default function SignIn() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const setDoctorId = useSetRecoilState(tokenState);

    const navigate = useNavigate();

    const handleSubmit = () => {
        const fetchData = async () => {
            const id = await AuthenticationService.login(email, password);

            if (isOk(id)) {
                setDoctorId(id);
                navigate("/");
            }
        }

        fetchData();
    };

    return (
            <Container component="main" maxWidth="xs">
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onInput={email => setEmail((email.target as HTMLInputElement).value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onInput={password => setPassword((password.target as HTMLInputElement).value)}
                            />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                            >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
    );
}
