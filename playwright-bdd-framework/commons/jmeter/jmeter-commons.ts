import { exec } from "child_process";
import { stderr, stdout } from "process";

export class JMeterCommons {

    //Common method to run any command from command line 
    runCommand(command: string): Promise<string> {
        return new Promise((resolve, reject) => {

            //Code to run commands from command line. 
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(`Error : ${error.message}`)
                } else {
                    resolve(stdout);
                }
                console.log(`Command executed :  " ${command} " Successfully`)
            })

        });
    }

    //Common Method to Run JMETER Test Plan 
    async runJMeterTestPlan(jmxFilePath: string): Promise<void> {

        console.log("Execution Started for JMeter Test Plan : " + jmxFilePath);

        //Update the relative path of the JMeter folder structure. 
        const projectRoot = process.cwd(); //playwright-tdd-framework
        const jmeterBasePath = `${projectRoot}/step-definitions/load/jmeter`;
        const jmeterToolPath = `${projectRoot}/step-definitions/load/jmeter/bin/jmeter.bat`;
        const testPlanPath = `${jmeterBasePath}/testplans/${jmxFilePath}`;

        //Update the relative path of the Test Results folder. 
        console.log(`Generating results for Jmeter Test Plan : ${jmxFilePath}`);
        const resultsPath = `${jmeterBasePath}/results/TestResults_${Date.now()}.csv`;
        const reportPath = `${jmeterBasePath}/report-output`;

        //Command to run JMeter Test Plan and generate results in CSV format.
        const command = `"${jmeterToolPath}" -n -t "${testPlanPath}" -l "${resultsPath}"`;
        console.log(`Executing JMeter Test Plan Command : ${command}`);
        await this.runCommand(command);

        //Command to generate JMeter HTML report from the results CSV file.
        const reportCommand = `"${jmeterToolPath}" -g "${resultsPath}" -o "${reportPath}"`;
        console.log(`Generating JMeter HTML Report Command : ${reportCommand}`);
        await this.runCommand(reportCommand);

    };

}