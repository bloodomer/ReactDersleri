const user = {
    name: 'Omerdeniz',
    getUserName() {
        return this.name;
    }
}

console.log(user.name);
console.log(user.getUserName());

const getName = user.getUserName();

console.log(getName());

const myFunc = function() {
    console.log(user.getUserName());
}

myFunc();