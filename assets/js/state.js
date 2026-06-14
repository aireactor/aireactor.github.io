export const state = {
  // simulation
  temperature: 20,
  entropy: 0.1,
  stability: 1.0,
  noise: 0.02,

  // learning system
  learningRate: 0.001,
  batchSize: 32,
  epoch: 0,

  // mode system
  mode: "hybrid",

  // coupling strength between sim ↔ neural
  coupling: 0.5
};