const request = require('supertest');
const app = require('../server');

describe('Test the root path', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(3000, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  test('It should respond to the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  // Add more tests as needed
});

