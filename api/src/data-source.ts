import { DataSource } from "typeorm"

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 15432,
    username: "postgres",
    password: "postgres",
    database: "expensestracker",
    entities: [__dirname + "/**/entity/*.js"],
    logging: ["error"],
    synchronize: true,
    migrations: [__dirname + "/migration/*.js"],
})