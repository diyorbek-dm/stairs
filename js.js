'use strict'

// Лестница

let getLenght = +prompt('Введите кол-во лестниц')
let getSymbol = prompt('Введите символ')
let getStars = prompt('Введите конечный символ')
let space = ' '

function stairs(lenght, symbol, str, stars) {
  
  if(isNaN(lenght) || lenght === 0) {

    for(let i = 0; i < 5; i++) {
      let res = str += symbol
      res += ` ${stars}`
      console.log(res)
    }
  } else if(symbol === '' || symbol === null) {
    alert('Введите символ!')
  } else if(stars === '' || stars === null) {
    alert('Введите конечный символ!')
  }
  else {

    for(let i = 0; i < lenght; i++) {
      let res = str += symbol
      res += ` ${stars}`
      console.log(res)
    }
  }
}

stairs(getLenght, getSymbol, space, getStars)


