import { test } from '@playwright/test';
import { JMeterCommons } from '../../commons/jmeter/jmeter-commons.ts';

test.describe('Git API Load Tests', () => {

    let jmeter: JMeterCommons;

    test.beforeEach(() => {
        jmeter = new JMeterCommons();
    })

    //Test Case 1: Run JMeter test plan 'LoadTest.jmx'
    test('Run Jmeter test plan', async () => {   
        const jmxFileName = 'LoadTest.jmx';
        await jmeter.runJmeterTestPlan(jmxFileName);
    })


})