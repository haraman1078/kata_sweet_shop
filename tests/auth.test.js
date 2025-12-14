const request = require('supertest');
const app = require('../src/index');

describe('Auth Register', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        email: 'test1@example.com',
        password: 'password123',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.user).toHaveProperty('email');
    expect(res.body.user.email).toBe('test1@example.com');
  });

  it('should not allow duplicate emails', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        email: 'test1@example.com',
        password: 'password123',
      });

    expect(res.statusCode).toBe(409);
  });
});

