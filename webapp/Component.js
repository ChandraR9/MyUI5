sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent){
    'use strict';
    return UIComponent.extend("com.dte.bw.exp.Component", {
        metadata:{
            manifest: "json"
        },
        init: function(){
            //Here we will call the parent class constructor
            // is the standard SAP UI5 module.
            UIComponent.prototype.init.apply(this);

            //Get the router object from the parent class
            var oRouter = this.getRouter();
            oRouter.initialize();// it will scan for configuration 
        },
        // createContent: function () {
        //     var oRootView = new sap.ui.view({
        //         viewName: "com.dte.bw.exp.view.App",
        //         type: "XML",
        //         id: "idAppView"

        //     });

        //     //Create the view objects 
        //     var oView1 = new sap.ui.view({
        //         viewName : "com.dte.bw.exp.view.View1",
        //         type : "XML",
        //         id: "idView1"
        //     });

        //     var oView2 = new sap.ui.view({
        //         viewName : "com.dte.bw.exp.view.View2",
        //         type : "XML",
        //         id: "idView2"
        //     });

        //     //Adding pages to the App Container
        //     var oAppCon = oRootView.byId("idAppCon");

        //     //Add views inside the AppCon
        //     oAppCon.addMasterPage(oView1).addDetailPage(oView2);

        //     return oRootView;
        // },
        destroy: function(){

        }
    });
});