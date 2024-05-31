import "./HangmanDrawing.scss";
const HEAD = (
  <div className="app__drawing_head"></div>
);

const HangmanDrawing = () => {
  return (
    <div className="app__drawing">
      {HEAD}
      <div className="app__drawing_noose-holder"></div>
      <div className="app__drawing_overhang"></div>
      <div className="app__drawing_vertical-section"></div>
      <div className="app__drawing_bottom"></div>
    </div>
  );
};

export default HangmanDrawing;
