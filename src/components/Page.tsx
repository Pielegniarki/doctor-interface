import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Header from "./Header";

type Props = {
    children?: ReactNode
}

export default function Page({ children }: Props) {
    return <Box>
        <Header />
        <Box
            component="main"
            sx={{ p: 1 }}
        >
            <Toolbar />
            {children}
        </Box>
    </Box>
}