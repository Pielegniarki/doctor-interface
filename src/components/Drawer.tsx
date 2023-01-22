import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VisitsIcon from '@mui/icons-material/EventAvailable';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import LogoutButton from '@mui/icons-material/Logout';
import { tokenState } from '../stores/DoctorStore';


export default function PatentMenu() {
  const setToken = useSetRecoilState(tokenState);
  const navigate = useNavigate();

  const clickLogout = () => {
    setToken(null);
    navigate("/");
  };

  const clickOnHome = () => {
    navigate("/in/home");
  };

  const clickVisit = () => {
    navigate("/in/visits")
  };

  return (
    <React.Fragment>
      <ListButton onClick={clickOnHome} icon={<HomeIcon />} text="Home" />
      <ListButton onClick={clickVisit} icon={<VisitsIcon />} text="Visits" />
      <ListButton onClick={clickLogout} icon={<LogoutButton />} text="Logout" />
    </React.Fragment>
  );

}

type ListButtonProps = {
  onClick?: () => void,
  icon: React.ReactNode,
  text: string
}

function ListButton({ onClick, icon, text }: ListButtonProps) {
  return <ListItemButton onClick={onClick}>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItemButton>
}

