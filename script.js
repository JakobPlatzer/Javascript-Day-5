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

