module.exports = {
    development: {
        mysql: {
            host: "192.168.18.81",
            database: "yourgpt",
            username: "root",
            password: "12345678",
            port: 3306,
            dialect: 'mysql',
            dialectOptions: {
                bigNumberStrings: true
            }
        },
        mongodb: {
            url: "yourgpt-dev-user",
            options: {
                dbName: "mongodb+srv://yourgpt-dev-user:viMP6yHVWP6eZquU@yourgpt-dev.obc2jbs.mongodb.net/?retryWrites=true&w=majority"
            }
        }
    },
    test: {
        mysql: {
            host: "192.168.18.81",
            database: "yourgpt",
            username: "root",
            password: "12345678",
            port: 3306,
            dialect: 'mysql',
            dialectOptions: {
                bigNumberStrings: true
            }
        },
        mongodb: {
            url: "yourgpt-dev-user",
            options: {
                dbName: "mongodb+srv://yourgpt-dev-user:viMP6yHVWP6eZquU@yourgpt-dev.obc2jbs.mongodb.net/?retryWrites=true&w=majority"
            }
        }    },
    production: {
        mysql: {
            host: "192.168.18.81",
            database: "yourgpt",
            username: "root",
            password: "12345678",
            port: 3306,
            dialect: 'mysql',
            dialectOptions: {
                bigNumberStrings: true
            }
        },
        mongodb: {
            url: "yourgpt-dev-user",
            options: {
                dbName: "mongodb+srv://yourgpt-dev-user:viMP6yHVWP6eZquU@yourgpt-dev.obc2jbs.mongodb.net/?retryWrites=true&w=majority"
            }
        }
    }
};