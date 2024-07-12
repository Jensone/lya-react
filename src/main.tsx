import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.tsx';
import './assets/index.css';
import Messages from './pages/Messages.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/messages',
        element: <Messages />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
