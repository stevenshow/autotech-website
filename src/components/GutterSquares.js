import '../styles/GutterSquares.scss';

const GutterSquares = ({ position }) => {
  return (
    <>
      <div className={`squares ${position}`}>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </>
  );
};

export default GutterSquares;
