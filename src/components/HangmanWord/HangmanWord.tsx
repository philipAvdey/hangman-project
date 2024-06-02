import "./HangmanWord.scss";

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
}


const HangmanWord = ({ guessedLetters, wordToGuess } : HangmanWordProps) => {
  return (
    <div className="app__word">
      {wordToGuess.split("").map((letter, index) => (
        <span key={`${letter}-${index}`} className={`app__word_letter`}>
          <span
            className={`app__word_letter_${
              guessedLetters.includes(letter) ? "visible" : "invisible"
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
