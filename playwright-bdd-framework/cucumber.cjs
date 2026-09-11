module.exports ={
    default:{
        // paths: ['features/**/*.feature'],
        import: ['step-definitions/**/*.ts','support/**/*.ts'],
        loader:['ts-node/esm'],
        format:['progress-bar','html:reports/cucumber-report.html'],
        publishQuiet: true
    }

}