import { tickSimulation } from "./simcore.js";

export let state;

export function setState(s) {
  state = s;
}

export function insertControlRod() {
  state.control_rods += 5;
  if (state.control_rods > 100) state.control_rods = 100;
}

export function removeControlRod() {
  state.control_rods -= 5;
  if (state.control_rods < 0) state.control_rods = 0;
}

export function increaseLearningRate() {
  state.learning_rate += 0.01;
}

export function decreaseLearningRate() {
  state.learning_rate -= 0.01;
  if (state.learning_rate < 0) state.learning_rate = 0;
}

export function runEpoch(graph) {
  state.epoch++;

  // simulate learning = strengthen edges
  graph.edges.forEach(e => {
    e.strength += state.learning_rate;
    if (e.strength > 1) e.strength = 1;
  });

  return graph;
}

export function emergencyShutdown() {
  state.control_rods = 100;
  state.learning_rate = 0;
  state.system_status = "SHUTDOWN";
}