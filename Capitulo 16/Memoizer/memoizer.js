"use strict";

let cache = [];

const memoizer = func =>{
	return e=>{
		const index = e.toString()
			if (cache[index] == undefined) {
				cache[index] = func(e);
			}
			return cache[index]
	}
}

const hacerAlgo = num =>{
	const a = 20;
	const b = 12;
	const c;
	for (let i = num -1; i >= 0; i--){
		for (let j = i - 1; j >= 0; j--) {
			c+=a*b;
		}
	}
	return c;
}

console.log("función SIN memoizer");

const date = new Date();
hacerAlgo(60000);
console.log(new Date() - date)

const date2 = new Date();
hacerAlgo(60000);
console.log(new Date() - date2)

const date3 = new Date();
hacerAlgo(60000);
console.log(new Date() - date3)

const date4 = new Date();
hacerAlgo(60000);
console.log(new Date() - date4)


console.log("función con memoizer");

const memo = memoizer(hacerAlgo);

const date5 = new Date();
memo(90000);
console.log(new Date() - date5)

const date6 = new Date();
memo(90000);
console.log(new Date() - date6)

const date7 = new Date();
memo(90000);
console.log(new Date() - date7)

const date8 = new Date();
memo(90000);
console.log(new Date() - date8)