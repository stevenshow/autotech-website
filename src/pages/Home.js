import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../styles/Home.scss';
import kickersub from '../images/KickerSub.jpg';

const Home = () => {
  return (
    <>
      <div className="container">
        <Card sx={{ backgroundColor: 'gray' }}>
          <CardMedia component="img" height="250" image={kickersub} alt="kicker sub" />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Kicker
            </Typography>
            <Typography variant="body1" color="text.primary">
              After installing for more than 5 years I have come to love Kicker for those wanting to
              enter the car audio scene, as well as those who have been around for a while.
            </Typography>
          </CardContent>
        </Card>
        <div className="test">
          <Card sx={{ backgroundColor: 'gray' }}>
            <CardMedia component="img" height="250" image={kickersub} alt="kicker sub" />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Kicker
              </Typography>
              <Typography variant="body1" color="text.primary">
                After installing for more than 5 years I have come to love Kicker for those wanting
                to enter the car audio scene, as well as those who have been around for a while.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="test">
          <Card sx={{ backgroundColor: 'gray' }}>
            <CardMedia component="img" height="250" image={kickersub} alt="kicker sub" />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Kicker
              </Typography>
              <Typography variant="body1" color="text.primary">
                After installing for more than 5 years I have come to love Kicker for those wanting
                to enter the car audio scene, as well as those who have been around for a while.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="test">
          <Card sx={{ backgroundColor: 'gray' }}>
            <CardMedia component="img" height="250" image={kickersub} alt="kicker sub" />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Kicker
              </Typography>
              <Typography variant="body1" color="text.primary">
                After installing for more than 5 years I have come to love Kicker for those wanting
                to enter the car audio scene, as well as those who have been around for a while.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
