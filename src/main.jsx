import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Table from "./routes/Table/Table.jsx";
import Layout from "./layout/Layout.jsx";


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/table',
                element: <Table />
            },
            {
                path: '/:page',
                element: <Home />
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
