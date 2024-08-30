import "./style.css";
const nome: string = "Daniel";
const nota: number = 10;

// Inferência de tipo
const marca = "Audi";

let profissao: string | number;

profissao = "Developer";
profissao = 10;

const listaDeCompras: { nome: string }[] = [];

listaDeCompras.push({ nome: "Luan " });

type Endereco = {
  cidade: string;
  rua: string;
  numero?: number;
};

type Usuario = {
  id: number;
  nome: string;
  idade: number;
  profissao: string;
  endereco: Endereco;
};

const usuario: Usuario = {
  id: 10,
  nome: "Igor",
  idade: 21,
  profissao: "Desenvolvedor",
  endereco: {
    cidade: "Dubai",
    rua: "RS57 Street",
    // numero: 0,
  },
};

const usuarios: Usuario[] = [];

usuarios.push(usuario);

// Interface que extende de outro tipo de dado (interface/tipo/any)
interface IEmpresa extends Usuario {
  nome: string;
  cnpj: number;
  function(argumento: string): string;
}

// Type Alias
type Empresa = {
  nome: string;
  cnpj: number;
} & Usuario;

const ehVerdadeiro: boolean = true;
const nil: null = null;
const und: undefined = undefined;

function soma(x: number, y: number) {
  return x + y;
}

soma(10, 5);

function swap(lista: string[]): string[] {
  return [''];
}

const diminui: () => {} = () => {};

function getUserById(userId: number): Usuario | undefined {
  return usuarios.find((usuario) => usuario.id === userId);
}

import "./utility-types";

function convertToDomain(data: any) {
  return {
    neighborhood: data.bairro,
    cep: data.cep,
    location: data.localidade,
    street: data.logradouro,
  };
}

type CepData = ReturnType<typeof convertToDomain>;

const baseURL = `https://viacep.com.br/ws/`;

const getCep: (cep: number) => Promise<CepData> = async (cep: number) => {
  const response = await fetch(`${baseURL}/${cep}/json`);
  const json = await response.json();
  const data = convertToDomain(json);

  return data;
};

const input = document.querySelector("input");
const button = document.querySelector("button");
const minhasInformacoes = document.querySelector("#dado");

button?.addEventListener("click", async () => {
 
 if (!input?.value) {
    return;
  }
  const data = await getCep(Number(input.value));

  addInfo(data.cep)
  addInfo(data.street)
  addInfo(data.location)
  addInfo(data.neighborhood)
});


function addInfo(texto: string) {
  const line = document.createElement("p");
  const text = document.createTextNode(texto);
  line.appendChild(text)
  minhasInformacoes?.appendChild(line);
}