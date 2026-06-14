import { state } from "./state.js";

export function applyNeuralToSimulation(loss, accuracy) {

  // bad training → system becomes unstable
  state.entropy += loss * 0.1;

  // good training → stabilizes system
  state.stability += accuracy * 0.05;

  // clamp
  state.stability = Math.min(1, state.stability);
}

export function applySimulationToNeural() {

  // unstable system slows learning
  if (state.temperature > 50) {
    state.learningRate *= 0.95;
  }

  // high entropy increases randomness in training
  if (state.entropy > 0.5) {
    state.noise += 0.01;
  }
}