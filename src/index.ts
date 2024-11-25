// create a table 
import { Client } from "pg";

//postgres://your_username:your_password@localhost:5432/your_database
const client = new Client({
    host: '/tmp',          // Use the Unix socket path here
    port: 5432,            // Port number for PostgreSQL
    database: 'sanc',      // Your database name
    user: 'sanc',          // Your username
    //password: 'your_password', // Replace with your password (if required)
});



async function connectDb(){
    await client.connect();
}
connectDb();

const getUsers =  async ()=>{ 
    
    const result =  await client.query('SELECT * from users');
    console.log(result.rows.at(0));
}

const insertUser = async (username :string, email : string, password : string)=>{

    const query = `INSERT INTO users(username,email,password)
        VALUES ($1 , $2 , $3 );
        `;
    console.log(query);
    const result = await client.query(query, [username,email,password]);
    console.log(result); 
}

//getUsers();
insertUser("TheFlash4" , "flash5@gmail1.com" , "flash");
