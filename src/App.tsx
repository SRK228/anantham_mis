import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { store } from '@/common/store';
import { AppRoutes } from './routes';
import { ErrorBoundary } from '@/common/components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
          <Toaster position="top-right" />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;