// modes.js
export const MODES = {
  SUPERVISED: "supervised",
  UNSUPERVISED: "unsupervised",
  REINFORCEMENT: "reinforcement"
};

export function transformData(x, y, mode) {
  if (mode === "unsupervised") {
    return { x, y: x }; // autoencoder-style behavior
  }

  if (mode === "reinforcement") {
    return {
      x,
      y: y.map(v => v * Math.random()) // reward shaping simulation
    };
  }

  return { x, y };
}