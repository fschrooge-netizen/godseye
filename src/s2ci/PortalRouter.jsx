import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import App from '../App';
import './portal.css';

const modules = [
    { label: 'Command Centre', path: '/' },
    { label: 'Geospatial Intelligence', path: '/godseye' },
    { label: 'Incidents', path: '/incidents' },
    { label: 'Hotspots', path: '/hotspots' },
    { label: 'Vehicles', path: '/vehicles' },
    { label: 'Persons', path: '/persons' },
    { label: 'Watchlists', path: '/watchlists' },
    { label: 'Cases', path: '/cases' },
    { label: 'Cameras', path: '/cameras' },
    { label: 'Alerts', path: '/alerts' },
    { label: 'Intelligence Reports', path: '/intel-reports' },
    { label: 'Sources', path: '/sources' },
    { label: 'Administration', path: '/admin' },
];

function PortalNavigation() {
    return (
        <aside className="ci-sidebar" aria-label="Crime Intelligence modules">
            <Link className="ci-brand" to="/">
                <span className="ci-brand-mark" aria-hidden="true">CI</span>
                <span>
                    <strong>S2 TECH</strong>
                    <small>Crime Intelligence</small>
                </span>
            </Link>
            <div className="ci-sidebar-label">Platform modules</div>
            <nav className="ci-nav">
                {modules.map((module) => (
                    <NavLink
                        className={({ isActive }) => `ci-nav-link${isActive ? ' is-active' : ''}`}
                        end={module.path === '/'}
                        key={module.path}
                        to={module.path}
                    >
                        <span className="ci-nav-indicator" aria-hidden="true" />
                        {module.label}
                    </NavLink>
                ))}
            </nav>
            <div className="ci-sidebar-footer">
                <span className="ci-status-dot" aria-hidden="true" />
                <span>Platform ready</span>
            </div>
        </aside>
    );
}

function CommandCentre() {
    return (
        <section className="ci-page ci-command-centre">
            <header className="ci-page-header">
                <p className="ci-eyebrow">S2 Tech / Crime Intelligence</p>
                <h1>Command Centre</h1>
                <p className="ci-page-intro">A single operational entry point for intelligence workflows and geospatial context.</p>
            </header>
            <div className="ci-command-grid">
                <article className="ci-panel ci-panel--primary">
                    <div className="ci-panel-kicker">Geospatial Intelligence</div>
                    <h2>Open GodsEye</h2>
                    <p>Explore the live geospatial intelligence module in its full-screen operational view.</p>
                    <Link className="ci-action" to="/godseye">Launch module <span aria-hidden="true">-&gt;</span></Link>
                </article>
                <article className="ci-panel">
                    <div className="ci-panel-kicker">Workspace</div>
                    <h2>Operational context</h2>
                    <p>Connect incidents, cases, sources, and field intelligence as those modules become available.</p>
                    <span className="ci-panel-note">No operational data loaded</span>
                </article>
            </div>
        </section>
    );
}

function ModulePlaceholder({ label }) {
    return (
        <section className="ci-page ci-placeholder">
            <p className="ci-eyebrow">S2 Tech / Crime Intelligence</p>
            <h1>{label}</h1>
            <div className="ci-empty-state">
                <span className="ci-empty-line" aria-hidden="true" />
                <h2>Not yet enabled</h2>
                <p>This module is reserved for a future CI platform release.</p>
                <Link className="ci-text-link" to="/">Return to Command Centre</Link>
            </div>
        </section>
    );
}

function GodsEyeRoute() {
    return (
        <div className="ci-godseye-route">
            <Link className="ci-return-link" to="/">&lt;- CI Command Centre</Link>
            <App />
        </div>
    );
}

function PortalLayout() {
    const location = useLocation();

    if (location.pathname === '/godseye') {
        return <GodsEyeRoute />;
    }

    return (
        <div className="ci-portal">
            <PortalNavigation />
            <main className="ci-main">
                <Routes>
                    <Route element={<CommandCentre />} path="/" />
                    <Route element={<GodsEyeRoute />} path="/godseye" />
                    {modules.slice(2).map((module) => (
                        <Route element={<ModulePlaceholder label={module.label} />} key={module.path} path={module.path} />
                    ))}
                    <Route element={<CommandCentre />} path="*" />
                </Routes>
            </main>
        </div>
    );
}

export default function PortalRouter() {
    return (
        <BrowserRouter>
            <PortalLayout />
        </BrowserRouter>
    );
}
