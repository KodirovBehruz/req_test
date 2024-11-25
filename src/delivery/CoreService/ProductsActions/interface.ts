import {IConnector} from "../../../models/delivery/common/IConnector.ts";
import {GetListResponse, IApiResult} from "../../../models/delivery/common/IResultJSON.ts";
import {IProductsResponseContract} from "../../../models/delivery/contracts/IProductsContract.ts";

export interface IProductsActions {
    connector: IConnector;

    products_list(): Promise<IApiResult<GetListResponse<IProductsResponseContract>>>
}