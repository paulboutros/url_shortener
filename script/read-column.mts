


import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';




type CsvRow = {
  slug: string;
  source: string;
  campaign: string;
  content: string;
  JSON_entry: string;
};

// notion integration: https://www.notion.so/profile/integrations/internal/2bc06797-864b-4bf5-9a27-0a7493f0ff39
 

// Define __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const results: CsvRow[] = [];

// Adjust path as needed
const csvFilePath = path.resolve(__dirname, '../UTM_Builder2.csv');


 




fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (data: CsvRow) => results.push(data))
  .on('end', () => {
    console.log('Slugs:', results.map(row => row.JSON_entry));
  });

//node --loader ts-node/esm read-column.mts