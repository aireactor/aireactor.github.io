export const CONFIG = {
  APP_NAME: "AI Reactor Control Dashboard",
  VERSION: "1.0.0",
  DEBUG_MODE: true,
  WEIGHT_DECAY: 0.001,
  LEARNING_RATE_RANGE: [0.0001, 0.1],
  BATCH_SIZE_RANGE: [16, 256],
  EPOCH_COUNT: 100,
  MODES: {
    EXTERNAL: "EXTERNAL",
    TRAINING: "TRAINING",
    EMERGENCY: "EMERGENCY"
  },
  API_ENDPOINTS: {
    COHERENCE_SERVICE: "https://api.openrouter.ai/v1/chat/completions",
    MODEL_REGISTRY: "/api/models"
  },
  THEME: "dark",
  SYSTEM_STABILITY_THRESHOLD: 0.7,
  COMPUTE_LOAD_LIMIT: 90,
  LOG_LEVELS: {
    ERROR: 0,
    WARN: 1,
    INFO: 2,
    DEBUG: 3
  }
};