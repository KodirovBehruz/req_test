import {IConnector} from "../../models/delivery/common/IConnector.ts";
import {IProductsActions} from "./ProductsActions/interface.ts";

export interface ICoreService {
    connector: IConnector
    productsActions: IProductsActions
}