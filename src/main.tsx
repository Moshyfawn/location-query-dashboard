import { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  throw new Error('Root element not found. Unable to render the App.');
}
