import { motion } from "framer-motion";
import "./Keyboard.scss";

const KEYS_ROW_1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const KEYS_ROW_2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const KEYS_ROW_3 = ["z", "x", "c", "v", "b", "n", "m"];
const KEYS = [KEYS_ROW_1, KEYS_ROW_2, KEYS_ROW_3];

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
      {KEYS.map((keys, index) => {
        return (
          <div key={index} className="app__keyboard_row">
            {keys.map((key) => {
              const isActive = activeLetters.includes(key);
              const isInactive = inactiveLetters.includes(key);
              return (
                <motion.button
                  onClick={() => addGuessedLetter(key)}
                  className={`app__keyboard_key ${isActive ? "active" : ""} 
                ${isInactive ? "inactive" : ""}`}
                  key={key}
                  disabled={isInactive || isActive || disabled}
                  whileHover={
                    !isInactive && !isActive ? { scale: 1.05 } : { scale: 1.0 }
                  }
                  whileTap={
                    !isInactive && !isActive ? { scale: 0.9 } : { scale: 1.0 }
                  }
                >
                  {key}
                </motion.button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
