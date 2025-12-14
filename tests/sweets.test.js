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
});
