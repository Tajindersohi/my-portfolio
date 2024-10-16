import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useLocation, Link } from 'react-router-dom';
import ThemeToggle from '../Common/ThemeToggle';
import './style.css';
import logo1 from '../../Components/Images/Image__1_-removebg-preview.png'

const drawerWidth = 240;
const navItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Works", link: "/works" },
  { title: "Projects", link: "/projects" },
  { title: "Services", link: "/services" },
  { title: "Contact", link: "/contact" },
];

function HeaderBar({ theme, setTheme, ...props }) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const currentRoute = location.pathname; // Current route path
console.log("theme",theme.activeColor,currentRoute === "/" ? theme.activeColor : theme.textColor);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ backgroundColor: "transparent", justifyContent: 'center', display: 'block',textAlign: 'center'  }} >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link
                  className={`nav-buttons ${currentRoute === item.link ? 'active' : ''}`}
                  to={item.link}
                  key={item.title}
                  style={{
                      // color: currentRoute === item.link ? theme.activeColor : theme.textColor,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = theme.hoverColor)} // Set hover color dynamically
                  onMouseLeave={(e) => (e.currentTarget.style.color = currentRoute === item.link ? theme.activeColor : theme.textColor)} // Reset color
              >
                  {item.title}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar className="header-container" sx={{ backgroundColor: theme.backgroundColor, justifyContent: 'center', display: 'block' }}>
        <Toolbar sx={{ justifyContent: { md: "center" } }}>
        <Box
          mt={5}
          sx={{ 
        position: 'absolute', 
        left: { xs: '25%', md: 0 },  // Adjust positioning based on screen size
        // transform: { xs: 'translateX(-50%)', md: 'none' }, 
        // top: { xs: '10px', md: '20px' }, 
      }}>
      <Link
        className={`nav-buttons ${currentRoute === '/' ? 'active' : ''}`}
        to={"/"}
        style={{ color: theme.textColor }}
      >
        {/* <b>Tajinder</b> */}
        {/* <img src={logo1} alt='Logo' height="150px" width="200px" /> */}
      </Link>
    </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'block' }, px: 4 }}>
            {navItems.map((item) => (
              <Link
                className={`nav-buttons ${currentRoute === item.link ? 'active' : ''}`}
                to={item.link}
                key={item.title}
                style={{color:currentRoute === item.link ? "" :theme.textColor}}
              >
                {item.title}
              </Link>
            ))}
          </Box>
          <Box sx={{ position: 'absolute', right: 0 }}>
            <ThemeToggle />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

HeaderBar.propTypes = {
  window: PropTypes.func,
};

export default HeaderBar;
