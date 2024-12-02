sap.ui.define([
    'com/dte/bw/exp/controller/BaseController',
    'sap/m/MessageBox',
    'sap/m/MessageToast'
], function(Controller,MessageBox, MessageToast){
    'use strict';
    return Controller.extend("com.dte.bw.exp.controller.View2",{
        onInit: function(){
           // alert('Now we got the App Controller for the Fiori Like App');
        },
        onBack: function(){
            this.getView().getParent().to("idView1");
        },
        onSave: function(){
            MessageBox.confirm("Would you like to Save?",{
                title:"Chandra Confirmation",
               onClose:this.onHandleMessage
            });
        },
        onHandleMessage: function(status){
        
            console.log(status);
            if(status === "OK"){
                MessageToast.show("The oder has been saved");
            }else{
                MessageBox.error("Opps didn't save");
                
            }
            
        }
    });
});