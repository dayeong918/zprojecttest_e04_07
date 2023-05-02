sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("zprojectteste0407.controller.App", {
        onInit() {
        },
        onButtonPress: function() {
          //버튼 클릭 시 Detail 화면으로 이동
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteDetail");
        }
      });
    }
  );
  