# 🎬 Final Reel - Movie Blog

A simple movie blog application built with vanilla JavaScript, Express, and MongoDB. This project demonstrates basic CRUD operations and DOM manipulation through AJAX calls, styled with Sass and Bootstrap Icons.

## ✨ Features

- **Movie Management**
  - Add new movies through a form
  - Delete existing movies
  - View all movies in a responsive grid
- **Responsive Design**
  - Mobile-first approach
  - Clean and modern UI with Sass customization
  - Bootstrap Icons integration

## 🛠️ Tech Stack

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database (with Mongoose ODM)
- **Cors** - Cross-origin resource sharing
- **Dotenv** - Environment variables management
- **Axios** - HTTP client

### Frontend
- **Vanilla JavaScript** - DOM manipulation
- **AJAX** - Asynchronous HTTP requests
- **Sass** - CSS preprocessor
- **Bootstrap Icons** - Icon library
- **Axios** - HTTP client for API calls

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Sgt-Rodrigo/final-reel.git
cd final-reel
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
MONGODB_URI=
SERVER_PORT=3001
```

4. Start the server:
```bash
npm start
```

## 🔍 API Endpoints

### Movies

```typescript
GET /api/movies - Get all movies
POST /api/movies - Add a new movie
DELETE /api/movies/:id - Delete a movie
```


## 🚀 Development

### Running the Application

1. Start MongoDB:
```bash
mongod
```

2. Run the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`


## 📚 Learning Outcomes

This project demonstrates:
- Building a REST API with Express and MongoDB
- Frontend development with vanilla JavaScript
- AJAX calls and DOM manipulation
- Sass styling and responsive design
- Working with Bootstrap Icons
- Basic CRUD operations


