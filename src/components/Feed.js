import { Box } from '@mui/material';
import Post from './Post';

const Feed = () => {
  return (
    <Box bgcolor="#FFEEAF" flex={4} p={2} sx={{ marginLeft: { xs: 30, sm: 20 } }}>
      <Post
        src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Bogdan_Stupka.jpg"
        desc="Український та радянський актор театру і кіно, лавреат Шевченківської премії (1993),
          Народний артист УРСР (1980), Народний артист СРСР (1991), Герой України (2011). Кавалер
          ордена князя Ярослава Мудрого IV, V ступеня (2006, 2010), ордена «За заслуги» I, II
          ступеня, ордена «За заслуги перед Польщею»."
        title="Bogdan Stupka"
      />
      <Post
        src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Woody_Harrelson_191020-N-NU281-1028_%28cropped%29.jpg"
        desc="An American actor and playwright. He is the recipient of various accolades, including a Primetime Emmy Award and two Screen Actors Guild Awards, in addition to nominations for three Academy Awards and four Golden Globe Awards."
        title="Woody Harrelson"
      />
      <Post
        src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Joaquin_Phoenix_in_2018.jpg"
        desc="an American actor. He is known for playing dark and unconventional characters in independent films. He has received various accolades, including an Academy Award, a British Academy Film Award, a Grammy Award, and two Golden Globe Awards. In 2020, The New York Times named him one of the greatest actors of the 21st century."
        title="Joaquin Phoenix"
      />
      <Post
        src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Daniel_Day-Lewis%2C_Jaguar%2C_Mille_Miglia_2013_cropped.jpg"
        desc="An English retired actor. Often described as one of the preeminent actors of his generation, he received numerous accolades throughout his career which spanned over four decades, including three Academy Awards for Best Actor, making him the first and only actor to have three wins in that category, and the third male actor to win three competitive Academy Awards for acting, the sixth performer overall."
        title="Daniel Day-Lewis"
      />
    </Box>
  );
};

export default Feed;
