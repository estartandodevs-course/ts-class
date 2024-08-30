// Utility Types

type Carro = {
  nome?: string;
  ano?: number;
  marca?: string;
};

// Transforma todas as propriedades em opcional
const carOpcional: Partial<Carro> = {};

// Transformas todas as propriedades em obrigatórias
const carObrigatorio: Required<Carro> = {
  ano: 2018,
  marca: "Audi",
  nome: "TTS",
};

const car: Omit<Carro, "marca"> = {
  ano: 2020,
  nome: "Gol",
  // marca: "VW",
};

type Produto = {
  nome: string;
  valor: number;
  quantidade: number;
};

// Tirando as propriedades especificadas
const produtosComApenasNomes: Omit<Produto, "valor" | "quantidade"> = {
  nome: "Banana",
};

// Pegando as propriedades especificadas
const produtosComApenasNomesEValores: Pick<Produto, "valor" | "nome"> = {
  nome: "Banana",
  valor: 10,
};

console.log(produtosComApenasNomes.nome);

type Roupa = {
  nome: string;
  tamanho: string;
};

// Garante com que não ocorra nenhuma mudança no meu dado, ou seja, ele agora é apenas leitura.
const roupas: Readonly<Roupa[]> = [{ nome: "jaqueta", tamanho: "M" }];


// Object.freeze === Readonly (Ocorre em ocasiões diferentes)
const roupa = Object.freeze({
  nome: "calça",
  tamanho: "G",
});



type AlunoNome = "Luan" | "Kassia" | "Yumi"

interface AlunoInformacoes {
  idade: number
  curso: string
}

// Constrói um tipo de objetos mapeados pelas keys e pelos valores do meu tipo, sendo da esquerda para a direita.
const alunos: Record<AlunoNome, AlunoInformacoes> = {
  Kassia: { curso: 'Frontend', idade: 24},
  Luan: { curso: 'Frontend', idade: 23},
  Yumi: { curso: 'Frontend', idade: 26},
}


type Animal = string | undefined | null 

// Remove as propriedades null e undefined e retorna apenas as propriedades "truthy" (verdadeiras)
const animal: NonNullable<Animal> = 'cachorro'


function soma(x: number, y: number) {
  return x + y
}

// Pegar da função os tipos dos parâmetros definidos
type PSoma = Parameters<typeof soma>


// Pegar o valor do retorno da função
type ReturnTypeSoma = ReturnType<typeof soma>

function processaDado(data: any) {

  return { nome: data.name, idade: data.age, email: data.email }
}


type UsuarioData =  ReturnType<typeof processaDado>




console.log(carObrigatorio);
