import { Suspense } from 'react';
import { Link, Outlet } from 'react-location';

const DashboardLayout = () => (
  <div style={{ overflowY: 'hidden', height: '100%' }}>
    <header style={{ padding: '0 16px', display: 'flex' }}>
      <Link style={{ padding: '12px 16px' }} to="/">
        Home
      </Link>
      <Link
        style={{ padding: '12px 16px' }}
        to="posts"
        search={{ page: 0, limit: 5 }}
      >
        Posts
      </Link>
    </header>
    <main style={{ overflowY: 'auto', height: '100%' }}>
      <Suspense fallback="Dashboard Loading..."></Suspense>
      <Outlet />
    </main>
  </div>
);

export default DashboardLayout;
