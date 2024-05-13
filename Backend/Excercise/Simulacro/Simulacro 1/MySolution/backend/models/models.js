import sequelize from "../data/db.js";
import { DataTypes } from "sequelize";

export const Starbucks = sequelize.define(
  "STARBUCKS_DIRECTORY",
  {
    number: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      field: "STORE_NUMBER",
    },
    store_name: {
      type: DataTypes.TEXT,
      field: "STORE_NAME",
    },
    address: {
      type: DataTypes.TEXT,
      field: "STREET_ADDRESS",
    },
    city: {
      type: DataTypes.TEXT,
      field: "CITY",
    },
    province: {
      type: DataTypes.TEXT,
      field: "PROVINCE",
    },
    country: {
      type: DataTypes.TEXT,
      field: "COUNTRY",
    },
    postcode: {
      type: DataTypes.TEXT,
      field: "POSTCODE",
    },
    longitude: {
      type: DataTypes.REAL,
      field: "LONGITUDE",
    },
    latitude: {
      type: DataTypes.REAL,
      field: "LATITUDE",
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "STARBUCKS_DIRECTORY",
  }
);

/* export default Starbucks; */
