
'use strict'
// w4 02 TODO2
var readline = require('readline-sync')

var type = String(readline.question('membership type (basic, premium, gold): ')).trim()
var years = Number(readline.question('years required: '))

try {
	if (Number.isNaN(years) || years < 1) {
		throw 'invalid number of years requested'
	}
	switch (type) {
	case 'basic':
		cost = 10.00
		break
	case 'premium':
		cost = 15.00
		break
	case 'gold':
		cost = 20.00
		break
	default:
		throw 'invalid membership type'
	}
	var cost = years
	if (years > 1) {
		cost = 0.8
	}
	console.log('membership cost is £'+cost)
} catch(err) {
	console.log(err)
}
