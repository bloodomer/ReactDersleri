
// Class ES5

// var Person = function() {

// }

class Person {
    constructor(name,year) {
        this.name = name;
        this.year = year;
    }

    calculateAge()     {
        return new Date().getFullYear() - this.year;
    }
}

class Student extends Person
{
    constructor(name,year,studentNumber){
        super(name,year);
        this.studentNumber = studentNumber;
    }
}
// Nesne - Object

const p = new Person("Ömer",1983);
const s = new Student("Elis",2014,202);



console.log(p.calculateAge())
console.log(p);

console.log(s.calculateAge())
console.log(s);