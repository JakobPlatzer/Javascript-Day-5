var dog = {
    class: "mammal",
    diet: "omnivore",
    lifespan: "12",
    description: function () {
        return `A dog is a ${this.class} and an ${this.diet} and usually lives up to ${this.lifespan} years`;
    }
}

console.log(dog.description());

document.getElementById("dogDescription").innerHTML= dog.description();

var eagle = {
    class: "bird",
    diet: "carnivore",
    lifespan: "35",
    description: function () {
        return `An eagle is a ${this.class} and a ${this.diet} and can live up to ${this.lifespan} years`;
    }
}

console.log(eagle.description());

document.getElementById("eagleDescription").innerHTML = eagle.description();

var crocodile = {
    class: "reptile",
    diet: "carnivore",
    lifespan: "70",
    description: function () {
        return `A crocodile is a ${this.class} and a ${this.diet} and can live up to ${this.lifespan} years`;
    }
    
}

console.log(crocodile.description());

document.getElementById("crocodileDescription").innerHTML = crocodile.description();

var toyotaVerso = {
    brand: "Toyota",
    model: "Verso",
    type: "minivan",
    availableColors: "white, silver, brown and black",
    description: function () {
        return `The ${this.model} is a ${this.type} by ${this.brand} and it comes in ${this.availableColors}.`;
    }
}

console.log(toyotaVerso.description());

document.getElementById("toyotaVersoDescription").innerHTML = toyotaVerso.description();

var ferrari812GTS = {
    brand: "Ferrari",
    model: "812GTS",
    type: "sportscar",
    availableColors: "white, red and grey",
    description: function () {
        return `The ${this.model} is a ${this.type} by ${this.brand} and it comes in ${this.availableColors}.`;
    }
}

console.log(ferrari812GTS.description());

document.getElementById("ferrari812GTSDescription").innerHTML = ferrari812GTS.description();

var volkswagenTaigo = {
    brand: "Volkswagen",
    model: "Taigo",
    type: "SUV",
    availableColors: "white, red, blue, green and black",
    description: function () {
        return `The ${this.model} is a ${this.type} by ${this.brand} and it comes in ${this.availableColors}.`;
    }
}

console.log(volkswagenTaigo.description());

document.getElementById("volkswagenTaigoDescription").innerHTML = volkswagenTaigo.description();


