const userInput = prompt("Masukan Nilai anda?");

const checkValue = +userInput; // melakukan konversi ke interger atau number

if (isNaN(checkValue)) alert("Harap memasukan angka!"); // validasi jika value adalah number

if (checkValue < 0 || checkValue > 100) alert("Harap memasukan angka diantara 1 - 100!"); // jika value diantara 1 - 100

const nilai = "";
let nilai1 = "";

// validasi diantara angka
if (checkValue >= 0 && checkValue <= 30) alert("D");

if (checkValue >= 31 && checkValue <= 59) alert("C");

if (checkValue >= 60 && checkValue <= 79) alert("B");

if (checkValue >= 80 && checkValue <= 100) alert("A");
