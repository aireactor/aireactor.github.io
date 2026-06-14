// trainer.js
export async function train(model, data, config, mode) {

  let optimizer = tf.train.adam(config.learningRate);

  model.compile({
    optimizer,
    loss: mode === "reinforcement"
      ? "meanSquaredError"
      : "categoricalCrossentropy",
    metrics: ["accuracy"]
  });

  return await model.fit(data.x, data.y, {
    batchSize: config.batchSize,
    epochs: config.epochs,
    shuffle: true,
    validationSplit: 0.2,
    callbacks: [
      tf.callbacks.earlyStopping({
        monitor: "loss",
        patience: config.patience
      })
    ]
  });
}