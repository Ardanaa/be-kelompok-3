require("dotenv").config();

module.exports = {
  development: {
    username: "bigqmwqtwcgcbs",
    password: "382430240122fb0f256106e773566b76eff3948647cf2eb78a839987d523456f",
    database: "d3p47loa4mprnc",
    host: "ec2-50-19-255-190.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: "postgres",
    password: "sanlokaja123",
    database: "secondhand_db",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "bigqmwqtwcgcbs",
    password: "382430240122fb0f256106e773566b76eff3948647cf2eb78a839987d523456f",
    database: "d3p47loa4mprnc",
    host: "ec2-50-19-255-190.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};