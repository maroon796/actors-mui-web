import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material';

const Rightbar = () => {
  return (
    <Box bgcolor="#E1FFEE" flex={2} p={2} sx={{ display: { xs: 'none', md: 'block' } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={400} mt={2} mb={2}>
          My Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={400}>
          Latest Posts
        </Typography>
        <ImageList>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/burgers.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/bike.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/camera.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/hats.jpg" alt="" />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
