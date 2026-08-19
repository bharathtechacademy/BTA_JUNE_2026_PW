//Interface is a 100% abstract class. 

interface CommonMethods1 {

    loginIntoApplication(): void;

    logoutFromApplication(): void;

}

interface CommonMethods2 {

    //name: string = "Bharath"; //An interface property cannot have an initializer.

    navigateToApplication(): void;

    closeTheApplication(): void;

}

class Test implements CommonMethods1,CommonMethods2 {

    loginIntoApplication(): void {
        console.log("Enter the username. ")
        console.log("Enter the password. ")
        console.log("Click on the login button. ")
    }

    logoutFromApplication(): void {
        console.log("Click on the profile icon. ")
        console.log("Click on the logout button. ")
    }

    navigateToApplication():void{

    }

    closeTheApplication(): void{
        
    }
}