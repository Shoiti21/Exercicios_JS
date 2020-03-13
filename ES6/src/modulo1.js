//Ex.1
class Usuario{
    constructor(email,senha){
        this.email=email;
        this.senha=senha;
        this.propriedade=false;
    }
    isAdmin(){
        return this.propriedade;
    }
}
class Admin extends Usuario{
    constructor(admemail,admsenha){
        super(admemail,admsenha);
        this.propriedade=true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

//Ex.2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
const arrIdade=usuarios.map(function(item){
    return item.idade;
});
console.log(arrIdade);
const arrFilter=usuarios.filter(function(item){
    return item.empresa==="Rocketseat";
});
console.log(arrFilter);
const arrFind=usuarios.find(function(item){
    return item.empresa==="Google";
});
console.log(arrFind);
const arrMultIdade=usuarios.map(function(item){
    item.idade*=2;
    return item;
});
const arrResMultIdade=arrMultIdade.filter(function(item){
    return item.idade<50;
});
console.log(arrResMultIdade);
//Ex.4
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
const nome= empresa.nome;
const cidade= empresa.endereco.cidade;
const estado= empresa.endereco.estado;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 })
const nnome=mostraInfo.nome;
const idade=mostraInfo.idade;
const mostrarIdadeNome=() => `${nnome} tem ${idade} anos.`;
console.log(mostrarIdadeNome());
//Ex.5
const arr = [1, 2, 3, 4, 5, 6];
const num=2;
const x=arr.find(function(item){
    return item===num;
});
const y=arr.filter(function(item){
    return item!=num;
});
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma=(...nums)=>nums.reduce((total,next)=>total+next);
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};
const usuario2={...usuario,nome:"Gabriel"};
const usuario3={...usuario,nome:"Lontras"};
console.log(usuario2);
console.log(usuario3);
//Ex.6
const usuarioEx6 = 'Diego';
const idadeEx6 = 23;
console.log(`O usuário ${usuarioEx6} possui ${idadeEx6} anos`);
//Ex.7
const nomeEx7 = 'Diego';
const idadeEx7 = 23;
const usuarioEx7 = {
nomeEx7,
idadeEx7,
cidade: 'Rio do Sul',
};
console.log(usuarioEx7);