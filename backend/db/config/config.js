require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_MIGRATION_PORT,
    dialect: 'postgres',
    seederStorage: 'sequelize',
    seederStorageTableName: 'seeders',
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'migrations',
  },
}
