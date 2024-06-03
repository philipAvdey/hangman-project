import "./Keyboard.scss";

const KEYS_ROW_1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

const KEYS_ROW_2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

const KEYS_ROW_3 = ["z", "x", "c", "v", "b", "n", "m"];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  return (
    <div className="app__keyboard">
      <div className="app__keyboard_row">
        {KEYS_ROW_1.map((key) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`app__keyboard_key ${isActive ? "active" : ""} 
            ${isInactive ? "inactive" : ""}`}
              key={key}
              disabled={isInactive || isActive || disabled}
            >
              {key}
            </button>
          );
        })}
      </div>
      <div className="app__keyboard_row">
        {KEYS_ROW_2.map((key) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`app__keyboard_key ${isActive ? "active" : ""} 
            ${isInactive ? "inactive" : ""}`}
              key={key}
              disabled={isInactive || isActive || disabled}
            >
              {key}
            </button>
          );
        })}
      </div>
      <div className="app__keyboard_row">
        {KEYS_ROW_3.map((key) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`app__keyboard_key ${isActive ? "active" : ""} 
            ${isInactive ? "inactive" : ""}`}
              key={key}
              disabled={isInactive || isActive || disabled}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
