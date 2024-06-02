/* 
To do after initial completion:
- make the visuals nicer
- add animations and fading in/out for various things
- make it work for mobile and nonmobile devices with media queries 

*/

import { useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing/HangmanDrawing";
import Keyboard from "./components/Keyboard/Keyboard";
import HangmanWord from "./components/HangmanWord/HangmanWord";

import words from "./wordsList.json";
import "./App.scss";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  return (
    <div className="app">
      <div className="app__lose-win">Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div className="app__keyboard">
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
