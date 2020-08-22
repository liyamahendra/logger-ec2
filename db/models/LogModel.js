module.exports = function(sequelize, DataTypes) {
	return sequelize.define(
		"tbl_logs",
		{
			request_id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV1,
				primaryKey: true,
				unique: true,
				allowNull: false
			},

			api_gateway_request_id: {
				type: DataTypes.STRING(64),
				allowNull: true,
				notEmpty: false
			},

			http_method: {
				type: DataTypes.STRING(8),
				allowNull: false,
				notEmpty: true
			},

			request_headers: {
				type: DataTypes.STRING(2048),
				allowNull: false,
				notEmpty: true
			},

			url: {
				type: DataTypes.STRING(1024),
				allowNull: false,
				notEmpty: true
			},

			parameters: {
				type: DataTypes.STRING(4096),
				allowNull: false,
				notEmpty: true
			},

			payload: {
				type: DataTypes.STRING(2048),
				allowNull: false,
				notEmpty: true
			},

			ip_address: {
				type: DataTypes.STRING(16),
				allowNull: true,
				notEmpty: true
			},

			useragent: {
				type: DataTypes.STRING(512),
				allowNull: false,
				notEmpty: true
			},

			request_datetime: {
				type: DataTypes.STRING(32),
				allowNull: true,
				notEmpty: false
			},

			response_statuscode: {
				type: DataTypes.STRING(4),
				allowNull: true,
				notEmpty: false
			},

			response_headers: {
				type: DataTypes.STRING(2048),
				allowNull: true,
				notEmpty: false
			},

			raw_response: {
				type: DataTypes.TEXT("medium"),
				allowNull: true,
				notEmpty: false
			},

			response: {
				type: DataTypes.TEXT("long"),
				allowNull: true,
				notEmpty: false
			},

			response_datetime: {
				type: DataTypes.STRING(32),
				allowNull: true,
				notEmpty: false
			},

			is_error: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: 0
			}
		},
		{
			timestamps: false
		}
	);
};
