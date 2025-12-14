const request = require('supertest');
const app = require('../src/index');

describe('Sweet API (Admin only)', () => {

  it('should reject creating sweet without token', async () => {
    const res = await request(app)
      .post('/api/sweets')
      .send({
        name: 'Ladoo',
        category: 'Indian',
        price: 10,
        quantity: 100,
      });

    expect(res.statusCode).toBe(401);
  });

  it('should allow admin to create a sweet', async () => {
    const adminEmail = `admin_${Date.now()}@example.com`;

    // register admin
    await request(app).post('/auth/register').send({
      email: adminEmail,
      password: 'password123',
      role:'ADMIN'
    });

    // login admin
    const login = await request(app).post('/auth/login').send({
      email: adminEmail,
      password: 'password123',
    });

    const token = login.body.token;

    const res = await request(app)
      .post('/api/sweets')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Barfi',
        category: 'Indian',
        price: 20,
        quantity: 50,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Barfi');
  });

});
