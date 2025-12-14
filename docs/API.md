# Sweet Shop API Documentation

Base URL: `http://localhost:3000`

---

## Authentication

### Register User
**POST** `/auth/register`

**Request Body**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "role": "ADMIN"
}

