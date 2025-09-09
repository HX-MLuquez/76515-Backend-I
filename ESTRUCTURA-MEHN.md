# Estructura Profesional App SSR - Stack MEHN

## 📁 Estructura de Carpetas

```
my-mehn-app/
├── 📁 src/
│   ├── 📁 config/
│   │   ├── database.js
│   │   ├── environment.js
│   │   └── server.js
│   ├── 📁 controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── indexController.js
│   ├── 📁 middleware/
│   │   ├── auth.js
│   │   ├── validation.js
│   │   ├── errorHandler.js
│   │   └── rateLimiter.js
│   ├── 📁 models/
│   │   ├── User.js
│   │   └── index.js
│   ├── 📁 routes/
│   │   ├── api/
│   │   │   ├── users.js
│   │   │   └── auth.js
│   │   ├── web/
│   │   │   ├── home.js
│   │   │   ├── auth.js
│   │   │   └── dashboard.js
│   │   └── index.js
│   ├── 📁 services/
│   │   ├── authService.js
│   │   ├── userService.js
│   │   └── emailService.js
│   ├── 📁 views/
│   │   ├── 📁 layouts/
│   │   │   ├── main.hbs
│   │   │   └── auth.hbs
│   │   ├── 📁 partials/
│   │   │   ├── header.hbs
│   │   │   ├── footer.hbs
│   │   │   └── navbar.hbs
│   │   ├── 📁 pages/
│   │   │   ├── home.hbs
│   │   │   ├── login.hbs
│   │   │   ├── register.hbs
│   │   │   └── dashboard.hbs
│   │   └── 📁 errors/
│   │       ├── 404.hbs
│   │       └── 500.hbs
│   ├── 📁 utils/
│   │   ├── logger.js
│   │   ├── validators.js
│   │   └── helpers.js
│   └── app.js
├── 📁 public/
│   ├── 📁 css/
│   │   ├── main.css
│   │   ├── auth.css
│   │   └── dashboard.css
│   ├── 📁 js/
│   │   ├── main.js
│   │   ├── auth.js
│   │   └── dashboard.js
│   ├── 📁 images/
│   └── 📁 fonts/
├── 📁 tests/
│   ├── 📁 unit/
│   ├── 📁 integration/
│   └── 📁 e2e/
├── 📁 docs/
│   ├── API.md
│   └── README.md
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── index.js
└── README.md
```