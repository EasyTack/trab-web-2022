import { Entity } from "./Entity";
import { PackageMovementRecord } from "./PackageMovementRecord";

export class Package extends Entity {
    post_date?: Date
    delivery_date?: Date
    logistic_operator_code?: String
    origin_location?: String
    destination_location?: String;
    status?: String
    packageMovement?: PackageMovementRecord[]
}