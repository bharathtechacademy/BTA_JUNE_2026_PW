import fs from 'fs';
import xlsx from 'xlsx';

export class ExcelUtil{

    static readExcel(filePath: string, sheetName: string): any {

        //Verify whether the file exists. 
        if(!fs.existsSync(filePath)){
            throw new Error(`File not found: ${filePath}`);
        }

        //Read the workbook from the Excel file. 
        const workbook = xlsx.readFile(filePath);

        //Get the specified sheet from the workbook. 
        const sheet = workbook.Sheets[sheetName];

        //Verify whether the sheet exists in the workbook.
        if (!sheet) {
            throw new Error(`Sheet not found: ${sheetName}`);
        }

        return xlsx.utils.sheet_to_json(sheet);
    }


}

let data = ExcelUtil.readExcel("./files/TestData.xlsx", "Sheet1");
console.log(data[1]["Email"]);