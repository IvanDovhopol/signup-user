import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor } from 'redux/store';
import { App } from 'components/App';
import { store } from 'redux/store';
import { theme } from 'constans/theme';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/user-signup">
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <App />
          </Provider>
        </PersistGate>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
