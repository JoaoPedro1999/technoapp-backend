"use strict";
const Antl = use("Antl");

class Solicitation {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      company_id: "required|integer",
      requester: "required",
      phone: "required",
      machine: "required",
      issue_reported: "required"
    };
  }

  get messages() {
    return Antl.list("validation");
  }
}

module.exports = Solicitation;
