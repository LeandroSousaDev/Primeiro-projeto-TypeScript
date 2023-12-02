export type TUSuario = {
    nome: string
    email: string
    senha: string
}

export abstract class Usuario {
    nome: string
    email: string
    protected senha: string
    protected logado: boolean

    constructor(dados: TUSuario) {
        this.nome = dados.nome
        this.email = dados.email
        this.senha = dados.senha
        this.logado = false
    }

    login(senha: string): void {
        if (senha === this.senha) {
            this.logado = true
            return
        }

        this.logado = false
        return
    }
}