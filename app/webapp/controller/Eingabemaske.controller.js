sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], function (BaseController, JSONModel, formatter) {
    "use strict";

    return BaseController.extend("ns.CamFioriApp.controller.Eingabemaske", {

        formatter: formatter,

        /* =========================================================== /
        / lifecycle methods                                           /
        / =========================================================== */

        onNavBack : function() {
            history.go(-1);
            
            /* var sPreviousHash = History.getInstance().getPreviousHash();

			if (sPreviousHash !== undefined) {
				history.go(-1);
			} else {
				this.getRouter().navTo("worklist", {}, true);
			} */
		}        

        /* =========================================================== /
        / internal methods                                            /
        / =========================================================== */
        	
    });
});