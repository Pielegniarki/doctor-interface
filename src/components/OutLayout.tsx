import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Root() {
    return <Box>
        <Header />
        <Box
            component="main"
            sx={{ p: 1 }}
        >
            <Toolbar />
            <Outlet />
        </Box>
    </Box>
}

function Header() {
    return <AppBar component="nav">
        <Toolbar>
            <Typography
                variant="h6"
                sx={{ flexGrow: 1 }}
            >
                Pielęgniarki
            </Typography>

        </Toolbar>
    </AppBar>
}