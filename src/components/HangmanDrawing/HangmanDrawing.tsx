import "./HangmanDrawing.scss";
const HEAD = <div className="app__drawing_head"></div>;
const BODY = <div className="app__drawing_body"></div>;
const RIGHT_ARM = <div className="app__drawing_right-arm"></div>;
const LEFT_ARM = <div className="app__drawing_left-arm"></div>;
const RIGHT_LEG = <div className="app__drawing_right-leg"></div>;
const LEFT_LEG = <div className="app__drawing_left-leg"></div>;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="app__drawing">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="app__drawing_noose-holder"></div>
      <div className="app__drawing_overhang"></div>
      <div className="app__drawing_vertical-section"></div>
      <div className="app__drawing_bottom"></div>
    </div>
  );
};

export default HangmanDrawing;
