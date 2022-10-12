// // Perulangan For
// for (let i = 0; i<=10; i++) {
//     if(i % 2 == 0){
//         console.log("Genap");
//     }else {
//         console.log("Ganjil");
//     }
// }

// let array = ["Muhamad", "Fahri", 20];
// let object = [{
//     fname: "Muhamad",
//     lname:"Fahri",
//     umur: "20",
// }]

// // Perulangan Map
// array.map((key) => console.log(key));

// // Perulangan for in
// for(key in object){
//     console.log(key);
// }

// // Perulangan for of
// for({fname, lname, umur} of object){
//     console.log(fname,lname,umur);
// }

// let i=0;

// // Perulangan While
// while(i<= 10){
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// } while (i<=10);

// Buatlah sebuah perulangan dari angka 1-50
// Dengan kondisi jika angka yang bisa di bagi 3 maka pring ("Apa")
// Jika angka yang bisa dibagi 5 maka print ("Boleh")
// Jika angka yang bisa dibagi 3 dan 5 maka print("ApaBoleh")
// Selain itu maka print angka

for (let i = 1; i<=50; i++) {z
    if(i % 3 == 0 && i % 5 == 0){
        console.log("ApaBoleh")
    }else if(i % 3 == 0){
        console.log("Apa")
    }else if(i % 5 == 0){
        console.log("Boleh")
    }else {
        console.log(i)
    }
}

// for(i=0;i<=50;i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("ApaBoleh");
//     }else if (i % 3 == 0){
//         console.log("Apa");
//     }else if (i % 5 == 0){
//         console.log("Boleh")
//     }else{
//         console.log(i);
//     }
// }