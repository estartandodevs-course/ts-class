import './style.css'
// const nome: string = 'Daniel'
// const nota: number = 10
// // Inferência de tipo
// const marca = "Audi"

// let profissao: string | number;

// profissao = 'Developer'
// profissao = 10

const listaDeCompras: { nome: string }[] = []

listaDeCompras.push({ nome: 'Luan '})

type Endereco = {
    cidade: string,
    rua: string
    numero?: number,
}

type Usuario = {
    id: number;
    nome: string,
    idade: number,
    profissao: string,
    endereco: Endereco,
}

const usuario: Usuario = {
    id: 10,
    nome: "Igor",
    idade: 21,
    profissao: 'Desenvolvedor',
    endereco: {
        cidade: "Dubai",
        rua: "RS57 Street",
        // numero: 0,
    } 
}

const usuarios: Usuario[] = []

usuarios.push(usuario)


// Interface que extende de outro tipo de dado (interface/tipo/any)
// interface IEmpresa extends Usuario {
//     nome: string;
//     cnpj: number;
//     function(argumento: string): string;
// }

// Type Alias 
// type Empresa = {
//     nome: string;
//     cnpj: number;
// } & Usuario

// const ehVerdadeiro: boolean = true
// const nil: null = null
// const und: undefined = undefined


function soma(x: number,y: number) {
    return x + y
}

soma(10, 5)

function getUserById(userId: number) {
    return usuarios.find(usuario => usuario.id === userId)
}

console.log(getUserById(11))

