"use strict";
const Antl = use("Antl");

class Company {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      corporate_name: "required",
      cnpj: "required",
      address: "required",
      phone: "required",
      email: "required"
    };
  }

  get messages() {
    return Antl.list("validation");
  }
}

module.exports = Company;
