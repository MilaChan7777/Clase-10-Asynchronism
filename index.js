//Trabaja con tiempo
console.log('A'); //Sucede de inmediato
setTimeout(function () {
	console.log('B');
}, 2000); //Sucede después de 2 segundos
console.log('C');

//Event loop
console.log('start');
setTimeout(() => {
	console.log('callback');
}, 0);
console.log('end');

//Promises
let x = Math.floor(Math.random() * 10);
console.log(x);
const promise = new Promise((resolve, reject) => {
	if (x >= 5) {
		resolve('La variable es mayor o igual a 5');
	} else {
		reject('La variable es menor que 5');
	}
});

promise
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error);
	});

let mensajePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Este es el mensaje');
	}, 5000);
});

mensajePromise
	.then((result) => {
		console.log(result);
	})
	.catch(() => {
		console.log('error');
	});
