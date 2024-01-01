class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }
}

const php = new Course('PHP', '100000');
console.log(php.getName());