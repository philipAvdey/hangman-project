/* 
To do after initial completion:
- make the visuals nicer
- add animations and fading in/out for various things
- make it work for mobile and nonmobile devices with media queries 

*/

import { useCallback, useEffect, useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing/HangmanDrawing";
import Keyboard from "./components/Keyboard/Keyboard";
import HangmanWord from "./components/HangmanWord/HangmanWord";

import words from "./wordsList.json";
import "./App.scss";

const getWord = () => words[Math.floor(Math.random() * words.length)];

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) {
        return;
      } else {
        setGuessedLetters((currentLetters) => [...currentLetters, letter]);
      }
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) {
        return;
      } else {
        e.preventDefault();
        addGuessedLetter(key);
      }
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") {
        return;
      } else {
        e.preventDefault();
        setGuessedLetters([]);
        setWordToGuess(getWord());
      }
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className="app">
      <div className="app__lose-win">
        {!isWinner && !isLoser && (
          <div className="app__lose-win_txt">
            <p className="app__lose-win_txt_header">
              Type in or click your guesses!
            </p>
            <p className="app__lose-win_txt_footer">
              You can hit Enter if you want a new word.
            </p>
          </div>
        )}
        <div className="app__lose-win_congrats-button">
          {isWinner && <p className="app__lose-win_txt_header">Great job!</p>}
          {isLoser && <p className="app__lose-win_txt_header">Loser!</p>}
          {(isWinner || isLoser) && (
            <button
              onClick={() => {
                setGuessedLetters([]);
                setWordToGuess(getWord());
              }}
            >
              Play Again
            </button>
          )}
        </div>
        {(isWinner || isLoser) && (
          <p className="app__lose-win_txt_footer invisible spacer">
            You can hit Enter if you want a new word.
          </p>
        )}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div className="app__keyboard">
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
