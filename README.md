# 🌐 Simple Node.js HTTP Server

A beginner-friendly **Node.js HTTP Server** built using the native `http` module. This project demonstrates how to create a web server, handle routes, send responses, and work with HTTP status codes without using any external frameworks.

---

## ✨ Features

* 🚀 Create a server using Node.js
* 🏠 Home route (`/`)
* ℹ️ About route (`/about`)
* ❌ Custom 404 response for invalid routes
* 📡 Handle HTTP requests and responses
* 🔧 No external dependencies required

---

## 🛠️ Technologies Used

* Node.js
* JavaScript (ES6+)
* HTTP Module (Built-in)

---

## 📂 Project Structure

```text
simple-node-server/
│
├── server.js
└── README.md
```

---

## 📄 Code Overview

### Create Server

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  // Route handling
});
```

### Home Route

```javascript
if (req.url === "/") {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("You are in the home page");
}
```

### About Route

```javascript
else if (req.url === "/about") {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("You are in the about page");
}
```

### 404 Route

```javascript
else {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Page Not Found");
}
```

---

## 📚 Concepts Practiced

* Node.js Fundamentals
* HTTP Module
* Creating Servers
* Route Handling
* Request Object (`req`)
* Response Object (`res`)
* HTTP Status Codes
* Content Types
* Server Listening

---

## ▶️ How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/CodeWithPurnendra/My-First-Server.git
```

### 2. Navigate to the Project Folder

```bash
cd simple-node-server
```

### 3. Run the Server

```bash
node server.js
```

### 4. Open Your Browser

Visit:

```text
http://localhost:3000
```

---

## 🌍 Available Routes

| Route           | Description       |
| --------------- | ----------------- |
| `/`             | Home Page         |
| `/about`        | About Page        |
| Any Other Route | Returns 404 Error |

### Example

```text
http://localhost:3000/
```

Response:

```text
You are in the home page
```

```text
http://localhost:3000/about
```

Response:

```text
You are in the about page
```

```text
http://localhost:3000/contact
```

Response:

```text
Page Not Found
```

---

## 🚀 Future Improvements

* 🎨 Serve HTML pages instead of plain text
* 📄 Add a Contact page
* 🖼️ Serve static assets (CSS, Images, JavaScript)
* 📂 Implement file-based routing
* ⚡ Learn Express.js and rebuild this project
* 🌐 Create a REST API

---

## 🎯 Learning Journey

This project is part of my Node.js learning journey and helped me understand:

* How web servers work
* The request-response cycle
* Basic routing
* HTTP status codes
* Node.js core modules

---

## 👨‍💻 Author

**Purnendra Kumar**

Learning Backend Development with Node.js and JavaScript. 🚀

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub!
