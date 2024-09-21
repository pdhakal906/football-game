// Player movement control
const player = document.getElementById("player");
const ball = document.getElementById("ball");

document.addEventListener("keydown", (e) => {
  let playerPos = player.getBoundingClientRect();
  let ballPos = ball.getBoundingClientRect();

  switch (e.key) {
    case "ArrowUp":
      if (playerPos.top > 0) player.style.top = playerPos.top - 10 + "px";
      break;
    case "ArrowDown":
      if (playerPos.bottom < window.innerHeight) player.style.top = playerPos.top + 10 + "px";
      break;
    case "ArrowLeft":
      if (playerPos.left > 0) player.style.left = playerPos.left - 10 + "px";
      break;
    case "ArrowRight":
      if (playerPos.right < window.innerWidth) player.style.left = playerPos.left + 10 + "px";
      break;
  }
});

// Ball movement
document.addEventListener("keydown", (e) => {
  let ballPos = ball.getBoundingClientRect();

  switch (e.key) {
    case "w":
      if (ballPos.top > 0) ball.style.top = ballPos.top - 10 + "px";
      break;
    case "s":
      if (ballPos.bottom < window.innerHeight) ball.style.top = ballPos.top + 10 + "px";
      break;
    case "a":
      if (ballPos.left > 0) ball.style.left = ballPos.left - 10 + "px";
      break;
    case "d":
      if (ballPos.right < window.innerWidth) ball.style.left = ballPos.left + 10 + "px";
      break;
  }
});
