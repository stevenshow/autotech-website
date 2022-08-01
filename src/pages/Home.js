import CardWrapper from '../components/CardWrapper';
import kickervt from '../images/kickervt.jpg';
import mecp from '../images/MECP_logo_250x100_L-2.png';
import soundwave from '../images/color-equalizer.jpg';
import '../styles/Home.scss';

const Home = () => {
  return (
    <>
      <div className="container">
        <CardWrapper title="Audiophile" image={soundwave}>
          I have always been intrigued by audio and the amazing things that can be created and
          experienced. This naturally drew me into car audio due to the simple fact that I spent a
          majority of my time listening to music on my commute to work.
        </CardWrapper>
        <CardWrapper title="Kicker" image={kickervt}>
          After installing for more than 5 years I have come to love Kicker for those wanting to
          enter the car audio scene, as well as those who have been around for a while.
        </CardWrapper>
        <CardWrapper title="MECP" image={mecp} objectFit="contain">
          This training has given me the confidence to tackle almost any vehicle install out there.
          It also gives you the confidence that I will perform industry standard install practices
          while in your vehicle.
        </CardWrapper>
      </div>
    </>
  );
};

export default Home;
