import fs from 'fs';
import {PDFParse} from 'pdf-parse';

export class PDFUtil{


    static async readPDF(filePath: string): Promise<string> {

        //Verify whether the file exists. 
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        // Read the PDF file as a buffer
        const dataBuffer = fs.readFileSync(filePath);

        //Convert the pdf buffer into unit8Array
        const uint8Array = new Uint8Array(dataBuffer);

        // Convert the unit8Array to a string
        const pdfData = await new PDFParse(uint8Array);
        const pdfText = await pdfData.getText();

        return pdfText.text;

    }
}

let pdfText =await PDFUtil.readPDF('./files/Data.pdf');
console.log(pdfText.includes("Installing Playwright"));