import { Entity } from "./Entity"

export abstract class Person extends Entity {
    first_name: String = ''
    last_name: String = ''
    legal_document: String = ''
}