## OOPS IN TYPESCRIPT

1. Class 
2. Object
3. Constructor
4. Inheritance
5. Abstraction
6. Interface
7. Encapsulation
8. Polymorphism
9. static properties
10. Access Modifiers (public, protected, private)
11. this and super


## Class 
Class is a data type or a template that can help us to store data, methods, and objects together in one place. 

//Employee Class 

class Employee {

    //properties /data
    empId : number = 1234;
    empName : string = "John Doe";
    empDepartment : string = "IT";

    //method
    employeeAddress(){
        console.log("Employee Address : 123, Main Street, City, Country");
    }

}



## Object 
Object is all about a new instance of the class. ( i.e. New xerox copy of the class. )

//Access the data from the class  
let obj = new Employee(); // new -> new copy 
console.log(obj.empId);
obj.employeeAddress();
