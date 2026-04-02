# Yumes

Yumes is an educational platform built with a modern tech stack, designed as a learning project for SEO optimization. It features a Node.js backend and a Next.js frontend, providing functionality for managing products, categories, orders, user authentication, news, and addresses. The project includes lab reports on semantic core development, site structure, and silo architecture for search engine optimization.

## Lab reports

See lab reports in [labs/](labs/) folder:
- [Lab 1](labs/lab-01.md)
- [Lab 2](labs/lab-02.md)
- [Lab 3](labs/lab-03.md)
- [Lab 4](labs/lab-04.md)
- [Lab 5](labs/lab-05.md)
- [Lab 6](labs/lab-06.md)
- [Lab 7](labs/lab-07.md)

## Features

- User authentication and profile management
- Product catalog with categories
- Shopping cart and order management
- News and announcements
- Address management for delivery
- Admin panel for content management
- Responsive design with modern UI components

## Tech Stack

### Backend
- Node.js
- Express.js
- PostgreSQL (with migrations)
- JWT for authentication
- File uploads for images

### Frontend
- Next.js 14
- TypeScript
- React Context for state management
- Tailwind CSS (implied from PostCSS config)
- Lottie animations

## Prerequisites

- Node.js (version 18 or higher)
- PostgreSQL database
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AlexAT-dev/yumes-pizza.git
   cd yumes
   ```

2. Install backend dependencies:
   ```bash
   cd apps/backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up the database:
   - Create a PostgreSQL database
   - Configure database connection in `apps/backend/src/db.js`
   - Run migrations:
     ```bash
     cd apps/backend
     dev run migration
     ```

## Running the Application

1. Start the backend server:
   ```bash
   cd apps/backend
   npm start
   ```
   The backend will run on `http://localhost:3001` (or configured port).

2. Start the frontend development server:
   ```bash
   cd apps/frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`.

## Project Structure

```
yumes/
├── apps/
│   ├── backend/
│   │   ├── migrations/          # Database migrations
│   │   ├── src/
│   │   │   ├── controllers/     # Route controllers
│   │   │   ├── middleware/      # Express middleware
│   │   │   ├── models/          # Data models
│   │   │   ├── routes/          # API routes
│   │   │   ├── db.js            # Database configuration
│   │   │   ├── migrate.js       # Migration runner
│   │   │   └── server.js        # Main server file
│   │   ├── uploads/             # File uploads directory
│   │   └── package.json
│   └── frontend/
│       ├── public/              # Static assets
│       ├── src/
│       │   ├── app/             # Next.js app router pages
│       │   ├── common/          # Shared utilities and types
│       │   ├── components/      # React components (atoms, molecules, organisms)
│       │   └── mocks/           # Mock data
│       └── package.json
├── yumes-backend.postman_collection.json  # API documentation
└── README.md
```

## API Documentation

The API endpoints are documented in the Postman collection file: `yumes-backend.postman_collection.json`. Import this file into Postman to explore and test the API.

## License

This project is licensed under the MIT License.