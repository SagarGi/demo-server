const mysql = require("mysql2");
require("dotenv").config({ path: __dirname + "/.env" });
const pool = mysql.createPool({
    host: process.env.DBHOST || "localhost",
    port: process.env.DBPORT || 3306,
    user: process.env.DBUSER || "root",
    password: process.env.DBPASSWORD || "root",
});
// Connect to the MySQL server
pool.getConnection((err, connection) => {
    console.log("Seeding ...................")
    if (err) {
        console.error('Error acquiring connection:', err.stack);
        return;
    }

    console.log('Connected to the database successfully!!');

    // Create a database
    connection.query('CREATE DATABASE IF NOT EXISTS demodb', (err) => {
        if (err) {
            console.error('Error creating database:', err.stack);
            connection.release();
            return;
        }

        console.log('Database "demodb" created successfully!!');

        // Use the created database
        connection.query('USE demodb', (err) => {
            if (err) {
                console.error('Error using database "demodb":', err.stack);
                connection.release();
                return;
            }

            // Define an SQL query to create a table
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS users (
                    id INT PRIMARY KEY AUTO_INCREMENT,
                    fullname VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL
                );
            `;

            // Execute the query to create the table
            connection.query(createTableQuery, (err) => {
                if (err) {
                    console.error('Error creating table "users":', err.stack);
                } else {
                    console.log('Table "users" created successfully!!!');

                    // Insert a dummy user into the users table
                    const insertUserQuery = `
                        INSERT INTO users (fullname, email)
                        VALUES ('Jhon Doe', 'jhon@example.com');
                    `;


                    connection.query(insertUserQuery, (err) => {
                        if (err) {
                            console.error('Error inserting user:', err.stack);
                        } else {
                            console.log('Dummy user inserted successfully.');
                        }
                        connection.release();
                        pool.end((err) => {
                            if (err) {
                                console.error('Error closing the pool!!!', err.stack);
                            } else {
                                console.log("Seeding successful!!")
                            }
                        });

                    });
                }
            });
        });
    });
});
