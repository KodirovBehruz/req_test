import { CoreService } from "./CoreService"
import {IDelivery} from "./interface.ts";
import {ICoreService} from "./CoreService/interface.ts";


class Delivery implements IDelivery {
    CS: ICoreService

    constructor() {
        this.CS = new CoreService()
    }
}

export const delivery = new Delivery()