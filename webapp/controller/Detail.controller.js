sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zprojectteste0407.controller.Detail", {
            onInit: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("RouteDetail").attachPatternMatched(this._onPatternMatched, this); // 패턴이 맞으면 onPatternmatched를 실행해라(_는 함수안에서만 사용하는거라고 암묵적인룰)
            },
            _onPatternMatched: function(oEvent){
                //oEvent.getParametrs().arguments
                oEvent.getParameter("arguments");
                console.log(oArgu);
            },
            onNavButtonPress: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteMain", {}, true);
                // navTo(1,2,3)
                //      1: Router Name
                //      2: Parameters (전달해야할 값 등록해서 사용할 수 있음)
                //      3: Route History Clear (라우트 히스토리 클리어할건지)
            },
            
        });
    });