import { state } from "./state.js";

export function stepSimulation() {

  // temperature dynamics
  state.temperature += (state.learningRate * 50);
  state.temperature -= state.stability * 0.3;

  // entropy grows with noise + instability
  state.entropy += state.noise * Math.random();

  // stability decreases with entropy
  state.stability = Math.max(0, 1 - state.entropy);

  // decay / normalization
  state.temperature *= 0.99;

  return state;
}