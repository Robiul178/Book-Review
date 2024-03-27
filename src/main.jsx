import React from 'react'
import ReactDOM from 'react-dom/client'
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
import Read from './Componants/ListBooks/Read/Read';
import BookDetails from '../src/Componants/Books/BookDetails/BookDetails';
import Wishlist from './Componants/ListBooks/Wishlist/Wishlist';
import ErrorPage from './Componants/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: () => fetch('/book.json')
      },
      {
        path: '/read',
        element: <Read></Read>
      },
      {
        path: '/wishlist',
        element: <Wishlist></Wishlist>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
