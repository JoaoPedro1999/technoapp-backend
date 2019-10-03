"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ServiceSolicitationSchema extends Schema {
  up() {
    this.create("service_solicitations", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("SET NULL")
        .onUpdate("CASCADE");
      table
        .integer("solicitation_id")
        .references("id")
        .inTable("solicitations")
        .onDelete("SET NULL")
        .onUpdate("CASCADE");
      table.timestamp("accepted_at");
      table.timestamp("started_at");
      table.timestamp("finished_at");
      table.float("final_price");
      table.timestamps();
    });
  }

  down() {
    this.drop("service_solicitations");
  }
}

module.exports = ServiceSolicitationSchema;
