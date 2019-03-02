var myName = "raya";
console.log(myName);

function returnMyName (){
    return myName;
}
var userName = returnMyName();  
console.log(userName);
var coolBeans = true;

var Soup = {
    name:"Creamy Tomato Basil",
    sodium: 150,
    botulism: {
        isFatal: true
    }
}
console.log(Soup.botulism.isFatal);

var newArray = [1, 2, 3, 4, 5, 6];
var sonyaMonths = newArray[4];
sonyaMonths;

var me = {
    name: "Raya",
    age: 29,
    husband: "Kris",
    favoriteFood: "Sushi",
    weight: 140
}
console.log(me.name + " is a " + me.age + " year old woman who loves " + me.husband + " and " + me.favoriteFood + "!");

var testArray = [1, 2, [1, 2, 3]];
console.log(testArray[2][0]);

var meatOptions = ["Ham", "Turkey", "Tuna", "Beef"];
var mealOptions = ["Sandwich", "Wrap", "Pizza"];
var menuOptions = [];

function makeTheMenu() {
    for (i = 0; i < meatOptions.length; i++) {
        for (j = 0; j < mealOptions.length; j++) {
                menuOptions.push(meatOptions[i] + " " + mealOptions[j]);
        }
    }
}

makeTheMenu();
console.log(menuOptions[6]);