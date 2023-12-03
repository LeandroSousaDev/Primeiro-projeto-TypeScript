import { Aluno } from "./Aluno"
import { Professor } from "./Professor"

const joao = {
    nome: 'João',
    email: 'joao@email.com',
    senha: '12345'
}

const maria = {
    nome: 'Maria',
    email: 'maria@email.com',
    senha: '12345'
}

const ana = {
    nome: 'Ana',
    email: 'ana@email.com',
    senha: '12345'
}

const professoraAna = new Professor(ana, 'Matematica')
const alunoJoao = new Aluno(joao)
const alunaMaria = new Aluno(maria)

professoraAna.login('12345')

professoraAna.lancarNota(alunoJoao, 10)
professoraAna.lancarNota(alunoJoao, 7)
professoraAna.lancarNota(alunoJoao, 8)



professoraAna.lancarNota(alunaMaria, 5)
professoraAna.lancarNota(alunaMaria, 9)
professoraAna.lancarNota(alunaMaria, 8)

console.log('Joao', alunoJoao.notas)
console.log('Joao', alunoJoao.obterMedia())

console.log('Maria', alunaMaria.notas)
console.log('Maria', alunaMaria.obterMedia())