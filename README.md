# Web App Template

A comprehensive Node.js web application template designed for quick deployment to Heroku. This template provides everything you need to start building web applications with modern best practices.

## 🚀 Features

- **Express.js** server with security middleware
- **EJS** templating engine with responsive Bootstrap 5 UI
- **MongoDB** integration with Mongoose (optional)
- **RESTful API** endpoints with example routes
- **Security** features (Helmet, CORS, Rate limiting)
- **Heroku-ready** deployment configuration
- **Environment** variable management
- **Responsive** design with modern CSS
- **Error handling** and 404 pages

## 📁 Project Structure

```
WebTemplate/
├── config/
│   └── database.js          # Database connection setup
├── models/
│   ├── User.js             # User model example
│   └── Post.js             # Post model example
├── public/
│   ├── css/
│   │   └── style.css       # Custom styles
│   └── js/
│       └── app.js          # Client-side JavaScript
├── routes/
│   ├── index.js            # Main routes
│   └── api.js              # API endpoints
├── views/
│   ├── layout.ejs          # Main layout template
│   ├── index.ejs           # Home page
│   ├── about.ejs           # About page
│   ├── contact.ejs         # Contact page
│   └── 404.ejs             # Error page
├── .gitignore              # Git ignore file
├── env.example             # Environment variables template
├── package.json            # Dependencies and scripts
├── Procfile               # Heroku deployment
├── server.js              # Main server file
└── README.md              # This file
```

## 🛠️ Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- Git
- Heroku CLI (for deployment)

### Local Development

1. **Clone or download this template**
   ```bash
   git clone https://github.com/robertStrunk/WebTemplate
   cd WebTemplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   Edit `.env` file with your configuration.

4. **Start development server**
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:3000`

### Production Setup

1. **Start production server**
   ```bash
   npm start
   ```

## 🗄️ Database Setup (Optional)

### MongoDB Setup

1. **Install MongoDB** locally or use MongoDB Atlas
2. **Update environment variables** in `.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/your_database_name
   ```
3. **Uncomment database connection** in `server.js`:
   ```javascript
   await connectDB();
   ```

### PostgreSQL Setup (Alternative)

1. **Install PostgreSQL** or use a cloud service
2. **Update environment variables**:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/your_database_name
   ```

## 🚀 Heroku Deployment

### Method 1: Heroku CLI

1. **Install Heroku CLI** and login:
   ```bash
   heroku login
   ```

2. **Create Heroku app**:
   ```bash
   heroku create your-app-name
   ```

3. **Set environment variables**:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=your_mongodb_connection_string
   ```

4. **Deploy**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push heroku main
   ```

### Method 2: GitHub Integration

1. **Push to GitHub** repository
2. **Connect repository** to Heroku in dashboard
3. **Enable automatic deploys** from main branch
4. **Set environment variables** in Heroku dashboard

### Method 3: Heroku Button

Add this to your README for one-click deployment:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/yourusername/your-repo)

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `3000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/webapp_template` |
| `ALLOWED_ORIGINS` | CORS allowed origins | `*` |

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (when implemented)

## 📱 API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Example Endpoints
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user
- `GET /api/protected` - Protected route example

## 🎨 Customization

### Adding New Routes

1. **Create route file** in `routes/` directory
2. **Import in server.js**:
   ```javascript
   app.use('/your-route', require('./routes/your-route'));
   ```

### Adding New Pages

1. **Create EJS template** in `views/` directory
2. **Add route** in `routes/index.js`:
   ```javascript
   router.get('/your-page', (req, res) => {
     res.render('your-page', { title: 'Your Page' });
   });
   ```

### Database Models

1. **Create model** in `models/` directory
2. **Import in your routes**:
   ```javascript
   const YourModel = require('../models/YourModel');
   ```

## 🔒 Security Features

- **Helmet.js** for security headers
- **CORS** configuration
- **Rate limiting** (100 requests per 15 minutes)
- **Input validation** examples
- **Environment variable** protection

## 📦 Dependencies

### Production
- `express` - Web framework
- `ejs` - Templating engine
- `body-parser` - Request parsing
- `cors` - Cross-origin resource sharing
- `helmet` - Security middleware
- `express-rate-limit` - Rate limiting
- `mongoose` - MongoDB ODM
- `dotenv` - Environment variables

### Development
- `nodemon` - Development server
- `jest` - Testing framework

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/your-repo/issues) page
2. Create a new issue with detailed description
3. Contact: your-email@example.com

## 🎯 Use Cases

This template is perfect for:
- **QR Code generators**
- **Character creators** (D&D, RPGs)
- **Blog platforms**
- **Portfolio websites**
- **API services**
- **Admin dashboards**
- **E-commerce sites**

## 🔄 Updates

To keep your template updated:

1. **Check for updates** in the original repository
2. **Merge changes** into your project
3. **Test thoroughly** before deploying
4. **Update dependencies** regularly

---

**Happy Coding! 🚀**

Built with ❤️ using Node.js, Express, and Bootstrap.
