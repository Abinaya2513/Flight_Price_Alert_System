require("dotenv").config();
const sql = require("mssql");
const { Kafka } = require("kafkajs");

// configure sql server
const config = {
  user: process.env.SQL_SERVER_USER,
  password: process.env.SQL_SERVER_PASSWORD,
  database: process.env.SQL_SERVER_DATABASE,
  server: process.env.SQL_SERVER_HOST,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
};

// pull the data from sql server
const connectToSqlServer = async function () {
  try {
    // Connect to SQL Server
    await sql.connect(config);

    console.log("sql connected successfully");
    console.log("SQL_TABLE_NAME", process.env.SQL_TABLE_NAME);

    const tableName = process.env.SQL_TABLE_NAME;
    // Query to list all tables
    const result = await sql.query(
      `SELECT * FROM ${tableName} where Is_Current =1`);`
    );

    console.log("result:", result.recordset);
    return result.recordset;
  } catch (err) {
    console.log("Error in SQL Server connection:", err);
  }
};

// configure kafka
const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID,
  brokers: [process.env.KAFKA_BROKER],
  ssl: true,
  sasl: {
    mechanism: process.env.KAFKA_SASL_MECHANISM,
    username: process.env.KAFKA_SASL_USERNAME,
    password: process.env.KAFKA_SASL_PASSWORD,
  },
});

module.exports = {
  kafka,
  config,
  connectToSqlServer,
};
