import { AppBar, IconButton } from "@mui/material";

type Props = { };

export default function Welcome({}: Props) {
    return <AppBar> 
        <IconButton
            onClick={() => console.log("pressed")}
        >
            Menu
        </IconButton>
    </AppBar>
} 