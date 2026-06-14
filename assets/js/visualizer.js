import { state } from "./state.js";

export function render(canvas) {
  const ctx = canvas.getContext("2d");

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // temperature
    ctx.fillStyle = "red";
    ctx.fillRect(10, 20, state.temperature, 20);

    // entropy
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 60, state.entropy * 50, 20);

    // stability
    ctx.fillStyle = "green";
    ctx.fillRect(10, 100, state.stability * 100, 20);

    requestAnimationFrame(loop);
  }

  loop();
}