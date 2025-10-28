# 🧵 Threads Clone - Full-Stack Social Media App

![Threads Clone](https://img.shields.io/badge/Threads--Clone-000000?style=for-the-badge&logo=threads&logoColor=white)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Chakra UI](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white)

A modern, full-stack social media application inspired by Meta's Threads, built with the MERN stack and real-time messaging capabilities.

![App Demo](./frontend/public/post1.png)

## ✨ Features

### 🔐 Authentication & Security
- **JWT-based Authentication** - Secure user login and registration
- **Protected Routes** - Middleware protection for sensitive endpoints
- **Account Management** - Freeze/unfreeze account functionality

### 📱 Social Features
- **Create & Share Posts** - Text-based posts with image support
- **Like & Unlike** - Interactive post engagement
- **Comment System** - Nested replies and threaded conversations
- **Follow/Unfollow** - User relationship management
- **Suggested Users** - Smart user recommendations

### 💬 Real-Time Chat
- **Private Messaging** - One-on-one conversations
- **Image Sharing** - Send images in chat
- **Online Status** - See when users are online
- **Message Status** - Seen/unseen indicators
- **Sound Notifications** - Audio alerts for new messages

### 🎨 User Experience
- **Dark/Light Mode** - Theme switching capability
- **Fully Responsive** - Mobile-first design
- **Modern UI** - Built with Chakra UI components
- **Image Uploads** - Cloudinary integration for media

### 🚀 Performance & Deployment
- **Real-time Updates** - Socket.io for instant messaging
- **Optimized Builds** - Production-ready deployments
- **Cross-platform** - Works on all devices

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Chakra UI** - Component library for consistent design
- **Recoil** - State management for complex state
- **React Router** - Client-side routing
- **Socket.io Client** - Real-time communication

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Socket.io** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image hosting and management

## 📋 Prerequisites

Before running this application, make sure you have:
- **Node.js** (v16 or higher)
- **MongoDB** (local or Atlas)
- **Git** for version control

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/threads-clone.git
cd threads-clone
```

### 2. Install Dependencies
```bash
# Install all dependencies (backend + frontend)
npm install

# Install frontend dependencies separately
cd frontend && npm install && cd ..
```

### 3. Environment Configuration
Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/threads-clone
# OR for MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/threads-clone

# Authentication
JWT_SECRET=your-super-secret-jwt-key-here

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### 4. Start the Application

#### Development Mode
```bash
# Start both backend and frontend
npm run dev
```
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3001

#### Production Mode
```bash
# Build and start production server
npm run build
npm start
```

## 📁 Project Structure

```
threads-clone/
├── backend/
│   ├── controllers/     # Route handlers
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API endpoints
│   ├── middlewares/    # Custom middleware
│   ├── utils/          # Helper functions
│   ├── socket/         # Real-time functionality
│   └── server.js       # Main server file
├── frontend/
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── hooks/      # Custom React hooks
│   │   ├── atoms/      # Recoil state atoms
│   │   ├── context/    # React context providers
│   │   └── App.jsx     # Main app component
│   └── vite.config.js  # Vite configuration
├── .env               # Environment variables
├── netlify.toml       # Netlify deployment config
└── package.json       # Dependencies and scripts
```

## 🌐 Deployment

### Frontend (Netlify/Vercel)
1. **Build the frontend**:
   ```bash
   cd frontend && npm run build
   ```

2. **Deploy to Netlify**:
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variables in Netlify dashboard

3. **Environment Variables for Production**:
   ```
   VITE_API_URL=https://your-backend-url.com
   VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
   ```

### Backend (Railway/Render/Heroku)
1. **Deploy backend separately** to a platform that supports Node.js
2. **Set environment variables** in the platform's dashboard
3. **Update frontend** to point to the deployed backend URL

## 🎯 API Endpoints

### Authentication
- `POST /api/users/signup` - User registration
- `POST /api/users/login` - User login
- `POST /api/users/logout` - User logout

### Users
- `GET /api/users/profile/:username` - Get user profile
- `PUT /api/users/update/:id` - Update user profile
- `POST /api/users/follow/:id` - Follow/unfollow user

### Posts
- `GET /api/posts/feed` - Get feed posts
- `POST /api/posts/create` - Create new post
- `PUT /api/posts/like/:id` - Like/unlike post
- `PUT /api/posts/reply/:id` - Reply to post

### Messages
- `GET /api/messages/conversations` - Get user conversations
- `GET /api/messages/:userId` - Get messages with user
- `POST /api/messages` - Send message

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature-name`
5. Open a pull request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Meta's Threads application
- Built following modern web development best practices
- Special thanks to the open-source community

---

**Made with ❤️ by [@lincolnpaul-devEng](https://github.com/lincolnpaul-devEng)**

![Demo Screenshot](./frontend/public/post2.png)
![Chat Feature](./frontend/public/post3.png)
