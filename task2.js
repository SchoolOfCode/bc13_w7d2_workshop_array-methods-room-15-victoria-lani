let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
// function getBAnimals(animals){
//   return animals.charAt(0) === "b"
// }

let bListAnimals = animals.filter(function (animal) {
  return animal.charAt(0)==="b"})


