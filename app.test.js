import { app } from './app';
import request from 'supertest';

describe("Test sucess path", () => {
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/success");
    expect(response.statusCode).toBe(200);
  });
});