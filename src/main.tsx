import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.tsx';
import './assets/index.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Chat from './components/Chat.tsx';
import Messages from './pages/Messages.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/:uuid" element={<Chat />} />
        </Routes>
    </HashRouter>
);
