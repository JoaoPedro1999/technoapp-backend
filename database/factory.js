"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/User", (faker, i, data = {}) => {
  return {
    name: faker.name(),
    email: faker.email(),
    password: faker.string(),
    ...data
  };
});

Factory.blueprint("App/Models/Company", (faker, i, data = {}) => {
  return {
    corporate_name: faker.sentence({ words: 2 }),
    address: faker.string(),
    cnpj: faker.string(),
    phone: faker.string(),
    email: faker.email(),
    ...data
  };
});

Factory.blueprint("App/Models/Solicitation", (faker, i, data = {}) => {
  return {
    requester: faker.sentence({ words: 2 }),
    machine: faker.sentence({ words: 2 }),
    phone: faker.string(),
    issue_reported: faker.paragraph(),
    ...data
  };
});
