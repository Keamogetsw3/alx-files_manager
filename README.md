# 0x04. Files Manager

## Overview

This project is a back-end application designed to manage file uploads, permissions, and access. It leverages various technologies like **Node.js**, **ExpressJS**, **MongoDB**, **Redis**, and **Kue** to build a fully functional file management system. The application focuses on user authentication, file operations (list, upload, view), file permission management, and background processing.

### Project Details:

- **Team Members:** Keamogetswe Maswanganyi
- **Weight:** 1
- **Start Date:** December 5, 2024, 6:00 AM
- **End Date:** December 12, 2024, 6:00 AM
- **Checker Release:** December 7, 2024, 12:00 AM
- **Manual QA Review:** Must be requested when done
- **Auto Review:** Happens at the project deadline

---

## Technologies

- **JavaScript (ES6)**
- **Node.js** (v12.x.x)
- **Express.js**
- **MongoDB**
- **Redis**
- **Kue** (for background processing)
- **ESLint** (for linting)

---

## Objectives

### Core Requirements:
1. **User Authentication:** Implement user authentication using a token-based system.
2. **File Operations:**
   - List all files.
   - Upload a new file.
   - Change permissions for a file.
   - View a file.
3. **Image Processing:** Generate thumbnails for images.
4. **Background Job Processing:** Implement background job processing for tasks like image generation.
   
### Learning Objectives:
By the end of the project, you should be able to:
- Build an API with **Express**.
- Implement **user authentication** using tokens.
- Store data using **MongoDB**.
- Use **Redis** for temporary data storage.
- Set up and manage **background workers** with Kue.

---

## Resources

### Documentation & Tutorials:
- [Node.js Getting Started](https://nodejs.org/en/docs/)
- [Process API Documentation](https://nodejs.org/dist/latest-v14.x/docs/api/process.html)
- [Express Getting Started](https://expressjs.com/en/starter/installing.html)
- [Mocha Documentation](https://mochajs.org/)
- [Nodemon Documentation](https://www.npmjs.com/package/nodemon)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Bull Documentation](https://optimalbits.github.io/bull/)
- [Image Thumbnail Generation](https://www.npmjs.com/package/sharp)
- [Mime Types](https://www.npmjs.com/package/mime-types)
- [Redis Documentation](https://redis.io/docs/)
  
---

## Requirements

### Project Guidelines:
- **Editors:** You can use `vi`, `vim`, `emacs`, or **Visual Studio Code**.
- **Environment:** The project will be run on **Ubuntu 18.04 LTS** with **Node.js v12.x.x**.
- **File Requirements:**
  - All files must be **JavaScript** (`.js`).
  - Files should end with a **new line**.
  - **README.md** is mandatory at the root of the project.
  
### Code Quality:
- Your code must adhere to **ESLint** guidelines. Ensure that the code is well-formatted, readable, and error-free.

---

## Usage

### Set Up the Project:
1. Clone this repository to your local machine.
2. Install dependencies using:
   ```bash
   npm install


