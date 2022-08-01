import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import InfoModal from '../components/InfoModal';
import '../styles/CardWrapper.scss';

const CardWrapper = ({ alt, title, image, children, minHeight = '250', objectFit }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <InfoModal title={title} open={open} close={handleClose} />
      <Card>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height={minHeight}
            image={image}
            alt={alt}
            sx={{ objectFit }}
          />
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
