#pragma strict

function LoadLevel (name: String) {
	Debug.Log("Level: " + name);
	Application.LoadLevel(name);
}

function QuitRequest () {
	Debug.Log("I want to quit");
	Application.Quit();
}