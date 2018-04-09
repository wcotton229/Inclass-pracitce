function Programmers (name, position, age, favLang){
    this.name = name;
    this.position = position;
    this.age = age;
    this.favLang = favLang;
    this.printStatus = function (){
        console.log(
            `
            name: ${this.name}
            job: ${this.position}
            age: ${this.age}
            favProgLang: ${this.favLang}`);
    }
}

var prog1 = new Programmers ("Tom", "UI Developer", 30, "JavaScript");

prog1.printStatus();