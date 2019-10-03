"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ServiceSchema extends Schema {
  up() {
    this.create("services", table => {
      table.increments();
      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies")
        .onDelete("SET NULL")
        .onUpdate("CASCADE");
      table.string("description").notNullable();
      table.float("price").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("services");
  }
}

module.exports = ServiceSchema;
