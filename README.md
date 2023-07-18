# Books Project - Frontend & Backend

This is a simple CRUD (Create, Read, Update, Delete) application for managing books. The project consists of both frontend and backend components to provide a complete working application.

![Screenshot](https://github.com/22-d08-a/books-frontend-SilvaOz/blob/main/frontend/src/images/newBook.png)
![Screenshot](https://github.com/22-d08-a/books-frontend-SilvaOz/blob/main/frontend/src/images/BookList.png)

## Features

- View a list of books with their titles and authors.
- Add a new book to the list.
- Edit existing book details.
- Delete books from the list.

## Technologies Used

### Frontend

- React.js
- React Router Dom for navigation
- React Dom
- React Icons

### Backend

- Node.js
- Cors
- dotenv
- Express
- Mongoose
- MongoDB for the database

## Getting Started

1. Clone the repository to your local machine.

```bash
git clone git@github.com:SilvaOz/Books-Project.git
```

## Install the required dependencies for both frontend and backend.
```bash
cd frontend
npm install
cd ../backend
npm install
```

## Start the backend server.
```bash
cd backend
nodemon server.js

```
## Start the frontend development server.
```bash
cd backend
npm run dev
```

The frontend should be accessible at http://localhost:5173, and the backend server will run on http://localhost:4000.

## API Endpoints
- GET /books: Get a list of all books.
- POST /books: Add a new book to the list.
- GET /books/:id: Get details of a specific book by ID.
- PATCH /books/:id: Update book details by ID.
- DELETE /books/:id: Delete a book by ID.

## Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

