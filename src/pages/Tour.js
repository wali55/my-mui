import { BottomNavigation, Box, Paper, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordions from '../components/CustomizedAccordions';
import BasicModal from '../components/BasicModal';

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world
      </Typography>
      <Box marginTop={3} sx={{ display: 'flex' }}>
        <img
          height={325}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTok0Eot0sRC3wh5LfKv5JUXWr7MgssH_--jw&usqp=CAU"
          alt=""
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sint,
          quae deserunt est hic eligendi ullam at voluptatem alias tempore
          asperiores fugit perferendis? Dolor similique velit magnam!
          Praesentium inventore, beatae incidunt iusto voluptas enim modi.
          Architecto maxime error libero impedit!
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginY={3}>
          Frequently asked questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
        >
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};
export default Tour;
