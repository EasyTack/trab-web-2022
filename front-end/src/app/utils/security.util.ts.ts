import { Usuario } from "../model/usuario.model"

export class Security {

    public static set(user: Usuario, token: string){
        const data = JSON.stringify(user)

        localStorage.setItem('user', btoa(data))
        localStorage.setItem('user-token', token)
    }

    public static setUser(user: Usuario){
        const data = JSON.stringify(user)
        localStorage.setItem('user', btoa(data))
    }

    public static setToken(token: string){
        localStorage.setItem('user-token', token)
    }

    public static getUser(): Usuario | null{
        const data = localStorage.getItem('user')

        if(data) return JSON.parse(atob(data))
        else return null
    }

    public static getToken(): string | null{
        const data = localStorage.getItem('user-token')

        if(data) return data
        else return null
    }

    public static hasToken(): boolean {
        if(this.getToken()) return true
        else return false
    }
}