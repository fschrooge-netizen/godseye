import React from 'react';
import ReactDOM from 'react-dom/client';
import PortalRouter from './s2ci/PortalRouter';
import RenderBoundary from './components/RenderBoundary';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RenderBoundary name="app-root">
            <PortalRouter />
        </RenderBoundary>
    </React.StrictMode>
);
