export async function trainAgent(agent, config) {

  const x = tf.randomNormal([200, 10]);
  const y = tf.oneHot(tf.randomUniform([200], 0, 3, "int32"), 3);

  agent.model.compile({
    optimizer: tf.train.adam(config.lr),
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"]
  });

  const history = await agent.model.fit(x, y, {
    batchSize: config.batch,
    epochs: 2
  });

  agent.accuracy = history.history.acc?.[0] || 0;

  return history;
}