export const controls = {
  lr: 0.001,
  batch: 32,
  noise: 0.01,
  temperature: 20,

  dropout: 0.2,
  decay: 0.01,
  momentum: 0.9,

  agentSwitch: "Alpha",

  mode: "training"
};

export function update(key, value) {
  controls[key] = value;
}