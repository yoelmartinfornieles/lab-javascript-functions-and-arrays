// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordList) {
  let longestWord = null;
  let longestWordLength = 0;
  for (let elemento of wordList){
    if (elemento.length > longestWordLength){
      longestWord = elemento;
      longestWordLength = elemento.length;
    }
  } 
  return (longestWord);
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArray) {
  let sum = 0;
  for (let elemento of numberArray){
    sum += elemento;
  }
  return (sum);
}



// Iteration #3.1 Bonus:
function sum(mixedArray) {
  let total = 0;
  for (let element of mixedArray){
    if (typeof element === "boolean"){
      if (element) {
        total ++;
      }
    } 
    else if (typeof element === "number"){
        total += element;
      } 
    else if (typeof element === "string"){
        total += element.length;
      }
      else {
        throw ("Unsupported data type sir or ma'am");
      }
    }
  return (total);
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
  let average = null;
  let sum = 0;
  elementsNumber = numbersArray.length;
  if (elementsNumber === 0) {
    return (null);
  }
  for (let element of numbersArray){
    sum += element;
  }
  average = sum / elementsNumber;
  return (average);
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(stringsArray) { 
  let average = 0;
  let elementsNumber = stringsArray.length;
  let wordsLength = 0;
  if (elementsNumber === 0) {
    return (null);
  }
  for (element of stringsArray) {
    wordsLength += element.length;
  }
  average = wordsLength / elementsNumber;
  return(average);
  }

// Bonus - Iteration #4.1
function avg(mixedArray) {
  let elementsNumber = mixedArray.length;
  let total = 0;
  let average = 0;
  if (elementsNumber === 0) {
    return (null);
  }
  total = sum(mixedArray);

  average = total / elementsNumber;
  average = Math.round (average * 100) / 100;
  return (average);
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(wordsArray) {
  let uniqueArray = [];
  let elementsNumber = wordsArray.length;
  if (elementsNumber === 0){
    return (null);
  }
  for (element of wordsArray){
    if (!uniqueArray.includes(element)){
      uniqueArray.push(element);
    }
  }
  return (uniqueArray);
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsArray, word) {
  let elementsNumber = wordsArray.length;
  if (elementsNumber === 0){
    return (null);
  }
  return (wordsArray.includes(word))
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordsArray, word) {
  let elementsNumber = wordsArray.length;
  let numberOfTimes = 0;
  for (element of wordsArray){
    if (element === word){
      numberOfTimes ++;
    }
  }
  return(numberOfTimes);
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function getElement(arr, x, y) {
  //comprobar que este dentro de los limites y devolver elemento 
  if (0 <= x && x < arr.length && 0 <= y && y < arr[x].length) {
    return arr[x][y];
  }
  //si esta fuera de los limites devolver 0 para que nunca sea el maximo ya que no serian 4 elementos
  return 0;
}

function greatestProduct(arr) {
  let max = 0;
  //recorrer la matriz
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let horizontal = 1; 
      let vertical = 1;
      //calcular producto horizontal y vertical para los 4 numeros del producto
      for (let indice = 0; indice < 4; indice++) {
        horizontal*= getElement(arr, i, j + indice);
        vertical*= getElement(arr, i + indice, j);
      }
      //quedarse con el maximo
      if (horizontal > max){
        max = horizontal;
      } else if (vertical > max) {
        max = vertical;
      }
    }
  }
  return max;
}

function greatestProductOfDiagonals(matrix) {
  let max = 0;
  //recorrer la matriz
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let diagonal = 1; 
      let diagonalInverso = 1;
      //calcular producto diagonal y diagonal inverso para los 4 numeros del producto
      for (let indice = 0; indice < 4; indice++) {
        diagonal*= getElement(matrix, i + indice, j + indice);
        diagonalInverso*= getElement(matrix, i + indice, j - indice);
      }
      //quedarse con el maximo
      if (diagonal > max){
        max = diagonal;
      } else if (diagonalInverso > max) {
        max = diagonalInverso;
      }
    }
  }
  return max;
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
