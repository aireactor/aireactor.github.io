export function createModel() {
  const model = tf.sequential();

  model.add(tf.layers.dense({ units: 64, activation: "relu", inputShape: [10] }));
  model.add(tf.layers.dense({ units: 64, activation: "relu" }));
  model.add(tf.layers.dense({ units: 3, activation: "softmax" }));

  return model;
}