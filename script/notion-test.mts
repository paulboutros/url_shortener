// make sure, to to go top left menu,  connection then share with my integration

//node --loader ts-node/esm notion-test.mts   

import * as dotenv from 'dotenv';
import { Client, PageObjectResponse } from '@notionhq/client';
import { writeFileSync } from 'fs';

dotenv.config();

/*
export NOTION_TOKEN="secret_fBfi7m3Mywg2YvU4wL1pAhtWa1NvBzghfSReTQVtyOO"
export NOTION_DB_ID="200dcf1514f881c5ba42cf0e368c1df6"
*/

const NOTION_TOKEN = "secret_fBfi7m3Mywg2YvU4wL1pAhtWa1NvBzghfSReTQVtyOO"; // s" process.env.NOTION_TOKEN;
const DATABASE_ID = "200dcf1514f881c5ba42cf0e368c1df6";// process.env.NOTION_DB_ID;

if (!NOTION_TOKEN || !DATABASE_ID) {
  console.error('❌ Please set NOTION_TOKEN and NOTION_DB_ID in your environment or .env file');
  process.exit(1);
}

const jsonDataTowrite: Record<string, string> = {};
const notion = new Client({ auth: NOTION_TOKEN });

async function testDatabaseAccess() {
  try {
    // Assert DATABASE_ID is defined using non-null assertion
  //  const db = await notion.databases.retrieve({ database_id: DATABASE_ID! });

    
    

 const response = await notion.databases.query({
    database_id: DATABASE_ID,
    
  });
  console.log(response);



   
 for (const page of response.results) {
  const properties = (page as PageObjectResponse).properties;
  const formulaProperty = properties["JSON_entry"];

  if (formulaProperty && formulaProperty.type === "formula") {
    const formula = formulaProperty.formula;

   if (formula.type === "string" && formula.string) {
        const pairString = formula.string.trim();
        const match = pairString.match(/"([^"]+)"\s*:\s*"([^"]+)"/);

        if (match) {
          const key = match[1];
          const value = match[2];
          jsonDataTowrite[key] = value;
        } else {
          console.warn("Skipping invalid pair string:", pairString);
        }
      }






  }
}


  //console.log("Final JSON object:", jsonDataTowrite);
const jsonString = JSON.stringify(jsonDataTowrite, null, 2);
console.log(jsonString);

     writeFileSync("outputXX.json", jsonString);
/*
 console.log(
      'Database title:',
      db  
    ); 
*/

    /*
    console.log(
      'Database title:',
      db.title?.map(t => t.plain_text).join(' ') || 'Untitled'
    );*/
  } catch (error) {
    console.error('❌ Error accessing Notion database:', error);
    process.exit(1);
  }
}

testDatabaseAccess();
