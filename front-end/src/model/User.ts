import { Configuration } from "./Configuration"
import { Person } from "./Person"

export class User extends Person {
    user: String = ''
    password: String = ''
    configutation: Configuration = new Configuration()
}