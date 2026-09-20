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
  styled,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, NavLink, useMatch, useNavigate } from 'react-router-dom';
import logoWImg from '../../assets/likelion_w_logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '../../utils/commons';

const HeaderBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'mainPage',
})<{ mainPage: boolean }>(({ theme, mainPage }) => ({
  boxShadow: 'none',
  color: theme.palette.common.white,
  backgroundImage: mainPage ? 'linear-gradient(#000, rgba(0,0,0,0.65) 182%)' : 'none',
  '&.transparent': {
    backgroundColor: mainPage ? 'transparent' : theme.palette.common.black,
    transition: 'background-color 0.1s ease-out',
  },
  '&.paper': {
    backgroundColor: mainPage ? 'transparent' : theme.palette.background.paper,
    transition: 'background-color 0.1s ease-out',
  },
}));

const HeaderContainer = styled(Container)(({ theme }) => ({
  maxWidth: 1920, paddingLeft: 'clamp(30px, 4.6875vw, 90px)', paddingRight: 'clamp(30px, 4.6875vw, 90px)',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 'clamp(30px, 4.6875vw, 90px)', paddingRight: 'clamp(30px, 4.6875vw, 90px)',
  },
  '& .MuiToolbar-root': { minHeight: 100 },
  '& img': { width: 'clamp(168px, 14.947917vw, 287px)', height: 'clamp(13px, 1.145833vw, 22px)' },
  '& .MuiButton-root': { fontSize: 'clamp(14px, 0.9375vw, 18px)', fontWeight: 600 },
  [theme.breakpoints.down('md')]: {
    paddingLeft: 30, paddingRight: 18,
    '& .MuiToolbar-root': { minHeight: 61 },
    '& img': { width: 168, height: 13 },
  },
}));

function Header() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMain = Boolean(useMatch('/'));
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
    <HeaderBar
      mainPage={isMain}
      position="fixed"
      color="transparent"
      className={`${transparent ? 'transparent' : 'paper'}`}
    >
      <HeaderContainer maxWidth={false}>
        <Toolbar disableGutters>
          <Box component={Link} to="/">
            <Box component="img" src={logoWImg} alt="LIKELION UNIV. 홈" />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit" aria-label="메뉴 열기">
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
      </HeaderContainer>
    </HeaderBar>
  );
}

export default Header;
