# Thinkboard - MERN Stack Notes Application

Thinkboard is a full-stack note-taking application built with the MERN (MongoDB, Express, React, Node.js) stack. It provides a clean, intuitive interface for creating, reading, updating, and deleting notes.


## Features

- 📝 Create and manage notes with title and content
- 🔍 View all notes in a responsive grid layout
- 📱 Fully responsive design that works on mobile and desktop
- 🎨 Clean UI with Tailwind CSS and DaisyUI theming
- 🚀 Fast performance with React frontend and Express backend
- 🔒 Data persistence with MongoDB Atlas

## Tech Stack

### Frontend
- React 19.1.1
- React Router v7.8.2
- Axios for API requests
- Tailwind CSS for styling
- DaisyUI for UI components
- Lucide React for icons
- React Hot Toast for notifications

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Rate limiting with Upstash Redis
- ES Modules syntax
- CORS support for development

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB installation)

### Installation

1. Clone the repository
```bash
git clone https://github.com/Sachithmadushanka/Thinkboard-MERN.git
cd Thinkboard-MERN
```

2. Install dependencies for both frontend and backend
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd Backend
npm install

# Install frontend dependencies
cd ../Frontend
npm install
```

3. Create a `.env` file in the Backend directory with the following variables:
```
MONGODB_URL=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
```

4. Start the development servers

For development (separate servers):
```bash
# Start backend (from Backend directory)
npm run dev

# Start frontend (from Frontend directory)
npm run dev
```

For production build:
```bash
# From the root directory
npm run build
npm run start
```

## Project Structure

```
Thinkboard-MERN/
├── Backend/                # Node.js backend
│   ├── src/
│   │   ├── config/         # Database and configuration files
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── server.js       # Express app entry point
│   ├── .env                # Environment variables
│   └── package.json        # Backend dependencies
├── Frontend/               # React frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── Componets/      # Reusable React components
│   │   ├── lib/            # Utility functions and API setup
│   │   ├── pages/          # Page components
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # React entry point
│   ├── package.json        # Frontend dependencies
│   └── tailwind.config.js  # Tailwind configuration
└── package.json            # Root scripts and dependencies
```

## API Endpoints

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | /api/notes     | Get all notes         |
| GET    | /api/notes/:id | Get a specific note   |
| POST   | /api/notes     | Create a new note     |
| PUT    | /api/notes/:id | Update an existing note |
| DELETE | /api/notes/:id | Delete a note         |

## Acknowledgements

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Lucide Icons](https://lucide.dev/)
