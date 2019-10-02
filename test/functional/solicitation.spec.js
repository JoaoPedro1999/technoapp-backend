const { test, trait } = use("Test/Suite")("Solicitacion");
const User = use("App/Models/User");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

trait("Test/ApiClient");
trait("DatabaseTransactions");

// test("it should be able to create an service solicitacion", async ({
//   assert,
//   client
// }) => {
//   const response = await client
//     .post("/solicitacion")
//     .send({
//       company_id: 1,
//       requester: "Teste",
//       machine: "Teste",
//       issue_reported:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare non neque sit amet gravida. Sed sollicitudin a velit sit amet vehicula. Aliquam tempus mattis risus sed pharetra. Fusce laoreet, justo in tincidunt placerat, turpis leo consequat nisl, accumsan tempus erat nunc id turpis. Curabitur eu elementum justo."
//     })
//     .end();

//   response.assertStatus(200);
//   assert.exists(response.body.token);
// });
