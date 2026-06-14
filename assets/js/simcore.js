let state;
let graph;

export async function loadState() {
  const res = await fetch("data/reactor_state.json");
  state = await res.json();
  return state;
}

export function tickSimulation() {
  // temperature rises with memory growth
  state.temperature += graph.nodes.length * 0.01;

  // control rods reduce temperature
  state.temperature -= state.control_rods * 0.05;

  // clamp
  state.temperature = Math.max(0, state.temperature);

  // system status
  if (state.temperature > 80) {
    state.system_status = "CRITICAL";
  } else if (state.temperature > 50) {
    state.system_status = "UNSTABLE";
  } else {
    state.system_status = "STABLE";
  }

  return state;
}