import {
  insertControlRod,
  removeControlRod,
  increaseLearningRate,
  decreaseLearningRate,
  runEpoch,
  emergencyShutdown,
  setState
} from "./control.js";

import { loadState, tickSimulation } from "./simcore.js";

let state;
let graph;

async function init() {
  state = await loadState();
  setState(state);

  setInterval(() => {
    state = tickSimulation();
    updateUI();
  }, 1000);
}

function updateUI() {
  document.getElementById("status").innerHTML = `
    TEMP: ${state.temperature.toFixed(2)}°<br>
    RODS: ${state.control_rods}%<br>
    LR: ${state.learning_rate}<br>
    EPOCH: ${state.epoch}<br>
    STATUS: ${state.system_status}
  `;
}

// buttons
window.insertRod = () => insertControlRod();
window.removeRod = () => removeControlRod();
window.boostLR = () => increaseLearningRate();
window.lowerLR = () => decreaseLearningRate();
window.shutdown = () => emergencyShutdown();

window.runEpoch = async () => {
  alert("Epoch simulated (graph learning)");
};

init();