// vanha fro-loop tyyli VS uusi ES6 (ECAMScript6) tyyli tulostaa arrayn jokainen arvo järjestyksessä.

let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k++) {
  console.log(arr[k]);
}

let obj = {a: 1, b: 2, c: 3};
for (let v in obj) {
  console.log(v);
}