import "./HangmanWord.scss";
import { motion } from 'framer-motion';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangmanWord = ({
  reveal = false,
  guessedLetters,
  wordToGuess,
}: HangmanWordProps) => {
  return (
    <div className="app__word">
      {wordToGuess.split("").map((letter, index) => (
        <span key={`${letter}-${index}`} className={`app__word_letter`}>
          <motion.div
            animate={{ opacity: [0,1] }}
            transition={{ duration: 1 }}
          >
          <span
            className={`app__word_letter_${
              guessedLetters.includes(letter) || reveal
                ? "visible"
                : "invisible"
            } ${
              !guessedLetters.includes(letter) && reveal
                ? "red"
                : "black"
            }` }
          >
            {letter}
          </span>
          </motion.div>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
