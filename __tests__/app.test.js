const request = require('supertest');
const server = require('../server.js');

afterAll(() => {
  server.close();
});

test('It should respond to the GET method', async () => {
  const response = await request(server).get('/');
  expect(response.statusCode).toBe(404);
});

