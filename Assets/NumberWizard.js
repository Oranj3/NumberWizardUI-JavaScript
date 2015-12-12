#pragma strict

import UnityEngine.UI;

private var MAX_ALLOWED: int = 1000+1;
private var MIN_ALLOWED: int = 1;

private var max: int;
private var min: int;
private var guess: int;

public var maxGuessesAllowed: int = 10;
public var text: Text;

private function Start() {
  StartGame();
}

private function StartGame() {
  max = MAX_ALLOWED;
  min = MIN_ALLOWED;
  guess = 500;
  max++;
}

private function NextGuess() {
  guess = Random.Range(min, max+1);
  if (guess == MAX_ALLOWED || guess == MIN_ALLOWED) {
  	Application.LoadLevel("Lose");
  }
  text.text = guess.ToString();
  maxGuessesAllowed--;
  if (maxGuessesAllowed <= 0) {
  	Application.LoadLevel("Win");
  }

}

public function GuessHigher() {
	min = guess;
	NextGuess();
}

public function GuessLower() {
	max = guess;
    NextGuess();
}

public function Correct() {
	Application.LoadLevel("Lose");
}