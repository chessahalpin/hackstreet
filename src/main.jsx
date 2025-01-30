import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Streams } from './Streams.jsx';
import FirstStreamCongrats from './FirstStreamCongrats.tsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/streams" element={<Streams />} />
                <Route path="/start" element={<FirstStreamCongrats />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
