import { promisify } from 'util';
import { createClient } from 'redis';


/**
 * Define a RedisClient class that interact with database
 */
class RedisClient {
  /**
  * Initializes the RedisClient instance.
  * - Creates a client to Redis using the `createClient` function.
  * - Tracks the connection state through the `isClientConnected` property.
  * - Attaches event listeners to handle connection and error events:
  *   - On `error`: Logs the error and sets `isClientConnected` to `false`.
  *   - On `connect`: Logs successful connection and sets `isClientConnected` to `true`.
  */
  constructor() {
    this.client = createClient();
    this.isClientConnected = true;
    this.client.on('error', (err) => {
      console.error('Redis client failed to connect:', err.message || err.toString());
      this.isClientConnected = false;
    });
    this.client.on('connect', () => {
      this.isClientConnected = true;
    });

  /**
  * checks if a client is currently connected
  * @returns: (boolen) 'true' if the client is connected; otherwise, 'false'.
  */
 isAlive() {
    return this.isClientConnected;
 }

}
