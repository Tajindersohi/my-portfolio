import React, { useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import Box from '@mui/material/Box';
import { ThemeContext } from '../Layouts/GeneralLayout';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const lightTheme = {
  type: "light",
  backgroundColor: "#fff",
  headingColor: "#1b5e20",
  subHeadingColor: "#1b5e20",
  textColor: "#333",
  // textColor: "#777676",
  activeColor:"#308d46",
  hoverColor:"#308d46"
}

const darkTheme = {
  type: "dark",
  backgroundColor: "#292727",
  headingColor: "#90EE90",
  subHeadingColor: "#90EE90",
  textColor: "#fff",
};

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    localStorage.setItem('myTheme',JSON.stringify(theme.type === 'dark' ? lightTheme : darkTheme))
    setTheme(theme.type === 'dark' ? lightTheme : darkTheme);
  };

  return (
    <Box display="flex" style={{cursor:"pointer",color: theme.type === "light" ? "#000" : "#fff"}} onClick={handleToggle} alignItems="center" justifyContent="center" mt={2}  mr={3}>
      {theme.type === 'light' ? <DarkModeIcon /> : <LightModeIcon/>}
    </Box>
  );
}
