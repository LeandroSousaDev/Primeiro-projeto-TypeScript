import { TUSuario, Usuario } from "./Usuario";

export class Aluno extends Usuario {
    notas: number[]

    constructor(dados: TUSuario) {
        super(dados)
        this.notas = []
    }

    obterMedia(): number {
        let total = 0

        for (let nota of this.notas) {
            total += nota
        }

        return total / this.notas.length
    }
}