export function renderField(canvas) {
  const ctx = canvas.getContext("2d");

  function loop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 200; i++) {
      ctx.fillStyle = `rgba(0,255,0,${Math.random()})`;
      ctx.fillRect(Math.random()*500, Math.random()*200, 2, 2);
    }

    requestAnimationFrame(loop);
  }

  loop();
}