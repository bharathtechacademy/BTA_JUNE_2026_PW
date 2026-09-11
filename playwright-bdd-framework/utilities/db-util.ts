import queries from '../config/data.json' with {type: "json"};
import config  from '../config/config.json' with {type: "json"};
import { Client } from 'pg';

export class DBCommons {

    async getData(query: string): Promise<Array<Object>> {

        //Create a new client instance configuration to connect with the database. 
            const dbClient = new Client({
                host: config.db.host,
                port: config.db.port,
                user: config.db.username,
                password: config.db.password,
                database: config.db.database
        });

        //Connect with the database with the above connection details. 
        await dbClient.connect();

        //Execute the query and store the result in a variable.
        const data = await dbClient.query(query);

        //Close the database connection. 
        await dbClient.end();

        //Return the records received from the database. 
        return data.rows;
    }
}

let obj = new DBCommons();
let results =await obj.getData(queries.top10horrorMovies);
// console.log(results);
console.log(results[1]["film_name"])