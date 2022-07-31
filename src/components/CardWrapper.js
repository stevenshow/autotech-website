import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import '../styles/CardWrapper.scss';

const CardWrapper = ({ alt, title, image, children, minHeight = '250' }) => {
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia component="img" height={minHeight} image={image} alt={alt} />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {title}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {children}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardWrapper;
