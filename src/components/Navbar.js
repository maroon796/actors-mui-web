import { TheaterComedy } from '@mui/icons-material';
import { AppBar, styled, Toolbar, Typography } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          MY FAVOURITE ACTORS
        </Typography>
        <TheaterComedy sx={{ color: '#E1FFEE', display: { xs: 'block', sm: 'none' } }} />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
