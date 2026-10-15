/*//1. uzadatak
console.log("ovo radi");*/

/*/zad 2.

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
  */

/* zad 3
let n = Number(prompt("Unesi neki broj:"));
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
*/

/*//zad 4
let polje = [4, 5, 3, 4, 2];
let suma = 0;
let prosjek = 0;
for (let i = 0; i < polje.length; i++) {
  suma += polje[i];
  prosjek = suma / polje.length;
}
console.log(suma);
console.log(prosjek);
*/

/*zad 5
let n = Number(prompt("Unesi broj:"));

for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    console.log("PARAN:" + i);
  }

  if (i % 2 != 0) {
    console.log("NEPARAN:" + i);
  }
}
*/

let polje = [12, 7, 25, 4, 19];
int najveci = polje[0];

for(let i=1; i<polje.length; i++){
  if(polje[i]>najveci){
    najveci = polje[i];
  }
}
