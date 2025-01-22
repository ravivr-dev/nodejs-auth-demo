# Node.js Authentication and Authorization Demo

A simple Node.js project demonstrating authentication and authorization using **bcrypt** for password hashing and **JSON Web Tokens (JWT)** for secure user sessions. This project includes user registration, login, and role-based access control for user and admin endpoints.

---

## Features

- **User Registration:** Securely register users with hashed passwords.
- **Login:** Authenticate users and generate JWT tokens.
- **Role-Based Access Control:** Separate endpoints for users and admins.
- **Secure Passwords:** Passwords are hashed using bcrypt.
- **Token-Based Authentication:** JWT tokens are used to protect endpoints.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (for database)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ravivr-dev/nodejs-auth-demo.git
   cd nodejs-auth-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the following:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/nodejs-auth-demo
   JWT_SECRET=your_secret_key
   ```

4. Start the application:
   ```bash
   npm start
   ```

The server will run on `http://localhost:3000` by default.

---

## API Endpoints

### Public Endpoints

#### **Register a User**
**POST** `/api/register`

Request Body:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### **Login**
**POST** `/api/login`

Request Body:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "token": "your_jwt_token"
}
```

### Protected Endpoints

#### **User Endpoint**
**GET** `/api/user`

Headers:
```json
{
  "Authorization": "Bearer your_jwt_token"
}
```

#### **Admin Endpoint**
**GET** `/api/admin`

Headers:
```json
{
  "Authorization": "Bearer your_jwt_token"
}
```

---

## Folder Structure

```
nodejs-auth-demo/
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── userModel.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── .env
├── server.js
└── package.json
```

---

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing user data
- **bcrypt**: Library for hashing passwords
- **jsonwebtoken**: Library for creating and verifying JWT tokens

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions or improvements.

---

## Contact

For any inquiries or issues, please reach out:

- GitHub: [ravivr-dev](https://github.com/ravivr-dev)

