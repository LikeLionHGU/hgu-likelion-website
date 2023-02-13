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
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../../assets/likelion_logo.png';
import logoWImg from '../../assets/likelion_w_logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '../../utils/commons';

function Header() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (to: string) => {
    navigate(to);
    setAnchorElNav(null);
  };

  const onClickNavigate = (to: string) => {
    navigate(to);
  };

  const [position, setPosition] = useState(window.pageYOffset);
  const transparent = position < 56;
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        boxShadow: 0,
        '&.transparent': {
          backgroundColor: 'transparent',
          color: 'common.white',
          transition: 'background-color 0.1s ease-out, border 0.1s ease-out',
        },
        '&.paper': {
          backgroundColor: 'background.paper',
          color: 'common.black',
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          transition: 'background-color 0.1s ease-out, border 0.1s ease-out',
        },
      }}
      className={`${transparent ? 'transparent' : 'paper'}`}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component={Link} to="/">
            {transparent ? (
              <Box component="img" src={logoWImg} height={18} />
            ) : (
              <Box component="img" src={logoImg} height={18} />
            )}
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
                <MenuItem key={page.title} onClick={() => handleCloseNavMenu(page.to)}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                color="inherit"
                key={page.title}
                onClick={() => onClickNavigate(page.to)}
                sx={{ display: 'block', px: 2 }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
