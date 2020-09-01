import knex from "knex";

export const connection = knex({
    client: "mysql",
    connection: {
        host : process.env.hostname,
        database : process.env.database,
        user : process.env.user,
        password : process.env.password,
        port : 3306
    }
})