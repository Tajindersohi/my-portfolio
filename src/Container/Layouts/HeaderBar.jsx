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
// import logo1 from '../../Components/Images/Image__1_-removebg-preview.svg'
import logo1 from '../../Components/Images/Image (1).png'

const drawerWidth = 200;
const navItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  // { title: "Works", link: "/works" },
  { title: "Projects", link: "/projects" },
  // { title: "Services", link: "/services" },
  { title: "Contact", link: "/contact" },
];

function HeaderBar({ theme, setTheme, ...props }) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const currentRoute = location.pathname; // Current route path
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ backgroundColor: theme.backgroundColor,color:theme.textColor, justifyContent: 'center', display: 'block',textAlign: 'center'  }} >
      <List>
        <ListItem sx={{justifyContent:'center', padding:'5px'}}>
            <img src={logo1} alt='Logo' height="70px" width="100px"/>
        </ListItem>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding sx={{justifyContent:'center'}}>
            <ListItemButton sx={{ justifyContent: 'center', padding:'5px' }}>
              <Link
                  className={`nav-buttons ${currentRoute === item.link ? 'active' : ''}`}
                  to={item.link}
                  key={item.title}
                  style={{
                      color: currentRoute === item.link ? theme.activeColor : theme.textColor,
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
      <AppBar className="header-container" sx={{px:2, background: theme.type == 'light' ? 'linear-gradient(377deg, #ffffff, #86f7ff36)' : 'linear-gradient(23deg, black, #ffffff94)', backgroundColor: theme.backgroundColor, justifyContent: 'center', display: 'block' }}>
        <Toolbar sx={{ justifyContent: { md: "center" }}}>
        <Box
            sx={{ 
              position: 'absolute', 
              display :{xs:'none',sm:'none',md:'block'},
              left: { xs: '25%', sm:'-70px', md: '-40px' },  // Adjust positioning based on screen size
            }}>
          <Link
            className={`nav-buttons ${currentRoute === '/' ? 'active' : ''}`}
            to={"/"}
            style={{ color: theme.textColor }}
          >
            {/* <b style={{fontSize:"40px"}}>Tajinder</b> */}
            <img src={logo1}  alt='Logo' height="100px" width="150px"/>
            </Link>
        </Box>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color:theme.textColor}}
          >
            <MenuIcon color={theme.textColor+'!important'}/>
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'block' }, px: 4 }}>
            {navItems.map((item) => (
              <Link
                className={`nav-buttons ${currentRoute === item.link ? 'active' : ''}`}
                to={item.link}
                key={item.title}
                style={{color:currentRoute === item.link ? theme.headingColor :theme.textColor}}
              >
                <b>{item.title}</b>
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
          '& .MuiDrawer-paper': {width: drawerWidth,backgroundColor:theme.backgroundColor},
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
