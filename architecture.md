# System Architecture

This document explains the backend architecture, request flow, and design decisions
for the Sweet Shop Backend API.

---

## High-Level Architecture

Client → Express Server → Middleware → Routes → Prisma ORM → PostgreSQL

---

## Technology Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Jest & Supertest (TDD)

---

## Folder Structure Overview

---

## Authentication Flow

1. User registers using `/auth/register`
2. User logs in using `/auth/login`
3. Server generates a JWT token
4. Token includes:
   - `userId`
   - `role`
5. Token is sent in the `Authorization` header for protected routes

---

## Authorization Strategy

- Role-based access control (RBAC)
- Supported roles:
  - `USER`
  - `ADMIN`
- Authorization is enforced using middleware

---

## Request Flow Example (Admin Create Sweet)

1. Admin logs in and receives JWT token
2. Client sends request to `/api/sweets`
3. Request passes through:
   - JWT authentication middleware
   - Admin role-check middleware
4. Controller validates request data
5. Prisma ORM creates a new sweet in the database
6. Server returns `201 Created`

This flow is fully implemented and tested.

---

## Middleware Responsibilities

### Authentication Middleware
- Verifies JWT token
- Attaches decoded user data to `req.user`

### Admin Middleware
- Checks if `req.user.role === 'ADMIN'`
- Rejects request with `403 Forbidden` if not admin

---

## Database Layer

- Prisma ORM is used for database interaction
- PostgreSQL is the primary database
- Schema-driven migrations ensure consistency

---

## Testing Strategy

- Test-driven development (TDD)
- Jest + Supertest
- Tests cover:
  - User registration
  - User login
  - Admin-only sweet creation
  - Authorization failures

---

## Design Decisions

- Security-first approach (JWT + RBAC)
- Clear separation of concerns
- Explicit error handling
- Placeholder routes added for future extensibility

---

## Current Limitations

- No frontend implementation
- No order or purchase flow yet
- Read-only sweet listing not implemented

These are documented and planned for future development.

