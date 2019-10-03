"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.post("/sessions", "SessionController.store");
Route.post("/solicitation", "SolicitationController.store").validator(
  "Solicitation"
);

Route.group(() => {
  Route.resource("/company", "CompanyController").apiOnly();

  Route.get("/service", "ServiceController.index");
  Route.post("/service", "ServiceController.store");

  Route.get("/solicitation", "SolicitationController.index");
  Route.get("/solicitation/:id", "SolicitationController.show");
  Route.delete("/solicitation/:id", "SolicitationController.destroy");

  Route.post(
    "/solicitation/:solicitation_id/servicesolicitation",
    "ServiceSolicitationController.store"
  );
  Route.put("servicesolicitation/:id", "ServiceSolicitationController.update");
}).middleware("auth");
