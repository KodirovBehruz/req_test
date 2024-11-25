import {IProductsActions} from "./interface.ts";
import {IConnector} from "../../../models/delivery/common/IConnector.ts";
import {GetListResponse, IApiResult} from "../../../models/delivery/common/IResultJSON.ts";
import {IProductsResponseContract} from "../../../models/delivery/contracts/IProductsContract.ts";
import {apiRequestWrapper} from "../../../helpers/delivery.ts";
import {HTTP_STATUSES} from "../../../constants/httpsStatuses.ts";

export class ProductsActions implements IProductsActions {
    connector: IConnector
    constructor(connector: IConnector) {
        this.connector = connector;
    }
    products_list = async (): Promise<IApiResult<GetListResponse<IProductsResponseContract>>> => {
        return await apiRequestWrapper(
            this.connector.connector.get("products_list/"),
            HTTP_STATUSES.OK,
        )
    }
}