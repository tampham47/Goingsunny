/**
 * gsun2016
 * tw
 */

import mqtt from 'mqtt';
import config from 'config';

var client = mqtt.connect(config.MQTT_URL);

export default client;
