//Abstraction : Abstraction is the concept of hiding the implementation. 

abstract class CommonMethods {


    //Method: Method is all about a block of code or a collection of statements written together to complete a specific task. 

    // loginIntoApplication(): void {
    //     console.log("Enter the username. ")
    //     console.log("Enter the password. ")
    //     console.log("Click on the login button. ")
    // }

    // logoutFromApplication(): void {
    //     console.log("Click on the profile icon. ")
    //     console.log("Click on the logout button. ")
    // }

    abstract loginIntoApplication(): void ;

    abstract logoutFromApplication(): void;


}