import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css';
import store from './store.ts';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const App = React.lazy(() => import('./App'));
const ItemPage = React.lazy(() => import('./assets/Components/ItemPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
  },
  {
    path: "/itempage/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ItemPage />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
