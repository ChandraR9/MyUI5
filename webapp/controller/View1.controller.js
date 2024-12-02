sap.ui.define([
    'com/dte/bw/exp/controller/BaseController'
], function(Controller){
    'use strict';
    return Controller.extend("com.dte.bw.exp.controller.View1",{
        onInit: function(){
           // alert('Now we got the App Controller for the Fiori Like App');
           this.oRouter = this.getOwnerComponent().getRouter();
        },
        onNext(myFruitSelected){
            // //get the current view
            // var oView = this.getView();

            // // get the container in which view has been added as a child
            // var oAppCon = oView.getParent();
            // oAppCon.to("idView2");
            debugger;
            this.oRouter.navTo("superman",{
                fruitId: myFruitSelected
            });
        },
        onSelectionChange:function(oEvent){
            debugger;
        }
    });
});