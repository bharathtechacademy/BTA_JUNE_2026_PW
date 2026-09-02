import {exec} from "child_process";


export class JMeterCommons {

// Common method to run any command from command line (cmd)
runCommand(command: string): Promise<string> { //method to run any command from cmd

    return new Promise((resolve, reject) => {  // new promise to get output from command or error if command is invalid

        exec(command, (error, stdout, stderr) => { // command to execute , error => invalid command , stdout => output of the command , stderr => error in command execution
            if (error) {
                reject(`Error executing command: ${error.message}`);
            } else if (stderr) {
                reject(`Command executed with errors: ${stderr}`);
            } else {
                resolve(stdout);
            }
            console.log(`Command executed Successfully: ${command}`);
        });


    });
}

// Common method to run the JMETER test plan


}