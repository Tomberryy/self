import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Jass from './Jass/Jass.jsx';
import './index.css'
import store from './store'
import { Provider } from 'react-redux'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/jass",
        element: <Jass />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
