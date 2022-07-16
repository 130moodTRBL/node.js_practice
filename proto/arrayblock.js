"use strict";

const canvas = document.getElementById("arrayblock");
const context = canvas.getContext("2d");
/*블록은 5:3 */
let n = 5;

function clear() {
  for (let i = 0; i < 5; i++) {
    let x = 40 + i * 25;
    let y = 40;
    context.clearRect(x, y, 50 * n, 30 * n); ///
  }
}

function move1() {
  for (let i = 0; i < 5; i++) {
    let x = 40 + i * 25;
    let y = 40;
    context.clearRect(x, y, 50 * n, 30 * n);
  }

  for (let i = 0; i < 5; i++) {
    let x = 50 + i * 25;
    let y = 50;
    context.beginPath();
    context.rect(x, y, 5 * n, 3 * n);
    context.fillStyle = "lightgray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.strokeRect(x, y, 5 * n, 3 * n);
    context.closePath();
  }

  for (let i = 0; i < 5; i++) {
    let x = 60 + i * 25;
    let y = 60;
    context.textAlign = "center";
    context.fillStyle = "red";
    context.fillText(5 - i, x, y);
  }
}

function move2() {
  for (let i = 0; i < 5; i++) {
    let x = 40 + i * 25;
    let y = 40;
    context.clearRect(x, y, 50 * n, 30 * n);
  }

  for (let i = 0; i < 5; i++) {
    let x = 50 + i * 25;
    let y = 50;
    context.beginPath();
    context.rect(x, y, 5 * n, 3 * n);
    context.fillStyle = "lightgray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.strokeRect(x, y, 5 * n, 3 * n);
    context.closePath();
  }

  context.textAlign = "center";
  context.fillStyle = "red";
  context.fillText(4, 60, 60);
  context.fillText(5, 85, 60);
  context.fillText(3, 110, 60);
  context.fillText(2, 135, 60);
  context.fillText(1, 160, 60);
}

function move3() {
  for (let i = 0; i < 5; i++) {
    let x = 40 + i * 25;
    let y = 40;
    context.clearRect(x, y, 50 * n, 30 * n);
  }

  for (let i = 0; i < 5; i++) {
    let x = 50 + i * 25;
    let y = 50;
    context.beginPath();
    context.rect(x, y, 5 * n, 3 * n);
    context.fillStyle = "lightgray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.strokeRect(x, y, 5 * n, 3 * n);
    context.closePath();
  }

  context.textAlign = "center";
  context.fillStyle = "red";
  context.fillText(4, 60, 60);
  context.fillText(3, 85, 60);
  context.fillText(5, 110, 60);
  context.fillText(2, 135, 60);
  context.fillText(1, 160, 60);
}

function move4() {
  for (let i = 0; i < 5; i++) {
    let x = 40 + i * 25;
    let y = 40;
    context.clearRect(x, y, 50 * n, 30 * n);
  }

  for (let i = 0; i < 5; i++) {
    let x = 50 + i * 25;
    let y = 50;
    context.beginPath();
    context.rect(x, y, 5 * n, 3 * n);
    context.fillStyle = "lightgray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.strokeRect(x, y, 5 * n, 3 * n);
    context.closePath();
  }

  context.textAlign = "center";
  context.fillStyle = "red";
  context.fillText(4, 60, 60);
  context.fillText(3, 85, 60);
  context.fillText(2, 110, 60);
  context.fillText(5, 135, 60);
  context.fillText(1, 160, 60);
}

function move5() {
  for (let i = 0; i < 5; i++) {
    let x = 40 + i * 25;
    let y = 40;
    context.clearRect(x, y, 50 * n, 30 * n);
  }

  for (let i = 0; i < 5; i++) {
    let x = 50 + i * 25;
    let y = 50;
    context.beginPath();
    context.rect(x, y, 5 * n, 3 * n);
    context.fillStyle = "lightgray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.strokeRect(x, y, 5 * n, 3 * n);
    context.closePath();
  }

  context.textAlign = "center";
  context.fillStyle = "red";
  context.fillText(4, 60, 60);
  context.fillText(3, 85, 60);
  context.fillText(2, 110, 60);
  context.fillText(1, 135, 60);
  context.fillText(5, 160, 60);
}

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("move1").addEventListener("click", move1);
document.getElementById("move2").addEventListener("click", move2);
document.getElementById("move3").addEventListener("click", move3);
document.getElementById("move4").addEventListener("click", move4);
document.getElementById("move5").addEventListener("click", move5);

let arr = [5, 4, 3, 2, 1];
function test() {
  let i = 0;
  let j = i;
  const start = setInterval(() => {
    step(i, j);
    j++;
    if (j >= 4) {
      j = 0;
      ++i;
    }
    if (i >= 4) clearInterval(start);
  }, 1000);
}

function step(i, j) {
  let temp;
  if (arr[j] > arr[j + 1]) {
    temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
  }

  //블록 그리기
  for (let i = 0; i < 5; i++) {
    let x = 40 + i * 25;
    let y = 40;
    context.clearRect(x, y, 50 * n, 30 * n);
  }

  for (let i = 0; i < 5; i++) {
    let x = 50 + i * 25;
    let y = 50;
    context.beginPath();
    context.rect(x, y, 5 * n, 3 * n);
    context.fillStyle = "lightgray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.strokeRect(x, y, 5 * n, 3 * n);
    context.closePath();
  }

  //글씨 쓰기
  let x = 60;
  for (let i = 0; i < 5; i++) {
    context.textAlign = "center";
    context.fillStyle = "red";
    context.fillText(arr[i], x, 60);
    x += 25;
  }
}

document.getElementById("test").addEventListener("click", test);
