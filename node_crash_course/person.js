class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log('my name is ' + this.name + ' and i am ' + this.name)
    }
}



module.exports = Person;