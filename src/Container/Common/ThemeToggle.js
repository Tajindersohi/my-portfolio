import { useContext } from "react";
import { ThemeContext } from "../Layouts/GeneralLayout";
import { Box } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const primaryGreen = "#308d46";
const hoverGreen = "#276c38";

const softWhite = "#ffffff";
const softBlack = "#1c1c1c";
const softGray = "#f1f3f5";
const darkGray = "#2a2a2a";

export const lightTheme = {
  type: 'light',
  background: '#f9f9f9',
  textColor: '#1a1a1a',
  headingColor: '#308d46',
  subHeadingColor: '#666666',
  paragraphColor: '#555555',
  linkColor: '#00b894',
  cardShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  cardGradientStart: '#d7f2e3', // Light mint
  cardGradientEnd: '#a5e9c6',  
};

export const darkTheme = {
  type: 'dark',
  background: '#121212',
  textColor: '#f1f1f1',
  headingColor: '#308d46',
  subHeadingColor: '#999999',
  paragraphColor: '#bbbbbb',
  linkColor: '#00b894',
  cardShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
  cardGradientStart: '#1e4d30',
  cardGradientEnd: '#3a8d5d',
}


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