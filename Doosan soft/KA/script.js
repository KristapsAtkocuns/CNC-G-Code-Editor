'use strict';

//Formating text to left and with no gaps at first line
document.querySelector('.textboxinput').addEventListener('paste', myFunction);

function myFunction() {
  // alert('You pasted text!');
  document.querySelector('.textboxinput').style = 'text-align: left';
  document.querySelector('.textboxinput').value = document
    .querySelector('.textboxinput')
    .value.replace(/^\s+|\s+$/g, '');
}

document.querySelector('.btn').addEventListener('click', function (e) {
  e.preventDefault();
  // document.querySelector('.textboxinput').style = 'text-align: left';
  let kristaps = document.querySelector('.textboxinput').value;
  // document.querySelector('.textboxoutput').value = kristaps;
  let arrLetters = kristaps.split(/[\s,\n,\0-9 ]+/);
  let arrNumbers = kristaps.split(/[\s,\n,\A-Z ]+/);
  arrNumbers.pop();
  arrNumbers.shift();
  arrLetters.pop();
  console.log(arrLetters);
  console.log(arrNumbers);

  // console.log(arrLetters[0]);

  //Atrod 'C' Stringa poziciju
  var arrayLetterIndex = arrLetters.indexOf('C');
  const ccc = arrLetters.indexOf('C');
  console.log(ccc);

  //Atrod 'C' stringa pozicijai atbilstoso ciparu
  var arrayNumberIndex = arrNumbers[ccc];
  let arrayNumberIndexConvert = Number(arrayNumberIndex);
  console.log(arrayNumberIndexConvert);

  //Atrast visus C indexus
  function getAllIndexes(arr, val) {
    var indexes = [],
      i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
      indexes.push(i);
    }
    return indexes;
  }
  var indexes = getAllIndexes(arrLetters, 'C');
  console.log(indexes);

  //Loopings;
  for (let i = 0; i < indexes.length; i++) {
    //Seit tiek indexi parveidoti atbilstosi no Letters Array uz Nubers Array indexiem, lai varetu atrast atbilstosas lokacijas
    let indexValuesFromLettersArray = indexes[i];
    console.log(indexValuesFromLettersArray);
    //Seti tiek saglabatas parveidotas vertibas no numbers array, gatavas updatam
    let valuesFromNumbersArrayWithLettersIndexes =
      Number(arrNumbers[indexValuesFromLettersArray]) + 180;
    console.log(valuesFromNumbersArrayWithLettersIndexes);

    //Šeit notiek parveidoto vertibu ieliksana numbersArray
    arrNumbers[indexValuesFromLettersArray] =
      valuesFromNumbersArrayWithLettersIndexes;
  }

  console.log('----Transformetais kods-------');
  //Array tiek piepildits ar vertibam no finale variable
  let textArray = [];
  console.log(textArray);

  function test() {
    for (let i = 0; i < arrLetters.length; i++) {
      //Vērtibu iznemsana no array
      let lettersBackToStirng = arrLetters[i];
      // console.log(lettersBackToStirng);

      //Vērtibu iznemsana no array
      let NumbersBackToStirng = arrNumbers[i];
      // let finale = NumbersBackToStirng.toString();
      // console.log(finale);
      let finale = `${lettersBackToStirng}${NumbersBackToStirng}`;
      console.log(finale);
      //Merkis ir iznest variable textArray arpus loopa, izmanto funkciju
      textArray.push([finale]);
      // console.log(tekstsKopa);
      // console.log(tekstsKopa);
    }
  }
  //izsauc funkciju test
  test();
  //Seit notiek array apaksarray savienosana viena liela array
  let joinArrays = textArray.reduce(function (a, b) {
    return a.concat(b);
  }, []);
  console.log(joinArrays);
  //Seit tiek editets teksts
  let galaTeksts = textArray.join('');
  let galaTeksts2 = galaTeksts
    .replaceAll('M', '\nM')
    .replaceAll('G', '\nG')
    .replaceAll('T', '\nT')
    .replaceAll('X', ' X')
    .replaceAll('Y', ' Y')
    .replaceAll('Z', ' Z')
    .replaceAll('B', ' B')
    .replaceAll('C', ' C');
  console.log(galaTeksts2);
  document.querySelector('.textboxoutput').value = galaTeksts2;
});

//Will change C coordinate to C+180
//Sample code for pasting
// G54
// M110
// T0505
// G96
// G0 X0 Z0
// G1 X1 Z-2 C0
// G0 X4 Z4 Y6 C-5
// G0 X-5 Z8 Y-6 C-5.587
// G0 X0 Y0 Z0
// G28 X0
// G28 Y0 B0
// M1
