/**
 * Created by Chamberlain on 2/1/2018.
 */
const $$$ = require('bigp-globals');

const COMMANDS = {
	auto() {
		return process.env.NODE_ENV==='prod' ?
			COMMANDS.prod() : COMMANDS.dev();
	},

	dev() {
		return 'dev';
	},

	prod() {
		return 'prod';
	},

	test() {
		return 'test';
	},

	xp() {
		return 'xp';
	}
};

$$$.init({commands: COMMANDS}).then(cmdResult => {
	trace("cmdResult: " + cmdResult.bgWhite.black);
}).catch(err => {
	traceError(err);
});