import CardWrapper from '../components/CardWrapper';
import '../styles/Home.scss';
import kickersub from '../images/KickerSub.jpg';
import mecp from '../images/MECP_logo_250x100_L-2.png';

const Home = () => {
  return (
    <>
      <div className="container">
        <CardWrapper title="MECP" image={mecp}>
          This training has given me the confidence to tackle almost any vehicle install out there.
          It also gives you the confidence that I will perform industry standard install practices
          while in your vehicle.
        </CardWrapper>
        <CardWrapper title="Kicker" image={kickersub}>
          After installing for more than 5 years I have come to love Kicker for those wanting to
          enter the car audio scene, as well as those who have been around for a while.
        </CardWrapper>
      </div>
    </>
  );
};

export default Home;
