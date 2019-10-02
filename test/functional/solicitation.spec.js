const { test, trait } = use("Test/Suite")("Solicitacion");
const User = use("App/Models/User");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

trait("Test/ApiClient");
trait("DatabaseTransactions");
trait("Auth/Client");

test("it should be able to create an service solicitacion", async ({
  assert,
  client
}) => {
  const company = await Factory.model("App/Models/Company").create();

  const response = await client
    .post("/solicitation")
    .send({
      company_id: company.id,
      requester: "Teste",
      phone: "123456789",
      machine: "Teste",
      issue_reported:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare non neque sit amet gravida. Sed sollicitudin a velit sit amet vehicula. Aliquam tempus mattis risus sed pharetra. Fusce laoreet, justo in tincidunt placerat, turpis leo consequat nisl, accumsan tempus erat nunc id turpis. Curabitur eu elementum justo."
    })
    .end();

  response.assertStatus(201);
  assert.exists(response.body);
});

test("it should be able to list solicitations", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();

  const company = await Factory.model("App/Models/Company").create();

  const solicitacion = await Factory.model("App/Models/Solicitation").create({
    company_id: company.id
  });

  const response = await client
    .get("/solicitation")
    .loginVia(user, "jwt")
    .end();

  response.assertStatus(200);
  assert.deepEqual(response.body[0].requester, solicitacion.requester);
});

test("it should be able to show single solicitacion", async ({
  assert,
  client
}) => {
  const user = await Factory.model("App/Models/User").create();

  const company = await Factory.model("App/Models/Company").create();

  const solicitacion = await Factory.model("App/Models/Solicitation").create({
    company_id: company.id
  });

  const response = await client
    .get(`/solicitation/${solicitacion.id}`)
    .loginVia(user, "jwt")
    .end();

  response.assertStatus(200);
  assert.deepEqual(response.body.requester, solicitacion.requester);
});

test("it should be able to delete a solicitacion", async ({
  assert,
  client
}) => {
  const user = await Factory.model("App/Models/User").create();

  const company = await Factory.model("App/Models/Company").create();

  const solicitacion = await Factory.model("App/Models/Solicitation").create({
    company_id: company.id
  });

  const response = await client
    .delete(`/solicitation/${solicitacion.id}`)
    .loginVia(user, "jwt")
    .end();

  response.assertStatus(204);
});
