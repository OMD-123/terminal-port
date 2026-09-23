# Om Dandagvhal Portfolio

A modern MERN stack portfolio showcasing Om Dandagvhal's backend-focused projects, skills, and experience. Built with TypeScript, React, Vite, Express, and MongoDB.

## 🚀 Features

- **Responsive Design**: Optimized for mobile and desktop viewing
- **Dynamic Data**: Profile data loaded from TypeScript definitions
- **Project Showcase**: Detailed cards for each project with tech stacks and impact
- **Contact Information**: Easy access to email, GitHub, LinkedIn, and more
- **Performance**: Fast builds with Vite and efficient bundling
- **Type Safety**: End-to-end TypeScript for enhanced developer experience

## 🛠️ Tech Stack

### Frontend
- **React 18** with **Vite** for lightning-fast HMR
- **TypeScript** for type safety
- **React Router** for client-side navigation
- **CSS Modules** / Custom CSS for styling

### Backend
- **Express.js** with TypeScript
- **MongoDB-ready** data models (with local fallback)
- **RESTful API** endpoints for profile data

### DevOps
- **PNPM** workspace for efficient package management
- **Concurrently** for simultaneous frontend/backend development
- **ESLint & Prettier** configured (via project templates)

## 📋 Prerequisites

- Node.js (v18+ recommended)
- PNPM (v8+ recommended)
- Git
- MongoDB instance (optional, for persistent storage)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/OMD-123/terminal-port.git
   cd terminal-port
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup** (for MongoDB connection)
   Create `server/.env` with:
   ```env
   MONGO_URI=mongodb+srv://<your-connection-string>
   PORT=5000
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api/profile

## 📦 Available Scripts

In the root directory:

- `pnpm dev` - Start both frontend and backend in development mode
- `pnpm build` - Build both frontend and backend for production
- `pnpm typecheck` - Run TypeScript type checking on both sides
- `pnpm start` - Start only the backend server (production)

### Frontend Only
- `pnpm --filter client dev` - Start frontend dev server
- `pnpm --filter client build` - Build frontend for production

### Backend Only
- `pnpm --filter server dev` - Start backend dev server
- `pnpm --filter server build` - Build backend for production
- `pnpm --filter server start` - Start backend server

## 📁 Project Structure

```
terminal-port/
├── client/              # Frontend React + Vite app
│   ├── src/
│   │   ├── App.tsx      # Main application component
│   │   ├── data/profile.ts # TypeScript profile definitions
│   │   ├── components/  # Reusable UI components
│   │   └── styles.css   # Global styles
│   ├── public/          # Static assets
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
├── server/              # Backend Express + TypeScript API
│   ├── src/
│   │   └── index.ts     # Entry point
│   ├── dist/            # Compiled JavaScript
│   ├── package.json
│   └── tsconfig.json
├── README.md
├── package.json         # Root workspace config
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── tsconfig.base.json   # Shared TypeScript configuration
```

## 🌐 API Endpoints

- `GET /api/profile` - Returns the complete profile data in JSON format
- `GET /api/projects` - Returns list of projects (if implemented)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

Om Dandagvhal  
- **Email**: omd4485@gmail.com  
- **Phone**: +91 9970055620  
- **GitHub**: [https://github.com/OMD-123](https://github.com/OMD-123)  
- **LinkedIn**: [https://www.linkedin.com/in/om-dandgavhal-352412347/](https://www.linkedin.com/in/om-dandgavhal-352412347/)  
- **NPM**: [https://www.npmjs.com/package/agent-loop-guard-js](https://www.npmjs.com/package/agent-loop-guard-js)

## 🙏 Acknowledgments

- Inspired by modern developer portfolios
- Built with ❤️ using MERN stack technologies
- Special thanks to open-source community

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.