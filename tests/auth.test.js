const request = require('supertest');
const app = require('../src/index');

describe('Auth Register', () => {
  it('should register a new user', async () => {
    const email=`user_${Date.now()}@example.com`;
    const res = await request(app)
      .post('/auth/register')
      .send({
        email: email,
        password: 'password123',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.user).toHaveProperty('email');
    expect(res.body.user.email).toBe(email);
  });
   it('should reject invalid password', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        email: 'test1@example.com',
        password: 'wrongpassword',
      });

    expect(res.statusCode).toBe(401);
  });


  it('should not allow duplicate emails', async () => {
  const email = `duplicate_${Date.now()}@example.com`;

  // First registration (should succeed)
  await request(app)
    .post('/auth/register')
    .send({
      email,
      password: 'password123',
    });

  // Second registration with same email (should fail)
  const res = await request(app)
    .post('/auth/register')
    .send({
      email,
      password: 'password123',
    });

  expect(res.statusCode).toBe(409);
  });
});

