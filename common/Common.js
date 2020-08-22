var moment = require("moment");
var Utils = require("../utils/Utils");
const config = require("../config/config");

var Common = {
	sendSuccessResponse: function(req, res, message) {
		this.logMessage(req, res, null, null, 200, message, null);
		res.set("Content-Type", "application/json");
		res.status(200).send({ message: message });
	},
	sendPostSuccessResponse: function(req, res, idToReturn, message) {
		this.logMessage(req, res, idToReturn, null, 201, message, null);
		res.set("Content-Type", "application/json");
		res.set("Location", idToReturn);
		res.status(201).send({ message: message });
	},
	sendPostSuccessResponseWithNewEntity: function(req, res, idToReturn, data) {
		this.logMessage(req, res, idToReturn, null, 201, null, data);
		res.set("Content-Type", "application/json");
		res.set("Location", idToReturn);
		res.status(201).send(data);
	},
	sendSuccessResponseWithData: function(req, res, key, data) {
		this.logMessage(req, res, null, null, 200, null, data);
		res.set("Content-Type", "application/json");
		res.status(200).send({ [key]: data });
	},
	sendSuccessResponseWithDetailsData: function(req, res, data) {
		this.logMessage(req, res, null, null, 204, null, data);
		res.set("Content-Type", "application/json");
		res.status(200).send(data);
	},
	sendSuccessResponseWithoutData: function(req, res) {
		this.logMessage(req, res, null, null, 204, null, null);
		res.set("Content-Type", "application/json");
		res.status(204).send({});
	},
	sendInvalidSessionIdResponse: function(req, res, message) {
		this.logMessage(req, res, null, "INVALID_SESSION_ID", 401, message, null);
		res.set("Content-Type", "application/json");
		let data = { error_code: "INVALID_SESSION_ID", message: message };
		res.status(401).send(data);
	},
	sendMalformedQueryErrorResponse: function(req, res, message) {
		this.logMessage(req, res, null, "MALFORMED_QUERY", 400, message, null);
		res.set("Content-Type", "application/json");
		let data = { error_code: "MALFORMED_QUERY", message: message };
		res.status(400).send(data);
	},
	sendBadRequestErrorResponse: function(req, res, message) {
		this.logMessage(req, res, null, "MISSING_FIELD", 400, message, null);
		res.set("Content-Type", "application/json");
		let data = { error_code: "MISSING_FIELD", message: message };
		res.status(400).send(data);
	},
	sendInvalidValueBadRequestErrorResponse: function(req, res, message) {
		this.logMessage(req, res, null, "INVALID_VALUE", 400, message, null);
		res.set("Content-Type", "application/json");
		let data = { error_code: "INVALID_VALUE", message: message };
		res.status(400).send(data);
	},
	sendInvalidTypeBadRequestErrorResponse: function(req, res, message) {
		this.logMessage(req, res, null, "INVALID_TYPE", 400, message, null);
		res.set("Content-Type", "application/json");
		let data = { error_code: "INVALID_TYPE", message: message };
		res.status(400).send(data);
	},
	sendConstraintErrorResponse: function(req, res, message) {
		this.logMessage(req, res, null, "CONSTRAINT_ERROR", 409, message, null);
		res.set("Content-Type", "application/json");
		let data = { error_code: "CONSTRAINT_ERROR", message: message };
		res.status(409).send(data);
	},
	sendUrlNotFoundErrorResponse: function(req, res) {
		this.logMessage(req, res, null, "NOT_FOUND", 404, "The requested API doesn't exists, please check your URL and try again.", null);
		res.set("Content-Type", "application/json");
		let data = { error_code: "NOT_FOUND", message: "The requested API doesn't exists, please check your URL and try again." };
		res.status(404).send(data);
	},
	sendNotFoundErrorResponse: function(req, res, message) {
		this.logMessage(req, res, null, "NOT_FOUND", 404, message, null);
		res.set("Content-Type", "application/json");
		let data = { error_code: "NOT_FOUND", message: message };
		res.status(404).send(data);
	},
	sendMethodNotAllowedErrorResponse: function(req, res, message) {
		this.logMessage(req, res, null, "NOT_ALLOWED", 405, message, null);
		res.set("Content-Type", "application/json");
		let data = { error_code: "NOT_ALLOWED", message: message };
		res.status(405).send(data);
	},
	sendNotAllowedErrorResponse: function(req, res, message) {
		this.logMessage(req, res, null, "NOT_ALLOWED", 405, message, null);
		res.set("Content-Type", "application/json");
		let data = { error_code: "NOT_ALLOWED", message: message };
		res.status(405).send(data);
	},
	sendGenericErrorResponse: function(req, res, message) {
		this.logMessage(req, res, null, "FAILED", 500, message, null);
		res.set("Content-Type", "application/json");
		let data = { error_code: "FAILED", message: message };
		res.status(500).send(data);
	},
	logMessage: function(req, res, idToReturn, errorCode, statusCode, message, data) {
		var env = config.env;
		if (env.toLowerCase() == "qa") {
			console.log("===========================================");
			console.log("time: " + moment().format("YYYY-MM-DDTHH:mm:ss.SSS"));
			console.log("req: " + req.url);
			console.log("method: " + req.method);
			console.log("HTTP Status: " + statusCode);

			if (!Utils.isNullOrEmpty(errorCode)) {
				console.log("Error code: " + errorCode);
			}
			if (!Utils.isNullOrEmpty(idToReturn)) {
				console.log("Location: " + idToReturn);
			}
			if (!Utils.isNullOrEmpty(message)) {
				console.log("message: " + message);
			}
			if (!Utils.isNullOrEmpty(data)) {
				console.log("data: " + JSON.stringify(data));
			}
			console.log("===========================================");
			console.log("\n");
		}
	}
};

module.exports = Common;
