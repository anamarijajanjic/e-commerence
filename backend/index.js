const app = require("./app");
const http = require("http");
const config = require("dotenv").config();

const server = http.createServer(app);

server.listen(config.PORT);
