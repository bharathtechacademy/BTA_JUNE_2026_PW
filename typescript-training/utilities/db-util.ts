import { Client } from 'pg';
import config from '../config/config.json' with {type: 'json'};
import { top10HorrorMovies } from '../queries/queries.ts';

class DBCommons {

async getData(query: string): Promise<Array<Object>> {

    //Create an instance configuration /connection details to connect the database. 
    const dbConfig = new Client({
        host:config.db.host,
        port:config.db.port,
        user:config.db.username,
        password:config.db.password,
        database:config.db.database
    })

    //Connect with the database with the above connection details. 
    await dbConfig.connect();

    //Execute the query and store the result in one of the variables. 
    const data = await dbConfig.query(query);

    //Close the database connection. 
    await dbConfig.end();

    //Written the records received from the database 
    return data.rows;
}

}

let obj = new DBCommons();
let dbData = await obj.getData(top10HorrorMovies);
console.log(dbData);