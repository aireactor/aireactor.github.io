// biasTerminal.js
export function analyzeTensor(tensor) {
  const mean = tf.mean(tensor).arraySync();
  const std = tf.moments(tensor).variance.sqrt().arraySync();

  return {
    mean,
    std,
    biasIndicator: mean > 0.5 ? "POSITIVE SHIFT" : "NORMAL"
  };
}