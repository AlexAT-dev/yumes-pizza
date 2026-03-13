# Yumes

Yumes is an e-commerce platform built with a modern tech stack, featuring a Node.js backend and a Next.js frontend. It provides functionality for managing products, categories, orders, user authentication, news, and addresses.

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests (if available)
5. Submit a pull request

## License

This project is licensed under the MIT License.