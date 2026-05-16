# E-Commerce Shopify App

A full-stack E-Commerce web application built using **React** for the frontend and **Django REST Framework (DRF)** for the backend.

The project includes category-based shopping for **Men**, **Women**, and **Kids**, along with a secure authentication system and frontend form validation using **Zod**.

---

# Features

## Authentication System

* User Registration
* User Login
* Token-based Authentication using Django REST Framework
* Protected Routes

## Form Validation

Frontend validation implemented using **Zod** for:

* Register Form
* Login Form

## Frontend

* Responsive UI using React
* Reusable Components
* Dynamic Routing

##  Backend

* REST APIs using Django REST Framework
* User Authentication APIs


# Tech Stack

## Frontend

* React.js
* React Router
* Axios
* Zod

## Backend

* Django
* Django REST Framework
* MySQL

---

# Project Structure

```bash
Ecommerce-App/
│
├── frontend/
│   ├── assests/
│   ├── components/
│   ├── context/
│   ├── pages/
│   └── utilis/
│
├── backend/
│   ├── accounts/
│   ├── config/
│   └── manage.py
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/anupjain10/E-Commerce-App.git
cd ecommerce-app
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

```bash
cd backend

python -m venv env
```

## Activate Virtual Environment

### Windows

```bash
env\Scripts\activate
```


Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Start backend server:

```bash
python manage.py runserver
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

#  Authentication Flow

1. User registers using the Register form
2. Zod validates form data on the frontend
3. Request sent to Django REST Framework API
4. User logs in successfully
5. Protected routes become accessible after authentication

---

# Author

Developed by **Anup Jain**

---
