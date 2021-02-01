/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ovly/app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
