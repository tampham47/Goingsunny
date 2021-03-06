let config = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://api.goingsunny.com/api/v1',
  API_IMAGE_URL: 'https://api.goingsunny.com/uploads',
  MQTT_URL: process.env.MQTT_URL || 'wss://broker.goingsunny.com',
  // MQTT_URL: process.env.MQTT_URL || 'ws://localhost:5551',
}

export default config;
