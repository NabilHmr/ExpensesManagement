import { DataSource } from "typeorm"

export const dataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "admin",
    password: "BW&&6gmKP@AQna",
    database: "expensestracker",
    entities: [__dirname + "/**/entity/*.js"],
    logging: ["error"],
    synchronize: true,
    migrations: [__dirname + "/migration/*.js"],
})