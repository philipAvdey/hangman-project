import "./HangmanWord.scss";

const word = "test";
const guessedLetters = [""];
const HangmanWord = () => {
  return (
    <div className="app__word">
      {word.split("").map((letter, index) => (
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
