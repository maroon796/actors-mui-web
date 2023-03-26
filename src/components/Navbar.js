import { TheaterComedy, Mail, CircleNotifications } from '@mui/icons-material';
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar } from '@mui/material';

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
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
}));

const Navbar = () => {
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
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
