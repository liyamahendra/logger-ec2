var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

var server = express();
server.use(bodyParser.json({ limit: "1mb" }));
server.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));
server.use("/", router);

const config = require("./config/config");
const Routes = require("./routes");

Routes.init(router);

server.listen(config.port, () => {
	console.log(`[${config.env}] Server is listening on port ${config.port}...`);
	server.timeout = 30000; // 30 seconds
});
