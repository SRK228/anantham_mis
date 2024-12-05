# Anantham MIS & PMS Setup Guide

## Prerequisites

### Required Software
- Node.js (v16.x or higher)
- PostgreSQL (v14.x or higher)
- Git

### Development Tools
- VS Code (recommended)
- pgAdmin 4 (for database management)
- Postman (for API testing)

## Initial Setup

### 1. Database Setup
```bash
# Login to PostgreSQL
psql -U postgres

# Create database and user
CREATE DATABASE anantham_db;
CREATE USER dev_user WITH PASSWORD 'anantham123';
ALTER USER dev_user WITH CREATEDB;
GRANT ALL PRIVILEGES ON DATABASE anantham_db TO dev_user;
```

### 2. Environment Setup

#### Server (.env)
```env
# Server Configuration
PORT=5000
NODE_ENV="development"

# Database Configuration
DATABASE_URL="postgresql://dev_user:anantham123@localhost:5432/anantham_db"

# Security
JWT_SECRET="your-development-secret-key"
```

#### Client (.env)
```env
VITE_API_URL="http://localhost:5000"
```

### 3. Installation

```bash
# Clone the repository
git clone [repository-url]
cd project

# Install server dependencies
cd server
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# Seed the database
npm run db:seed

# Start the server
npm run dev

# In a new terminal, install and start the client
cd ../client
npm install
npm run dev
```

## Development Workflow

### Server
```bash
# Start development server
npm run dev

# Generate Prisma client after schema changes
npm run prisma:generate

# Create new migration
npm run db:migrate:dev

# Reset database (caution: deletes all data)
npm run db:reset

# Open Prisma Studio
npm run prisma:studio
```

### Client
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Database Management
- Access Prisma Studio: http://localhost:5555
- Access pgAdmin: http://localhost:5050 (if installed)

## Testing

### API Testing
- Base URL: http://localhost:5000
- Default admin credentials:
  - Email: admin@anantham.com
  - Password: admin123

### Client Testing
- URL: http://localhost:5173

## Common Issues & Solutions

### Prisma Issues
1. DLL Loading Issues
   ```bash
   npm uninstall @prisma/client prisma
   npm install prisma@3.15.2 @prisma/client@3.15.2 --save-exact
   npx prisma generate
   ```

2. Database Connection Issues
   - Check PostgreSQL service is running
   - Verify database credentials
   - Ensure database exists

### Node.js Issues
- Clear npm cache: `npm cache clean --force`
- Delete node_modules: `rm -rf node_modules`
- Reinstall dependencies: `npm install`

## Deployment Checklist
- [ ] Update environment variables
- [ ] Run database migrations
- [ ] Build client application
- [ ] Test all features
- [ ] Backup database
- [ ] Update documentation

## Security Notes
- Never commit .env files
- Keep dependencies updated
- Use strong passwords
- Enable CORS protection
- Implement rate limiting
- Use secure sessions