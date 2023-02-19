import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  MenuItem,
  Typography,
  IconButton,
  Menu,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logoWImg from '../../assets/likelion_w_logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '../../utils/commons';

function Header() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [position, setPosition] = useState(window.pageYOffset);
  const transparent = position < (theme.mixins.toolbar.minHeight as number);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const onClickMenuItem = (to: string) => {
    navigate(to);
    handleCloseNavMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        boxShadow: 0,
        color: 'common.white',
        '&.transparent': {
          backgroundColor: 'common.black',
          transition: 'background-color 0.1s ease-out',
        },
        '&.paper': {
          backgroundColor: 'background.paper',
          transition: 'background-color 0.1s ease-out',
        },
      }}
      className={`${transparent ? 'transparent' : 'paper'}`}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component={Link} to="/">
            <Box component="img" src={logoWImg} height={18} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={() => onClickMenuItem(page.to)}>
                  <NavLink
                    to={page.to}
                    style={({ isActive }) => ({
                      color: isActive ? '#FFFFFF' : '#787878',
                    })}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink
                key={page.title}
                to={page.to}
                style={({ isActive }) => ({
                  color: isActive ? '#FFFFFF' : '#787878',
                })}
              >
                <Button color="secondary" sx={{ color: 'inherit', display: 'block', px: 2 }}>
                  {page.title}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
