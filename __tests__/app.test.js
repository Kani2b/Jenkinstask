const request = require('supertest');
const server = require('../server.js');

afterAll(() => {
  server.close();
});

test('It should respond to the GET method with a failure', async () => {
  const response = await request(server).get('/');
  expect(response.statusCode).toBe(200); // Change the expected status code to 200 (intentional failure)
});
