// 1. npm i

// 2. создаём файл .sequelizerc
const path = require("path");
require("dotenv").config();

module.exports = {
  config: path.resolve("db", "config", "database.json"),
  "models-path": path.resolve("db", "models"),
  "seeders-path": path.resolve("db", "seeders"),
  "migrations-path": path.resolve("db", "migrations"),
};

// 3. npx sequelize init

// 4. в database.json задаём параметры базы данных у всех одинаково ("database": "myshop",)

{
  "development": {
    "username": "name",
    "password": '1',
    "database": "myshop",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
}

// * npx sequelize db:create

<<<<<<< HEAD
// * npx sequelize model:generate --name User --attributes firstName:string,middleName:string,lastName:string,email:string,phone:string,password:string,isAdmin:boolean
// * npx sequelize model:generate --name Category --attributes categoryName:string
// * npx sequelize model:generate --name TypeHouse --attributes typeHouseName:string
// * npx sequelize model:generate --name Region  --attributes regionName:string

// * npx sequelize model:generate --name House --attributes categoryId:integer,typeHouseId:integer,regionId:integer,price:integer,description:text,photo:string,address:string,geoTag:string
// * npx sequelize model:generate --name Favorite --attributes userId:integer,houseId:integer


// * npx sequelize model:generate --name Category --attributes rentPeriod:string,typeHouse:string,region:string

// * npx sequelize model:generate --name RentOrders --attributes userId:integer,houseId:integer


// * npx sequelize model:generate --name feedback --attributes name:string,phone:string,number:string,comment:text




=======
// * npx sequelize model:generate --name User --attributes name:string,email:string,password:string,isAdmin:boolean
>>>>>>> 41206e678bf6217d8443be6b6cb37bb45896a2b3
// * npx sequelize model:generate --name Product --attributes name:string,description:text,price:integer
// * npx sequelize model:generate --name CartUser --attributes userId:integer,productId:integer,quantity:integer,priceForAllOneProduct:integer
// Чисто для отработки связи many-to-many:
// * npx sequelize model:generate --name ProductAndUser --attributes userId:integer,productId:integer

// * npx sequelize db:migrate

// * npx sequelize db:migrate:undo:all

//5. в таблице Users поставить значение по умолчанию у isAdmin
isAdmin: {
  type: Sequelize.BOOLEAN,
  defaultValue: false,
},
