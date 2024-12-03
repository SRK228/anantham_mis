# Anantham Textiles MIS

A comprehensive Management Information System (MIS) and Performance Management System (PMS) for Anantham Textiles.

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd project
```

2. Install dependencies:
```bash
npm install
```

### Required Packages

The project uses the following key packages:

#### Core Dependencies
```bash
# React and Core Dependencies
npm install react@18.3.1 react-dom@18.3.1 react-router-dom@6.22.3

# State Management
npm install @reduxjs/toolkit react-redux zustand

# UI Components and Styling
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install @radix-ui/react-checkbox @radix-ui/react-dropdown-menu @radix-ui/react-label
npm install @radix-ui/react-navigation-menu @radix-ui/react-select @radix-ui/react-slider
npm install @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tooltip
npm install class-variance-authority clsx tailwind-merge
npm install framer-motion lucide-react next-themes sonner

# Data Management
npm install @tanstack/react-table
```

#### Development Dependencies
```bash
# TypeScript and Build Tools
npm install -D typescript @types/react @types/react-dom
npm install -D @vitejs/plugin-react vite

# Styling and UI Development
npm install -D tailwindcss postcss autoprefixer
npm install -D tailwind-scrollbar tailwindcss-animate

# Linting and Code Quality
npm install -D eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh
```

## Development

1. Start the development server:
```bash
npm run dev
```

2. Build for production:
```bash
npm run build
```

3. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── MISAPP/           # Management Information System
├── PMSAPP/           # Performance Management System
├── common/           # Shared components and utilities
├── pages/           # Main application pages
├── store/           # Redux store configuration
└── lib/             # Utility functions
```

## Features

- **MIS (Management Information System)**
  - Business analytics
  - Management tools
  - Comprehensive reporting

- **PMS (Performance Management System)**
  - Employee performance tracking
  - Goal setting and monitoring
  - Training management

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

[License Type] - See LICENSE file for details