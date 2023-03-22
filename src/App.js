import { Button, styled, Typography } from '@mui/material';
import { Settings, Add } from '@mui/icons-material';

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    color: 'green',
    backgroundColor: theme.palette.secondary.light,
    margin: 5,
    '&:hover': {
      backgroundColor: 'black',
    },
    '&:disabled': {
      backgroundColor: 'goldenrod',
    },
  }));

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="secondary" endIcon={<Settings />}>
        Settings
      </Button>
      <Button variant="contained" color="otherColor" startIcon={<Add />}>
        Add New Post
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag
      </Typography>
      <BlueButton>BUTTON</BlueButton>
      <BlueButton>ANOTHER BUTTON</BlueButton>
    </div>
  );
}

export default App;
