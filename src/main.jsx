import ReactDOM from 'react-dom/client'
import './index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Layout from "./layout/Layout.jsx";
import TablePage from "./routes/TablePage/TablePage.jsx";
import {makeData} from "./fakeData.js";

const data = makeData(20);

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/table',
                element: <TablePage data={data}/>
            },
            {
                path: '/:page',
                element: <Home/>
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router={router}/>,
)
