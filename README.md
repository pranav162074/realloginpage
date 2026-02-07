# Full-Stack Authentication System 🚀

A secure, responsive Login and Registration application built using the MERN stack (MongoDB, Express, Node.js). This project demonstrates a complete flow from the frontend UI to a cloud-based database.

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (Fetch API)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Cloud)
- **Security:** Bcrypt.js (Password Hashing), JSON Web Tokens (JWT)

---

## ✨ Features
- **User Registration:** Validates input and securely hashes passwords before saving to the database.
- **User Login:** Authenticates users and generates a JWT for secure session management.
- **Form Validation:** Real-time client-side and server-side validation (e.g., minimum password length).
- **Security First:** Uses environment variables to protect sensitive API keys and database credentials.

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account.

### 2. Installation
Clone the repository to your local machine:
git clone <your-repository-url>
cd realloginpage

### 3. Environment Setup
Create a `.env` file in the root directory and add your credentials:
- `PORT=5000`
- `MONGO_URI=your_mongodb_atlas_connection_string`
- `JWT_SECRET=your_random_secret_key`

## 📂 Project Structure
```text
realloginpage/
├── backend/
│   ├── auth.controller.js  # Logic for login/register
│   ├── user.model.js       # Mongoose schema and hashing
│   └── server.js           # Express server setup
├── frontend/
│   ├── index.html          # Main UI
│   ├── script.js           # Frontend logic & API calls
│   └── styles.css          # Styling
├── .gitignore              # Files to ignore in Git
└── README.md               # Project documentation

## 🎮 Usage
1. Open the project in your browser using **Live Server** (or by opening `frontend/index.html`).
2. Use the **Register** toggle to create a new account (Min. 6 characters for password).
3. Switch to **Login** to authenticate and receive your JWT.