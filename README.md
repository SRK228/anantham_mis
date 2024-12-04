# Anantham Portal

A comprehensive management portal for Anantham Textiles with Project Management System (PMS) and Management Information System (MIS) modules.

## Project Structure

```
project/
├── src/                    # Frontend source code
│   ├── PMSAPP/            # Project Management System module
│   ├── MISAPP/            # Management Information System module
│   ├── common/            # Shared components and utilities
│   └── client/            # Client-specific components
├── server/                # Backend source code
│   ├── src/              
│   │   ├── controllers/  # API controllers
│   │   ├── routes/      # API routes
│   │   ├── middleware/  # Express middleware
│   │   └── utils/       # Utility functions
│   └── prisma/          # Database schema and migrations
```

## Tech Stack

### Frontend
- React with TypeScript
- Redux Toolkit for state management
- React Router for navigation
- TailwindCSS for styling
- Shadcn UI components
- Framer Motion for animations

### Backend
- Node.js with Express
- TypeScript
- Prisma ORM
- PostgreSQL database
- JWT authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd project
```

2. Install dependencies:
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

3. Set up environment variables:
```bash
# In server directory
cp .env.example .env
# Update .env with your database credentials and JWT secret
```

4. Set up the database:
```bash
cd server
npx prisma generate
npx prisma migrate deploy
```

5. Start the development servers:
```bash
# Start backend server (from server directory)
npm run dev

# Start frontend development server (from project root)
npm run dev
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server
- `npm run build` - Build TypeScript
- `npm start` - Start production server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations

## Authentication

The application uses JWT-based authentication. Default admin credentials:
- Email: admin@example.com
- Password: Admin123!

## API Documentation

API documentation is available in the `server/API_TESTING.md` file, which includes:
- Authentication endpoints
- Task Management API
- Project Management API
- Team Management API

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

This project is proprietary and confidential.

## Contact

For any queries, please contact [contact information]