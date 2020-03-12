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
//Ex.3
const arr = [1, 2, 3, 4, 5];
const array1=arr.map(function(item) {
    return item + 10;
});
console.log(array1);