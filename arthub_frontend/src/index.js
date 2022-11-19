import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            {/* clientId={process.env.GOOGLE_CLIENT_TOKEN} */}
            <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_TOKEN}>
                <App />
            </GoogleOAuthProvider>
        </Router>
    </React.StrictMode>
    // document.getElementById('root')
);