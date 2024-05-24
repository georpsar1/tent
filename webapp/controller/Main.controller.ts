import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace tent.controller
 */
export default class Main extends BaseController {
	public sayHello(): void {
		MessageBox.show("Hello World!");
	}

	onInit(): void {
		var oModel = new JSONModel(sap.ui.require.toUrl("tent/model/data.json"));
		this.getView().setModel(oModel);
		
	}
}
