import "./HangmanWord.scss";

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
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
