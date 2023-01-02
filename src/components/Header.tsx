import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const navItems = ["Menu", "Messages"]



export default function Header() {
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