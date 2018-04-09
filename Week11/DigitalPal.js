var DigitalPal = function () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function () {
        if (this.hungry === true) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else{
            console.log("No thanks! I'm full.");
        }

    }
    this.sleep = function () {
        if (this.sleepy === true) {
            console.log("Zzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired.");
        }
    }
    this.play = function () {
        if (this.bored === true) {
            console.log("Yay! Lets play!");
            this.bored = false;
            this.hungry = true;
        } else{
            console.log("Not right now. Later?");
        }


    }
    this.increaseAge = function () {
        this.age++;
        console.log("Happy Birthday to me! I am " + age + " years old!");
    }

}

var dog = new DigitalPal();

dog.outside = false;

dog.bark = function () {
    console.log("Woof! Woof!");
}

dog.goOutside = function () {
    if (this.outside === false) {
        console.log("Yay! I love the outdoors!");
        outside = true;
        dog.bark();
    } else{
        console.log("We're already outside though...");
    }
}

dog.goInside = function () {
    if (this.outside === true) {
        console.log("Do we have to? Fine....");
        outside = false;
    } else{
        console.log("I'm already insdie....");
    }
}

var cat = new DigitalPal()

cat.houseCondition = 100;

cat.meow = function () {
    console.log("Meow! Meow!");
}

cat.destoryFurniture = function () {
    if (this.houseCondition - 10 > 0){
        this.houseCondition -= 10;
        this.bored = false;
        this.sleepy = true;
    console.log("MUAHAHAHAHAHA! TAKE THAT FURNITURE!");
} else{
    }
    console.log("I've already destroied it all!");
    
}

cat.buyNewFurniture = function () {
    cat.houseCondition += 50;
    console.log("Are you sure about that?");
}

