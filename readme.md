# Sweet Shop Management System (Backend)

A backend REST API for managing a sweet shop, built using **Node.js**, **Express**, **PostgreSQL**, and **Prisma ORM**, with authentication, authorization, and test-driven development.

---

## Features Implemented

###  Authentication & Authorization
- User registration and login using **JWT**
- Secure password hashing using **bcrypt**
- Role-based access control:
  - `USER`
  - `ADMIN`

###  Admin Capabilities
- Create new sweets (protected route)
- Access restricted endpoints using JWT + role verification

### User Capabilities
- Register and login
- Access public endpoints

###  Testing (TDD)
- Unit & integration tests using **Jest** and **Supertest**
- Auth flows tested:
  - Register
  - Login
  - Duplicate email handling
- Authorization tested:
  - Admin-only sweet creation
  - Unauthorized access rejection

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Testing**: Jest, Supertest
- **Security**: bcrypt, dotenv

---

##  Project Structure

## Time Constraints & Scope

Due to limited time, this project focuses on backend correctness,
security, and test coverage rather than feature completeness.

All unfinished features are documented and intentionally left as placeholders
to demonstrate design intent and future extensibility.
