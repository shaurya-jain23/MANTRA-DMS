import pkg from "pg";
const { Pool } = pkg;


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})


// Event listener for when a client connects to the pool
pool.on('connect', (client) => {
    console.log('PostgreSQL client connected!!!');
    // You can also set session variables or perform initial setup here
    // client.query('SET search_path TO public, "$user"');
});

// Event listener for errors on idle clients (e.g., connection lost)
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle PostgreSQL client', err);
    // No need to call client.release() here as it's already handled by the pool.
});

// Event listener for when a client is released back to the pool
// pool.on('release', (client) => {
//      console.log('PostgreSQL client released'); // Can be noisy for frequent operations
// });

export default pool;