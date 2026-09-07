import { exec } from "child_process";


export class JMeterCommons {

    // Common method to run any command from command line (cmd)
    runCommand(command: string): Promise<string> { //method to run any command from cmd

        return new Promise((resolve, reject) => {  // new promise to get output from command or error if command is invalid

            exec(command, (error, stdout, stderr) => { // command to execute , error => invalid command , stdout => output of the command , stderr => error in command execution
                if (error) {
                    reject(`Error executing command: ${error.message}`);
                } else {
                    resolve(stdout);
                }
                console.log(`Command executed Successfully: ${command}`);
            });


        });
    }

    // Common method to run the JMETER test plan
    async runJmeterTestPlan(testPlanPath: string): Promise<void> {

        console.log("Execution started for JMeter test plan : " + testPlanPath);

        //Store the path of the JMETER folder structure. 
        const projectRoot = process.cwd(); //playwright-tdd-framework
        const jmeterBasePath = `${projectRoot}/tests/load/jmeter`; //path to jmeter folder
        const jmeterToolPath = `${jmeterBasePath}/bin/jmeter.bat`; //path to jmeter tool
        const jmeterTestPlanPath = `${jmeterBasePath}/testplans/${testPlanPath}`; //path to jmeter test plan

        // Add the folder structure to store the test results. 
        const jmeterResultsPath = `${jmeterBasePath}/results/TestResults_${Date.now()}.csv`; //path to store test results
        const jmeterHtmlReportPath = `${jmeterBasePath}/report-output`; //path to store HTML report

        //Command to run JMETER test plan and generate the test results in CSV format 
        const command = `"${jmeterToolPath}" -n -t "${jmeterTestPlanPath}" -l "${jmeterResultsPath}"`;
        console.log(`Executing the JMeter test plan command. : ${command}`)
        await this.runCommand(command);

        //Command to generate the HTML report from the test results generated in the CSV format 
        const htmlReportCommand = `"${jmeterToolPath}" -g "${jmeterResultsPath}" -o "${jmeterHtmlReportPath}"`;
        console.log(`Executing the JMeter Html report generation command. : ${htmlReportCommand}`)
        await this.runCommand(htmlReportCommand);

    }

}