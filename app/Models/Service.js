"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Service extends Model {
  serviceSolicitation() {
    return this.belongsToMany("App/Models/ServiceSolicitation");
  }
}

module.exports = Service;
