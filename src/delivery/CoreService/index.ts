import { ApiConnector } from "../../helpers/connector.ts";
import {ICoreService} from "./interface.ts";
import {IConnector} from "../../models/delivery/common/IConnector.ts";
import {IProductsActions} from "./ProductsActions/interface.ts";
import {ProductsActions} from "./ProductsActions";

export class CoreService implements ICoreService {
    connector: IConnector
    productsActions: IProductsActions

    constructor() {
        this.connector = new ApiConnector("/api")
        this.productsActions = new ProductsActions(this.connector)
    }
}