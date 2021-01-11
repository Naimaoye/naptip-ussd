import redis from 'redis';

const client = redis.createClient(6379);
client.on("connect", () => {
    console.error("connected to redis...");
 });

 client.on("ready", () => {
    console.error("connected to redis and ready to use");
 });

 client.on("error", (error) => {
    console.error(error.message);
 });

 client.on("end", () => {
    console.error("client disconnected");
 });

 client.on("ready", () => {
    console.error("connected to redis and ready to use");
 });

 export default client;