import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon
import Box from '@mui/material/Box';
import { ThemeContext } from '../Layouts/GeneralLayout';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.type === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.type === 'dark' ? '#003892' : '#ffcc00',
    width: 32,
    height: 32,
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${
        theme.type === 'dark'
          ? 'https://example.com/moon-icon.png'
          : 'https://example.com/sun-icon.png'
      })`,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    backgroundColor: theme.type === 'dark' ? '#8796A5' : '#aab4be',
  },
}));

const lightTheme = {
  type: "light",
  backgroundColor: "#fff",
  headingColor: "#308d46",
  subHeadingColor: "#308d46",
  textColor: "#777676",
  activeColor:"#308d46",
  hoverColor:"#308d46"
};

const darkTheme = {
  type: "dark",
  backgroundColor: "#292727",
  headingColor: "#308d46",
  subHeadingColor: "#308d46",
  textColor: "#fff",
};

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setTheme(theme.type === 'dark' ? lightTheme : darkTheme);
  };

  return (
    <Box display="flex" style={{cursor:"pointer",color: theme.type === "light" ? "#000" : "#fff"}} onClick={handleToggle} alignItems="center" justifyContent="center" mt={2}  mr={3}>
      {theme.type === 'light' ? <DarkModeIcon /> : <LightModeIcon/>}
      {/* <Brightness4Icon style={{ color: theme.type === 'dark' ? '#fff' : '#ccc' }} />
      <ThemeSwitch theme={theme} checked={theme.type === 'dark'} onChange={handleToggle} />
      <Brightness7Icon style={{ color: theme.type === 'light' ? '#ffcc00' : '#ccc' }} /> */}
    </Box>
  );
}
