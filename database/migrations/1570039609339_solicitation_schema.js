"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SolicitationSchema extends Schema {
  up() {
    this.create("solicitations", table => {
      table.increments();
      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies")
        .onDelete("SET NULL")
        .onUpdate("CASCADE");
      table.string("requester").notNullable();
      table.string("phone");
      table.string("machine").notNullable();
      table.text("issue_reported").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("solicitations");
  }
}

module.exports = SolicitationSchema;
