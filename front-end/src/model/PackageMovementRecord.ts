import { Entity } from "./Entity";

export class PackageMovementRecord extends Entity {
    movement_date?: Date
    origin_location?: String
    destination_location?: String
    status?: String
}