import CardWrapper from '../components/CardWrapper';
import kickersub from '../images/Installs/kicker-subs-close.JPG';
import radio from '../images/classic-radio.jpg';
import amp from '../images/Installs/kicker-amp-close.JPG';
import '../styles/Services.scss';

const Contact = () => {
  return (
    <>
      <div className="container">
        <CardWrapper title="Radio" image={radio}>
          Install of a Single or Double DIN radio in your vehicle, depending on your cars fitment.
          This can include either a video or non-video screen.
        </CardWrapper>
        <CardWrapper title="Subwoofer" image={kickersub}>
          Install as many subwoofers as desired into their respective boxes and hook them up to an
          existing amplifier.
        </CardWrapper>
        <CardWrapper title="Amplifier" image={amp}>
          Run power from battery to location of choosing and install amplifier in desired position.
          Hook amplifier to subwoofers. Tune amplifier to assure no clipping as well as hone in on
          the client's listening preferences.
        </CardWrapper>
      </div>
    </>
  );
};

export default Contact;
