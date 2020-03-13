"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Ex.1
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.propriedade = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.propriedade;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(admemail, admsenha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, admemail, admsenha));
    _this.propriedade = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true
//Ex.2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var arrIdade = usuarios.map(function (item) {
  return item.idade;
});
console.log(arrIdade);
var arrFilter = usuarios.filter(function (item) {
  return item.empresa === "Rocketseat";
});
console.log(arrFilter);
var arrFind = usuarios.find(function (item) {
  return item.empresa === "Google";
});
console.log(arrFind);
var arrMultIdade = usuarios.map(function (item) {
  item.idade *= 2;
  return item;
});
var arrResMultIdade = arrMultIdade.filter(function (item) {
  return item.idade < 50;
});
console.log(arrResMultIdade); //Ex.4

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome;
var cidade = empresa.endereco.cidade;
var estado = empresa.endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC

function mostraInfo(usuario) {
  return "".concat(usuario.nome, " tem ").concat(usuario.idade, " anos.");
}

mostraInfo({
  nome: 'Diego',
  idade: 23
});
var nnome = mostraInfo.nome;
var idade = mostraInfo.idade;

var mostrarIdadeNome = function mostrarIdadeNome() {
  return "".concat(nnome, " tem ").concat(idade, " anos.");
};

console.log(mostrarIdadeNome()); //Ex.5

var arr = [1, 2, 3, 4, 5, 6];
var num = 2;
var x = arr.find(function (item) {
  return item === num;
});
var y = arr.filter(function (item) {
  return item != num;
});
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]

var soma = function soma() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (total, next) {
    return total + next;
  });
};

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario, {
  nome: "Gabriel"
});

var usuario3 = _objectSpread({}, usuario, {
  nome: "Lontras"
});

console.log(usuario2);
console.log(usuario3); //Ex.6

var usuarioEx6 = 'Diego';
var idadeEx6 = 23;
console.log("O usu\xE1rio ".concat(usuarioEx6, " possui ").concat(idadeEx6, " anos")); //Ex.7

var nomeEx7 = 'Diego';
var idadeEx7 = 23;
var usuarioEx7 = {
  nomeEx7: nomeEx7,
  idadeEx7: idadeEx7,
  cidade: 'Rio do Sul'
};
console.log(usuarioEx7);
