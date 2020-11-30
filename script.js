"use strict";

let player = "X";
let turn = 0;
let xWins = 0;
let oWins = 0;
let playing = true

let buttons = [document.getElementById(`button11`), document.getElementById(`button12`), document.getElementById(`button13`), document.getElementById(`button21`), document.getElementById(`button22`), document.getElementById(`button23`), document.getElementById(`button31`), document.getElementById(`button32`), document.getElementById(`button33`)]


function Placeing(space) {
	if (playing == false) {
		return;
	}
	if (document.getElementById(`button${space}`).classList.contains("usedX") || document.getElementById(`button${space}`).classList.contains("usedO")) {
		return;
	} else {
		document.getElementById(`button${space}`).textContent = player;
		document.getElementById(`button${space}`).classList.add(`used${player}`);
	}
	if (player == "X") {
		player = "O";
		document.getElementById("player").textContent = "Player: O";
	} else {
		player = "X";
		document.getElementById("player").textContent = "Player: X";
	}

	turn++;
	document.getElementById("turn").textContent = `Turn: ${turn}`;
	checkWin();
}

function checkWin() {
	if (buttons[0].classList.contains("usedX") &&
		buttons[1].classList.contains("usedX") &&
		buttons[2].classList.contains("usedX")) {
		buttons[0].classList.add("winningButtons")
		buttons[1].classList.add("winningButtons")
		buttons[2].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[0].classList.contains("usedO") &&
		buttons[1].classList.contains("usedO") &&
		buttons[2].classList.contains("usedO")) {
		buttons[0].classList.add("winningButtons")
		buttons[1].classList.add("winningButtons")
		buttons[2].classList.add("winningButtons")
		winner("O");
		return;
	}
	if (buttons[3].classList.contains("usedX") &&
		buttons[4].classList.contains("usedX") &&
		buttons[5].classList.contains("usedX")) {
		buttons[3].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[5].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[3].classList.contains("usedO") &&
		buttons[4].classList.contains("usedO") &&
		buttons[5].classList.contains("usedO")) {
		buttons[3].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[5].classList.add("winningButtons")
		winner("O");
		return;
	}
	if (buttons[6].classList.contains("usedX") &&
		buttons[7].classList.contains("usedX") &&
		buttons[8].classList.contains("usedX")) {
		buttons[6].classList.add("winningButtons")
		buttons[7].classList.add("winningButtons")
		buttons[8].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[6].classList.contains("usedO") &&
		buttons[7].classList.contains("usedO") &&
		buttons[8].classList.contains("usedO")) {
		buttons[6].classList.add("winningButtons")
		buttons[7].classList.add("winningButtons")
		buttons[8].classList.add("winningButtons")
		winner("O");
		return;
	}


	if (buttons[0].classList.contains("usedX") &&
		buttons[3].classList.contains("usedX") &&
		buttons[6].classList.contains("usedX")) {
		buttons[0].classList.add("winningButtons")
		buttons[3].classList.add("winningButtons")
		buttons[6].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[0].classList.contains("usedO") &&
		buttons[3].classList.contains("usedO") &&
		buttons[6].classList.contains("usedO")) {
		buttons[0].classList.add("winningButtons")
		buttons[3].classList.add("winningButtons")
		buttons[6].classList.add("winningButtons")
		winner("O");
		return;
	}
	if (buttons[1].classList.contains("usedX") &&
		buttons[4].classList.contains("usedX") &&
		buttons[7].classList.contains("usedX")) {
		buttons[1].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[7].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[1].classList.contains("usedO") &&
		buttons[4].classList.contains("usedO") &&
		buttons[7].classList.contains("usedO")) {
		buttons[1].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[7].classList.add("winningButtons")
		winner("O");
		return;
	}
	if (buttons[2].classList.contains("usedX") &&
		buttons[5].classList.contains("usedX") &&
		buttons[8].classList.contains("usedX")) {
		buttons[2].classList.add("winningButtons")
		buttons[5].classList.add("winningButtons")
		buttons[8].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[2].classList.contains("usedO") &&
		buttons[5].classList.contains("usedO") &&
		buttons[8].classList.contains("usedO")) {
		buttons[2].classList.add("winningButtons")
		buttons[5].classList.add("winningButtons")
		buttons[8].classList.add("winningButtons")
		winner("O");
		return;
	}


	if (buttons[0].classList.contains("usedX") &&
		buttons[4].classList.contains("usedX") &&
		buttons[8].classList.contains("usedX")) {
		buttons[0].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[8].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[0].classList.contains("usedO") &&
		buttons[4].classList.contains("usedO") &&
		buttons[8].classList.contains("usedO")) {
		buttons[0].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[8].classList.add("winningButtons")
		winner("O");
		return;
	}
	if (buttons[2].classList.contains("usedX") &&
		buttons[4].classList.contains("usedX") &&
		buttons[6].classList.contains("usedX")) {
		buttons[2].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[6].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[2].classList.contains("usedO") &&
		buttons[4].classList.contains("usedO") &&
		buttons[6].classList.contains("usedO")) {
		buttons[2].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[6].classList.add("winningButtons")
		winner("O");
		return;
	}

	if (turn == 9) {
        document.getElementById("player").textContent = "DRAW";
        document.getElementById("player").classList.add("draw")
	}
}

function winner(winner) {
    document.getElementById("player").textContent = "WINNER";
    document.getElementById("player").classList.add("Winner")
	document.getElementsByClassName("button");
	if (winner == "X") {
		xWins++;
		document.getElementById("xWins").textContent = `X - ${xWins} wins`;
	} else if (winner == "O") {
		oWins++;
		document.getElementById("oWins").textContent = `O - ${oWins} wins`;
	}
	playing = false
}

function restart() {
	for (let i = 0; i < 9; i++) {
		document.getElementsByClassName("button")[i].textContent = ""
		document.getElementsByClassName("button")[i].classList.remove("winningButtons")

	}
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].textContent = ""
		buttons[i].classList.remove("usedX")
		buttons[i].classList.remove("usedO")
	}
	playing = true
	turn = 0
	player = "X"
	document.getElementById("player").textContent = `Player: ${player}`
	document.getElementById("turn").textContent = `Turn: ${turn}`
}