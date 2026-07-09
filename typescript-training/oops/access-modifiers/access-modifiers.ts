// Access modifiers are nothing but a set of keywords used to control the access of data and methods stored inside the class. 

// There are 3 types of access modifiers in TypeScript: public, private, protected.

//1. public /no keyword  => Data and methods can be accessible everywhere. (within the class,child class and outside class) 
//2. protected => We can access only within the current class and child class. We cannot access the data form outside class
//3. private => We can access only within the current class. We cannot access the data from outside class and child class.


//Main Class
class Person {

    name: string = "Bharath Reddy";
    age: number = 35;
    city: string = "Hyderabad";

    //Method to display the data
    printData() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }

}

//Child 1 Class
class Child1 extends Person {

    state: string = "Telangana";
    //Method to display the data
    printChildData() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
        console.log(this.state);
    }
}

class Child2 extends Person {
    state: string = "Tamilnadu";
    //Method to display the data
    printChildData() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
        console.log(this.state);
    }
}

//Grand Child Class
class GrandChild extends Child1 {

    country: string = "India";
    //Method to display the data
    printGrandChildData() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
        console.log(this.state);
        console.log(this.country);
    }
}

//Outsider Class
class Outsider {
    //Method to display the data
    printOutsiderData() {
        let obj = new Person();
        console.log(obj.name);
        console.log(obj.age);
        console.log(obj.city);
    }
}


let obj = new Person();
obj.printData(); //Accessing the data from main class

let obj1 = new Child1();
console.log(obj1.name); //Accessing the data from child class
console.log(obj1.state); //Accessing the data from child class
obj1.printChildData(); //Accessing the data from child class
