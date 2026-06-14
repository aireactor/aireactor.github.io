export let config = {
  batchSize: 32,
  learningRate: 0.001,
  dropoutRate: 0.2,
  weightDecay: 0.01,
  epochs: 5
};

export function updateParam(key, value) {
  config[key] = value;
}