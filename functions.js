// ! Exo 1
function Sum(a, b) {
  return a + b;
}
console.log("Exo 1 (Somme):", Sum(2, 3));

// ! Exo 2
function Welcome(name = "inconue") {
  return `Bonjour, ${name}`;
}
console.log("Exo 2 avec parametre: ", Welcome("jean"));
console.log("Exo 2 sans parametre: ", Welcome());

// ! Exo 3
let globalVar = 10;

function Diff() {
  let localVar = "15";

  console.log("Exo 3, Local var dans la fonction: ", localVar);
  console.log("Exo 3, Global var hors de la fonction: ", globalVar);
}

console.log("Global var out of the function: ", globalVar);
Diff()

// ! Exo 4
const square1 = function (number) {
  return number ** 2;
};

console.log("Exo 4 (Carre d'un nombre 1):", square1(4));

// ! Exo 5
const square2 = (number) => {
  return number ** 2;
};

console.log("Exo 5 (Carre d'un nombre 2):", square2(4));

// ! Exo 6
const perimeter = (long, larg) => {
  return long * larg;
};

const Surface = () => {
  const long = 10;
  const larg = 12;

  const surf = perimeter(long, larg);

  return surf;
};

console.log("Exo 6 (Surface d'un rectangle) :", Surface());
// ! Exo 7
const add = (a, b) => {
  return a + b;
};

function calcul(nbre1, nbre2, funct) {
  return funct(nbre1, nbre2);
}

console.log("Exo 7 (Fonction de rappel):", calcul(2, 3, add));

// ! Exo 8
function facto(n) {
  if (n == 0 || n == 1) return 1;
  return n * facto(n - 1);
}

console.log("Exo 8 (Fonction recursives):", facto(5));

// ! Exo 9
const funct = (a) => {
  return a + 2;
};

const applyTwice = (a, funct) => {
  let c = 0;
  c += funct(a);
  c += funct(a);
  return c;
};
console.log("Exo 9 (fonction comme parmetre):", applyTwice(5, funct));

// ! Exo 10
const SumVal1 = (Tab) => {
  let sum = 0;
  for (const val of Tab) {
    sum += val;
  }
  return sum;
};

const SumVal2 = (Tab = []) => {
  let sum;
  sum = Tab.reduce((sum, current) => sum + current, 0);
  return sum;
};

console.log("Exo 10: fonction et tableau 1,", SumVal1([1, 2, 3, 4, 5, 6]));
console.log("Exo 10: fonction et tableau 2,", SumVal2([1, 2, 3, 4, 5, 6]));
