"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ServiceSolicitation extends Model {
  users() {
    return this.hasMany("App/Models/Users");
  }

  service() {
    return this.hasMany("App/Models/Service");
  }

  soliciation() {
    return this.hasMany("App/Models/Solicitation");
  }
}

module.exports = ServiceSolicitation;
