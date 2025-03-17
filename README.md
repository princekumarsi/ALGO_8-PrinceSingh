# ALGO_8-PrinceSingh
Authentication Module - Documentation
Overview
This project is a full-stack authentication module designed for secure user authentication and management. The frontend is deployed on Netlify, while the backend is powered by Supabase, a scalable backend-as-a-service (BaaS) that provides authentication, database, and API functionalities.
Live Deployment
Frontend (Netlify): 
Backend (Superbase API): 
Tech Stack
Frontend: React.js (or HTML, CSS, JavaScript) – Deployed on Netlify
Backend: Supabase (PostgreSQL, Authentication, API)
Authentication: Supabase Auth (JWT-based authentication)
Hosting: Netlify (Frontend), Supabase (Backend)
Features
User Authentication (JWT-based)
Signup – Register new users securely.
Login – Authenticate users and issue a JWT token.
Logout – Handle user session termination.
User Management (CRUD APIs)
Create User – Add new users to the database.
Read User(s) – Fetch user details.
Update User – Modify user data.
Delete User – Remove user accounts.
Additional Features
Secure authentication with Supabase Auth
Database management using Supabase PostgreSQL
Protected routes using JWT authentication
Setup Instructions
1. Clone the Repository
git clone <your-repo-link>
cd authentication-module

2. Backend Setup (Supabase)
Create a Supabase Project:
Go to Supabase.
Create a new project and get the API URL and Anon Key.
Set up authentication providers in the Supabase dashboard.
Configure Database:
Use the built-in PostgreSQL database.
Create a users table with fields like id, email, password, etc.
3. Frontend Setup (React & Netlify)
Install Dependencies:
cd frontend
npm install

Create a .env File in the Frontend Directory:
REACT_APP_SUPABASE_URL=<your-supabase-api-url>
REACT_APP_SUPABASE_ANON_KEY=<your-supabase-anon-key>

Start the Frontend Locally:
npm start

API Endpoints (Superbase Functions)
POST /signup → Register a user
POST /login → Authenticate user
GET /users → Fetch all users
PUT /users/:id → Update user data
DELETE /users/:id → Delete user

Deployment Steps
Deploy Backend on Supabase
Create a new Supabase project.
Copy your API URL and Anon Key.
Set authentication rules for security.
Deploy Frontend on Netlify
Push frontend code to GitHub.
Go to Netlify and create a new site.
Connect to your GitHub repository.
Add environment variables (REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY).
Deploy the project.
