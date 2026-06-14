export const state = {
  temperature: 20,
  entropy: 0.1,
  stability: 1.0,

  growthRate: 0.05,
  decayRate: 0.02,
  noise: 0.01,

  mode: "linear",

  matrix: Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => Math.random())
  )
};