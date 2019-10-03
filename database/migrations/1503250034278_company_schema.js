"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CompanySchema extends Schema {
  up() {
    this.create("companies", table => {
      table.increments();
      table.string("corporate_name").notNullable();
      table.string("cnpj").notNullable();
      table.string("address").notNullable();
      table.string("phone").notNullable();
      table.string("email").notNullable();
      table.boolean("client").defaultTo("false");
      table.timestamps();
    });
  }

  down() {
    this.drop("companies");
  }
}

module.exports = CompanySchema;
