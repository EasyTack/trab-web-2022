import { Entity } from "./Entity";

export class Configuration extends Entity {
    automatic_update: boolean = false
    order_type: number = 0
    update_interval: number = 1
    update_business_hour: boolean = false
}