const AppPackage = require('../package.json');

module.exports = function (environment) {
	const ENV = {
		modulePrefix: AppPackage.name,
		podModulePrefix: AppPackage.name + '/pods',
		environment,
	};
	return ENV;
};
