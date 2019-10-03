const { test, trait } = use("Test/Suite")("Service Solicitation");
const User = use("App/Models/User");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

trait("Test/ApiClient");
trait("DatabaseTransactions");
trait("Auth/Client");

test("it should be able to accept a service", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();

  const company = await Factory.model("App/Models/Company").create();

  const solicitation = await Factory.model("App/Models/Solicitation").create({
    company_id: company.id
  });

  const response = await client
    .post(`/solicitation/${solicitation.id}/servicesolicitation`)
    .loginVia(user, "jwt")
    .send({
      user_id: user.id,
      solicitation_id: solicitation.id
    })
    .end();

  response.assertStatus(200);
  assert.exists(response.body);
});
