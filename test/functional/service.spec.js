const { test, trait } = use("Test/Suite")("Service");
const User = use("App/Models/User");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

trait("Test/ApiClient");
trait("DatabaseTransactions");
trait("Auth/Client");

test("it should be able to register a service", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();

  const company = await Factory.model("App/Models/Company").create();

  const response = await client
    .post("/service")
    .loginVia(user, "jwt")
    .send({
      company_id: company.id,
      description: "Manuntenção de máquinas",
      price: 90.0
    })
    .end();

  response.assertStatus(201);
  assert.exists(response.body);
});
