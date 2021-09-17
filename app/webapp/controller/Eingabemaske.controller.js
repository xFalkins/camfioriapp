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
 	
	    
	/**
	* Event handler sending new kreditlimit to CAM
	* 
	* @public
	*/    
	sendCAM : function() {
            	var name = this.getView().byId("input_name").getValue();
		var kundennr = this.getView().byId("input_kundennr").getValue();
            	var limithoehe = this.getView().byId("input_limithoehe").getValue();
            	var befristung = this.getView().byId("picker_befristung").getValue();
            	var bemerkung = this.getView().byId("area_bemerkung").getValue();
		var rating;
		var status;

		var kundennummerStart = kundennr.charAt(0);

		if(kundennr == "" || limithoehe == "" || befristung == "")
		{
			alert("Bitte füllen Sie alle Felder aus!");
		}
		else if(isNaN(kundennr))
		{
			alert("Bitte überprüfen Sie die Eingabe!");
		}
		else{
			// Limit voll genehmigt
			if( kundennummerStart == '0' || kundennummerStart == '1' || kundennummerStart == '2' )
			{
				status = "genehmigt";
				rating = "BB+"
			}
			// Limit zur Hälfte genehmigt
			else if( kundennummerStart == '3' || kundennummerStart == '4' || kundennummerStart == '5' )
			{
				status = "genehmigt";
				limithoehe = Long.parseLong(limithoehe) / 2;
				rating = "C-"
			}
			// Limit in Bearbeitung
			else if( kundennummerStart == '6' || kundennummerStart == '7' )
			{
				status = "in Bearbeitung";
				limithoehe = 0;
				rating = "B+"
			}
			// Limit abgelehnt
			else if( kundennummerStart == '8' || kundennummerStart == '9' )
			{
				status = "abgelehnt";
				limithoehe = 0;
				rating = "D"
			}
			// Limit voll genehmigt mit AA+
			else
			{
				Status = "genehmigt";
				Limit = Limit;
				rating = "AA+"
			} 

			var testJSON = JSON.stringify([rating, befristung, limithoehe, bemerkung, status, kundennr]);
				
			//Bestätigung
			alert("Anfrage erfolgreich an CAM gesendet!");
			// Hier fehlt das Updaten der Datenbank
			
			// Senden an Worklist + Reload
			var oRouter=sap.ui.core.UIComponent.getRouterFor(this);             
			oRouter.navTo("worklist");
			location.reload();
		}
        },
	    
	/**
	* Event handler for navigating back.
	* Navigate back in the browser history
	* @public
	*/    
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
