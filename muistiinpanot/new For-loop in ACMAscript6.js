// vanha fro-loop tyyli VS uusi ES6 (ECAMScript6) tyyli tulostaa arrayn jokainen arvo järjestyksessä.

let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k++) {
    console.log(arr[k]);
}

let obj = {a: 1, b: 2, c: 3};
for (let v in obj) {
    console.log(v);
}




// arrayn voi toteuttaa seuraavalla tavalla
var arr = [2, 3, 7, 8];

arr.forEach(function(el) {
    console.log(el * 2);
});

// and
const arr = [2, 3, 7, 8];

arr.forEach(v => {
    console.log(v * 2);
});

//JOKU HYVIN SEKAVA ARRAY juttu :O
const printOdds = (arr) => {
    arr.forEach(el => {
        if (el % 2 != 0) console.log(el);
    });
}


