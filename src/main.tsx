import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { store } from './store.js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Item from './assets/Components/Item.tsx';
import Items from './assets/Components/Items.tsx';
import ItemPage from './assets/Components/ItemPage.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/itempage/:id",
    element: <ItemPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
