import { DataSource } from "typeorm"

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "your_username",
    password: "your_password",
    database: "expensestracker",
    entities: [__dirname + "/**/entity/*.js"],
    logging: ["query", "error"],
    synchronize: true,
    migrations: [__dirname + "/migration/*.js"],
})