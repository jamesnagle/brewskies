console.log('hello world')

const isThisWorking = (str) => {
    console.log(str)
}
isThisWorking('Yes, I am working!')

class Tester {
    constructor(name) {
        this.name = name;
    }

    outputMe() {
        console.log(name)
    }
}

let name = new Tester();

name('fred')
