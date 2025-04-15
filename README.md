# Dashboard CRUD App

A complete CRUD dashboard app built with React, TypeScript, Vite, and Redux Toolkit.

## ✨ Features

- View a list of items in a table
- Add, edit, and delete items
- Search and filter items by category
- Sort by date or price
- Pagination support
- Modal forms using `react-hook-form`
- Responsive design with Tailwind CSS and ShadCN UI
- Dark mode support
- State management with Redux Toolkit
- Notifications with `react-toastify`



## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.dev/)
- [Lucide Icons](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [React Toastify](https://github.com/fkhadra/react-toastify#readme)
- [Vitest](https://vitest.dev/) 
- [Axios](https://axios-http.com/) - For making HTTP requests
- [React Router](https://reactrouter.com/) - For handling routing in the application


## 🚀 Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Beni26/dashboard-crud-app.git
   cd dashboard-crud-app


2.Install dependencies:

  npm install

3.Run the project:

  npm run dev



## 📦 API

This project uses a mock API hosted on **[Render](https://render.com/)** using **JSON Server**. You can interact with the following endpoints:

- **GET /items** - Get a list of all items
- **POST /items** - Add a new item
- **PUT /items/:id** - Update an item by ID
- **DELETE /items/:id** - Delete an item by ID

### API URL:

You can make requests to the API at the following URL:

[https://mock-api-json-server-xa2e.onrender.com/]
### Example Requests:

- **Get All Items**:
  ```bash
  curl https://mock-api-json-server-xa2e.onrender.com/items



🗂️ Folder Structure
  src/
  ├── components/
  │   ├── items/
  │   └── ui/
  ├── features/
  │   └── item/
  ├── store/
  ├── types/
  └── utils/


