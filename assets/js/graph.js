export let history = [];

export function push(acc) {
  history.push(acc);
  if (history.length > 50) history.shift();
}

export function draw(canvas) {
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, 500, 200);

  ctx.beginPath();
  history.forEach((v, i) => {
    ctx.lineTo(i * 10, 200 - v * 200);
  });

  ctx.strokeStyle = "#0f0";
  ctx.stroke();
}