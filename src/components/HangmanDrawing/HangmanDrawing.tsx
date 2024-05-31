import "./HangmanDrawing.scss";

const HangmanDrawing = () => {
  return (
    <div className="app__drawing">
      <div className="app__drawing_noose-holder"></div>
      <div className="app__drawing_overhang"></div>
      <div className="app__drawing_vertical-section"></div>
      <div className="app__drawing_bottom"></div>
    </div>
  );
};

export default HangmanDrawing;
