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
console.log("${me.name} is a ${me.age} year old dog.");

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

var friends = [
    {
        name: "Diana",
        age: 34
    },
    {
        name: `Someone`
    }
]

var family = {
    philip: {
        hobbies: {

        }
    },
    terrence: {
        hobbies:{

        }
    },
    uglyBob: {
        hobbies:{

        }
    }
}
var Sonya = {
    ageInMonths: 6,
    hairColor: "Blonde",
    isDiaperPoopy: false,
    percentileInHeight: 90,
    isCute: true,
    favFoods: ["Banana", "Plum Oatmeal", "Nutella"]
};

var alligatorPear = {
    skin = 'bumpy'
};

/// moi
const Sarah = {
    height: "5'5\"",
    weight: 162,
    eyeColor: "Hazel",
    age: 29,
    birthday: "01/14/1990",
    email: `sarah.jkr@gmail.com`,
    isMale: false,
    livesInUsa: true,
    address: {
        street: `942 Sage Creek Circle`,
        city: `Springville`,
        state: `Utah`,
        zipCode: `84663`
    },
    favoriteFoods: [`Sushi`, `Bacon`, `Bananas`]
}

console.log(Sarah.address.street);

var stuffToDo = [
    function doTheThing() {
        return `Thing`;
    },
    function eatTheBacon(){
        return `Yummy`;
    },
    function kissYoHusband(){
        return `Aww Yeah`;
    }
]

console.log(stuffToDo[0]);

