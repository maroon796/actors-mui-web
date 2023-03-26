import { TheaterComedy, Mail, CircleNotifications } from '@mui/icons-material';
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '15px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          MY FAVOURITE ACTORS
        </Typography>
        <TheaterComedy
          sx={{ color: '#E1FFEE', display: { xs: 'block', sm: 'none' }, height: 40, width: 40 }}
        />
        <Search>
          <InputBase placeholder="search actor..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="otherColor" />
          </Badge>
          <Badge badgeContent={7} color="error">
            <CircleNotifications color="otherColor" />
          </Badge>
          <Avatar
            src="https://i.pinimg.com/originals/d4/15/95/d415956c03d9ca8783bfb3c5cc984dde.jpg"
            sx={{ width: 30, height: 30 }}
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            src="https://i.pinimg.com/originals/d4/15/95/d415956c03d9ca8783bfb3c5cc984dde.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="span" color="white">
            Mike
          </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
