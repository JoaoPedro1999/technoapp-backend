const { test, trait } = use("Test/Suite")("Company");
const User = use("App/Models/Company");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

trait("Test/ApiClient");
trait("DatabaseTransactions");
trait("Auth/Client");

test("it should be able to register a company", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();

  const response = await client
    .post("/company")
    .loginVia(user, "jwt")
    .send({
      corporate_name: "Testando",
      cnpj: "12345678910",
      address: "Teste",
      phone: "16999999999",
      email: "teste@teste.com"
    })
    .end();

  response.assertStatus(201);
  assert.exists(response.body);
});

test("it should be able to list companies", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();

  const company = await Factory.model("App/Models/Company").create();

  const response = await client
    .get("/company")
    .loginVia(user, "jwt")
    .end();

  response.assertStatus(200);
  assert.deepEqual(response.body[0].corporate_name, company.corporate_name);
});

test("it should be able to show single company", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();

  const compamy = await Factory.model("App/Models/Company").create();

  const response = await client
    .get(`/company/${compamy.id}`)
    .loginVia(user, "jwt")
    .end();

  response.assertStatus(200);
  assert.deepEqual(response.body.corporate_name, compamy.corporate_name);
});

test("it should be able to update company", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();

  const company = await Factory.model("App/Models/Company").create({
    corporate_name: "Old Title"
  });

  const response = await client
    .put(`/company/${company.id}`)
    .loginVia(user, "jwt")
    .send({
      ...company.toJSON(),
      corporate_name: "New Title"
    })
    .end();

  response.assertStatus(200);
  assert.equal(response.body.corporate_name, "New Title");
});

test("it should be able to delete a company", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();

  const company = await Factory.model("App/Models/Company").create();

  const response = await client
    .delete(`/company/${company.id}`)
    .loginVia(user, "jwt")
    .end();

  response.assertStatus(204);
});
