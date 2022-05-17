import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/i18n';
import App from '@/App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
