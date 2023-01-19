import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Header from "./Header";
import { Outlet } from 'react-router-dom';


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