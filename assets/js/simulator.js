export const state = {
  temperature: 20,
  entropy: 0.1,
  stability: 1,
  noise: 0.01
};

export function stepSim() {
  state.temperature += Math.random() * 2;
  state.entropy += state.noise;
  state.stability = 1 - state.entropy * 0.1;

  return state;
}