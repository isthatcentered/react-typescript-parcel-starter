module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: "<rootDir>/src/testsSetup.ts",
  	moduleNameMapper: {
		"\\.(css|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jestEmptyModule.js",
	},
};
