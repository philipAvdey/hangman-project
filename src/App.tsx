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

  return (
    <div className="app">
      <div className="app__lose-win">Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}

export default App;
