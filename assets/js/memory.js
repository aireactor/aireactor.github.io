// memory.js
export class ReplayBuffer {
  constructor(maxSize = 10000) {
    this.maxSize = maxSize;
    this.buffer = [];
  }

  add(x, y, reward = 1) {
    this.buffer.push({ x, y, reward });

    if (this.buffer.length > this.maxSize) {
      this.buffer.shift();
    }
  }

  sample(batchSize) {
    return this.buffer
      .sort(() => Math.random() - 0.5)
      .slice(0, batchSize);
  }
}