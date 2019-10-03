"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Solicitation = use("App/Models/Solicitation");
const Service = use("App/Models/Service");
const ServiceSolicitation = use("App/Models/ServiceSolicitation");
const format = require("date-fns/format");
const formatDistance = require("date-fns/formatDistance");
const differenceInHours = require("date-fns/differenceInHours");
const differenceInMinutes = require("date-fns/differenceInMinutes");

/**
 * Resourceful controller for interacting with servicesolicitations
 */
class ServiceSolicitationController {
  /**
   * Show a list of all servicesolicitations.
   * GET servicesolicitations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Create/save a new servicesolicitation.
   * POST servicesolicitations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, params, auth }) {
    const { solicitation_id } = params;

    const solicitation = await Solicitation.find(solicitation_id);

    const serviceSolicitation = ServiceSolicitation.create({
      solicitation_id: solicitation.id,
      user_id: auth.user.id
    });

    return serviceSolicitation;
  }

  /**
   * Display a single servicesolicitation.
   * GET servicesolicitations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing servicesolicitation.
   * GET servicesolicitations/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update servicesolicitation details.
   * PUT or PATCH servicesolicitations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const data = request.only(["accepted_at", "started_at", "finished_at"]);

    const serviceSolicitation = await ServiceSolicitation.find(params.id);

    if (serviceSolicitation.finished_at) {
      const service = await Service.find(serviceSolicitation.service_id);

      var final_price =
        differenceInMinutes(
          serviceSolicitation.finished_at,
          serviceSolicitation.started_at
        ) *
        (service.price / 60);
    }

    serviceSolicitation.merge({ ...data, final_price: final_price });

    await serviceSolicitation.save();

    return serviceSolicitation;
  }

  /**
   * Delete a servicesolicitation with id.
   * DELETE servicesolicitations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = ServiceSolicitationController;
