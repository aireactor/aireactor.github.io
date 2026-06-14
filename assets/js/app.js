import { state } from "./state.js";
import { createModel, trainModel } from "./neural.js";
import { stepSimulation } from "./simulator.js";
import { applyNeuralToSimulation, applySimulationToNeural } from "./bridge.js";
import { render } from "./visualizer.js";

let model;

async function init() {
  await tf.setBackend("webgl");
  await tf.ready();

  model = await createModel();

  const canvas = document.getElementById("canvas");
  render(canvas);

  // main loop
  setInterval(async () => {

    // 1. simulation step
    stepSimulation();

    // 2. neural training step
    const result = await trainModel(model, state);

    const loss = result.history.loss[0];
    const acc = result.history.acc?.[0] || 0;

    // 3. bridge interaction
    applyNeuralToSimulation(loss, acc);
    applySimulationToNeural();

    console.log("STATE:", state);

  }, 2000);
}

window.setLearningRate = (v) => state.learningRate = v;
window.setNoise = (v) => state.noise = v;
window.setCoupling = (v) => state.coupling = v;

init();