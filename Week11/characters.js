function Characters(name, profession, gender, age, strength, hitPoints) {
    this.name = name,
        this.profession = profession,
        this.gender = gender,
        this.age = age,
        this.strength = strength,
        this.hitPoints = hitPoints
    this.printStats = function () {
        console.log(
            `
            name: ${this.name}
            profession: ${this.profession}
            gender: ${this.gender}
            age: ${this.age}
            strength: ${this.strength}
            hitPoints: ${this.hitPoints}`);
        };
        this.isAlive = function (){
            if (hitPoints > 0){
            console.log(this.name + " is Alive!");
            console.log("\n---------------\n");
            return true;
            }
            console.log(this.name + " is Dead!");
            return false;
        };
        this.attack = function (enemy){
            enemy.hitPoints -= this.strength;

            console.log(this.name + " attacked " + enemy.name + "!");
            console.log(enemy.name + " now only has " + enemy.hitPoints+ "."); 
            console.log("\n---------------\n");
        };
        this.levelUp = function (){
            this.age += 1;
            this.strength +=5;
            this.hitPoints +=25;
        };
}

var goku = new Characters("Goku", "Z Fighter", "Male", 21, 30, 9000);
var vegeta = new Characters("Vegeta", "Prince of Sayians", "Male", 25, 40, 8500);

goku.printStats();
vegeta.printStats();

console.log("\n------------\n");

goku.attack(vegeta);
vegeta.printStats();
console.log("\n------------\n");
vegeta.isAlive();

goku.levelUp();
goku.printStats();


