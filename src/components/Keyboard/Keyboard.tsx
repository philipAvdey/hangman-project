import "./Keyboard.scss";

const KEYS = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean
};

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false
}: KeyboardProps) => {
  return (
    <div className="app__keyboard">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`app__keyboard_key ${isActive ? "active" : ""} 
            ${isInactive ? "inactive" : ""}`} 
            key={key}
            disabled={isInactive || isActive || disabled
            }
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
