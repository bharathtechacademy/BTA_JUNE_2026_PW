import { Given, Then } from '@cucumber/cucumber';
import { JMeterCommons } from '../../commons/jmeter/jmeter-commons.ts';

let jmeter :JMeterCommons;

Given('Initialize the JMeter utility.', async function() {
    jmeter = new JMeterCommons();
});

Then('Execute the JMeter test plan {string} and publish the results.', async function (testplanName : string) {
    await jmeter.runJMeterTestPlan(testplanName);
});

