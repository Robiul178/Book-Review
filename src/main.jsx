import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componants/Root/Root';

import Home from './Componants/Home/Home';
import ListBooks from './Componants/ListBooks/ListBooks';
import PageToRead from './Componants/PageToRead/PageToRead';
import Blogs from './Componants/Blogs/Blogs';
import BookDetails from '../src/Componants/Books/BookDetails/BookDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listBooks',
        element: <ListBooks></ListBooks>
      },
      {
        path: '/pageToRead',
        element: <PageToRead></PageToRead>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/details/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../public/book.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
