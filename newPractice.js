const Sarah = {
    age: 29,
    height: `5'5"`,
    weight: 162,
    desiredWeight: 130,
    isMale: false,
    favoriteFoods: [`Sushi`, `Bananas`, `Bacon`],
    address: {
        street: `942 Sage Creek Circle`,
        city: `Springville`,
        state:`Utah`
    }
}
console.log(Sarah.favoriteFoods[1]);

function subtract(num1, num2) {
    return num1 - num2;
}

let weightToLose = subtract(Sarah.weight, Sarah.desiredWeight);
console.log(weightToLose);

var foodIWantToEat = ["Caramel Popcorn", "Air Heads", "Raisin Bran"];

foodIWantToEat.push("Sushi");
foodIWantToEat.unshift("Prunes");
foodIWantToEat.shift();
var madeMeSick = foodIWantToEat.slice(0, 1);

console.log(foodIWantToEat)
console.log(madeMeSick)

foodIWantToEat.splice(1, 0, "Maple Bars", "Caramels");

console.log(foodIWantToEat);