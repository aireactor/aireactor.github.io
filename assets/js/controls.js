import { state } from "./state.js";

export function setMode(m) {
  state.mode = m;
}

export function setLearningRate(v) {
  state.learningRate = v;
}

export function setNoise(v) {
  state.noise = v;
}

export function setCoupling(v) {
  state.coupling = v;
}