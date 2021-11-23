import { lazy, Suspense } from 'react';
import { Outlet, ReactLocation, Router } from 'react-location';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import { getPosts } from './features/posts/hooks/usePosts';

const DashboardLayout = lazy(() => import('./modules/layouts/DashboardLayout'));

const PostsList = lazy(() => import('./features/posts/components/PostsList'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      keepPreviousData: true,
    },
  },
});

const location = new ReactLocation();

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [{ path: 'posts', element: <PostsList /> }],
    loader: ({ params: { page = 0, limit = 5 } }) =>
      queryClient.prefetchQuery(['posts'], () => getPosts(page, limit)),
  },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router location={location} routes={routes}>
      <Suspense fallback="App Loading...">
        <Outlet />
      </Suspense>
    </Router>
  </QueryClientProvider>
);

export default App;
