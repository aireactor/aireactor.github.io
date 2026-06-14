export async function createModel() {
  const model = tf.sequential();

  model.add(tf.layers.dense({
    units: 64,
    activation: "relu",
    inputShape: [10]
  }));

  model.add(tf.layers.dropout({ rate: 0.3 }));

  model.add(tf.layers.dense({
    units: 3,
    activation: "softmax"
  }));

  return model;
}

export async function trainModel(model, state) {

  const x = tf.randomNormal([200, 10]);

  // simulation affects labels slightly (BRIDGE EFFECT)
  const noiseFactor = state.temperature * 0.01;

  const y = tf.oneHot(
    tf.randomUniform([200], 0, 3, "int32"),
    3
  ).mul(1 - noiseFactor);

  model.compile({
    optimizer: tf.train.adam(state.learningRate),
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"]
  });

  return await model.fit(x, y, {
    batchSize: state.batchSize,
    epochs: 3
  });
}