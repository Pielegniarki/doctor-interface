import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function InLayout() {
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

const navItems = ["Menu", "Messages"]



function Header() {
    return <AppBar component="nav">
        <Toolbar>
            <Typography
                variant="h6"
                sx={{ flexGrow: 1 }}
            >
                Pielęgniarki
            </Typography>
            <Box >
                {navItems.map((item) => (
                    <Button key={item} sx={{ color: "inherit" }}>
                        {item}
                    </Button>
                ))}
            </Box>
        </Toolbar>
    </AppBar>
}