const LogsController = require("../logs/LogsController");

var Routes = {
	init: function(router) {
		router.get("/logger/health-check", function(req, res) {
			res.status(200).send({ message: "available" });
		});

		router.post("/logger/log-request", function(req, res) {
			LogsController.logRequest(req, res);
		});

		router.patch("/logger/log-response", function(req, res) {
			LogsController.logResponse(req, res);
		});

		router.get("/logger/timeouts", function(req, res) {
			LogsController.getTimedoutLogEntries(req, res);
		});
	}
};

module.exports = Routes;
