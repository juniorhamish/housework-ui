import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { useId, useState } from 'react';
import logo from '../../assets/logo.png';
import { UserInfo } from '../../gen/client';

interface Props {
  onLogin: () => void;
  onLogout: () => void;
  onMyProfile: () => void;
  onHome: () => void;
  user?: UserInfo;
}

export default function TopAppBar({ onLogin, onLogout, onMyProfile, onHome, user }: Readonly<Props>) {
  const userMenuId = useId();
  const [userMenuAnchorElement, setUserMenuAnchorElement] = useState<null | HTMLElement>(null);
  const closeUserMenu = () => {
    setUserMenuAnchorElement(null);
  };
  return (
    <AppBar position="static" enableColorOnDark>
      <Toolbar disableGutters sx={{ p: 1 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Button onClick={() => onHome()} sx={{ p: 0, minWidth: 60 }}>
            <Box sx={{ maxWidth: 60, verticalAlign: 'middle' }} component="img" src={logo} alt="Task Tracker logo" />
          </Button>
        </Box>
        {!user
          ? (
              <Box>
                <Button
                  color="inherit"
                  onClick={() => {
                    onLogin();
                  }}
                >
                  Login
                </Button>
              </Box>
            )
          : (
              <Box sx={{ flexGrow: 0 }}>
                <IconButton
                  sx={{ p: 0 }}
                  onClick={(event) => {
                    setUserMenuAnchorElement(event.currentTarget);
                  }}
                  aria-haspopup
                  aria-controls={userMenuId}
                >
                  <Avatar src={user.picture} alt={user.nickname} />
                </IconButton>
                <Menu
                  id={userMenuId}
                  sx={{ mt: '45px' }}
                  open={Boolean(userMenuAnchorElement)}
                  anchorEl={userMenuAnchorElement}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  onClose={closeUserMenu}
                >
                  <MenuItem
                    onClick={() => {
                      closeUserMenu();
                      onMyProfile();
                    }}
                  >
                    <Typography textAlign="center">My Profile</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      closeUserMenu();
                      onLogout();
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
      </Toolbar>
    </AppBar>
  );
}
