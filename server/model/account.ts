export class Account{
    readonly id: number
    name: string
    email: string
    admin: boolean
    password: string | undefined

    constructor(data: {
        id: number
        name: string
        email: string
        admin?: boolean
        password?: string
    }) {
        this.id = data.id
        this.name = data.name
        this.email = data.email
        this.admin = data.admin ?? false
        this.password = data.password
    }
}
