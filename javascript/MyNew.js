function MyNew() {
    let obj = new Object()

    let constructor = Array.prototype.shift.call(arguments)

    if(typeof constructor !== 'function') {
        throw("constructor is not a function")
    }

    let resObj = constructor.apply(obj, arguments)

    if(typeof resObj === 'object') {
        return resObj;
    } 

    return obj
}

function Person(name) {
    this.name = name;
    return {
        name: this.name,
        age: 40
    }
}

let person = MyNew(Person, "jayChou")
console.log(person);