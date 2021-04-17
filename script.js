console.log("Ex 2");

class utilizatori {
    constructor(nume, prenume, varsta, hobiuri) {
        this.nume = nume;
        this.prenume = prenume;
        this.varsta = varsta;
        this.hobiuri = hobiuri;
    }

    modifyName(string) {
        this.nume = string;
    }
    modifyName2(string) {
        this.prenume = string;
    }
    modifyAge(number) {
        this.varsta = number;
    }
    modifyHobby(array) {
        this.hobiuri = array;
    }
}

let utilizatoriArray = [];

let utilizator1 = new utilizatori("Popescu", "Mihai", 17, ["Fotbal"]);
let utilizator2 = new utilizatori("Badea", "Ion", 30, ["Front-end Developer"]);
let utilizator3 = new utilizatori("Enache", "Sorina", 23, ["Desen"]);
let utilizator4 = new utilizatori("Manea", "Claudia", 27, ["Front-end Developer"]);
let utilizator5 = new utilizatori("Simion", "Mihai", 18, ["Voluntariat"]);

utilizatoriArray.push(utilizator1, utilizator2, utilizator3, utilizator4, utilizator5);

console.log("Utilizatori cu prenumele Mihai:")
for (let i = 0; i < utilizatoriArray.length; i++) {
    if (utilizatoriArray[i].prenume === "Mihai") {
        console.log(utilizatoriArray[i]);
    }
}
console.log("Utilizatori cu varsta mai mare de 18 ani:")
for (let i = 0; i < utilizatoriArray.length; i++) {
    if (utilizatoriArray[i].varsta > 18) {
        console.log(utilizatoriArray[i]);
    }
}
console.log("Utilizatori care au ca hobiuri Front-end Developer:")
for (let i = 0; i < utilizatoriArray.length; i++) {
    if (utilizatoriArray[i].hobiuri == "Front-end Developer") {
        console.log(utilizatoriArray[i]);
    }
}
console.log("Prenumele utilizatorilor:")
for (let i = 0; i < utilizatoriArray.length; i++) {
    console.log(utilizatoriArray[i].prenume);
}


console.log("Ex 3");

let animal1 = {
    name: "Aki",
    type: "Dog",
    age: 5,
    race: "Shiba Inu",

    speak: function () {
        console.log("Bark! Bark! Bark!");
    },
    details: function () {
        console.log("Type:", this.type, "Name:", this.name, "Age:", this.age, "Race:", this.race);
    },
    howOldAmI: function () {
        console.log("Varsta:", this.age);
    }
}

let animal2 = {
    name: "Biiiird",
    type: "Parrot",
    age: 1,
    race: "Lovebird",
    friend: animal1,

    myFriendIs: function () {
        console.log("My friend is:", this.friend.name)
    },
    amIYoungerThanFriend: function () {
        if (this.age < this.friend.age) {
            console.log("Am I younger than friend?", "True");
        }
        else {
            console.log("Am I younger than friend?", "False");
        }
    }
}

console.log("Animal 1")
animal1.speak();
animal1.details();
animal1.howOldAmI();

console.log("Animal 2")
animal2.myFriendIs();
animal2.amIYoungerThanFriend();

