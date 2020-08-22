"use strict";

var env = process.env.NODE_ENV || "qa";
var Sequelize = require("sequelize");
var databaseConfig = require("../config/database.json")[env];
var LogModel = require("./models/LogModel");

const sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
	host: databaseConfig.host,
	port: databaseConfig.port,
	dialect: databaseConfig.dialect,
	logging: false,
	define: {
		timestamps: false
	},
	pool: {
		max: 10,
		min: 1,
		idle: 10000,
		evict: 20000,
		acquire: 20000
	}
});

const Log = LogModel(sequelize, Sequelize);

var SyncWrapper = {
	syncDatabase: function() {
		//*******************//
		// Sync the database //
		//*******************//

		console.log("sync started at: " + new Date());
		try {
			sequelize
				.sync({ force: true, logging: console.log })
				.then(function() {
					console.log("sync ended at: " + new Date());
				})
				.catch(function(err) {
					console.log("Error while syncing the database: " + err);
				});
		} catch (error) {
			console.log("error: " + JSON.stringify(error));
		}
	}
};

module.exports = {
	sequelize,
	SyncWrapper,
	Log
};
