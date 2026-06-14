// webglviz.js
export function startGPUGrid(canvas) {
  const ctx = canvas.getContext("2d");

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;

      ctx.fillStyle = `rgba(0,255,0,${Math.random()})`;
      ctx.fillRect(x, y, 2, 2);
    }

    requestAnimationFrame(loop);
  }

  loop();
}