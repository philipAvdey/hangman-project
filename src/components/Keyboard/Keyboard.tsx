import "./Keyboard.scss";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Keyboard = () => {
  return (
    <div className="app__keyboard">
      {KEYS.map((key) => {
        return (
          <button className="app__keyboard_key" key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
