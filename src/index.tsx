import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router';

import App from './App';
import Redirect from '@components/redirect';

import './index.css';


createRoot(
    document.getElementById( 'root' )!,
)
    .render(
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route
                        path = { '/' }
                        element = { <App.Component/> }
                    >
                        { ...App.Routes }
                    </Route>

                    <Route
                        path = { '*' }
                        element = { <Redirect/> }
                    />
                </Routes>
            </BrowserRouter>
        </StrictMode>,
    );