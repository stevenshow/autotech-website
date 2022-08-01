import CardWrapper from '../components/CardWrapper';
import kickervt from '../images/kickervt.jpg';
import radio from '../images/classic-radio.jpg';
import audiophile from '../images/audiophile.jpg';
import '../styles/Services.scss';

const Services = () => {
  return (
    <>
      <div className="container">
        <CardWrapper title="Radio Install" image={radio}>
          Install of a Single or Double DIN radio in your vehicle, depending on your cars fitment.
        </CardWrapper>
        <CardWrapper title="Audiophile" image={audiophile}>
          I have always been intrigued by audio and the amazing things that can be created and
          experienced. This naturally drew me into car audio due to the simple fact that I spent a
          majority of my time listening to music on my commute to work.
        </CardWrapper>
        <CardWrapper title="Kicker" image={kickervt}>
          After installing for more than 5 years I have come to love Kicker for those wanting to
          enter the car audio scene, as well as those who have been around for a while.
        </CardWrapper>
      </div>
    </>
  );
};

export default Services;
