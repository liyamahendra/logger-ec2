module.exports = {
	name: "Request Logger Service",
	env: process.env.NODE_ENV || "qa",
	port: process.env.PORT || 8011,
	base_url: process.env.BASE_URL || "http://localhost:" + this.port,
	debug: process.env.DEBUG || true
};
