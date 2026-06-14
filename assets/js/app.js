import { agents } from "./agents.js";
import { trainAgent } from "./trainer.js";
import { state, stepSim } from "./simulator.js";
import { push, draw } from "./graphs.js";
import { renderField } from "./webgl.js";
import { controls } from "./controls.js";

let selected = agents[0];

async function init() {
  renderField(document.getElementById("field"));

  setInterval(async () => {

    stepSim();

    await trainAgent(selected, controls);

    push(selected.accuracy);
    draw(document.getElementById("graph"));

    document.getElementById("stats").innerHTML = `
      TEMP: ${state.temperature.toFixed(2)}<br>
      ENTROPY: ${state.entropy.toFixed(2)}<br>
      ACC: ${selected.accuracy.toFixed(3)}
    `;

  }, 1500);
}

window.trainAll = async () => {
  for (const a of agents) {
    await trainAgent(a, controls);
  }
};

window.switchAgent = (name) => {
  selected = agents.find(a => a.name === name);
};

init();