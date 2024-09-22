import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
//import router from './Router';
import './index.css'
// import { RouterProvider } from "react-router-dom";
// import RouterWrapper from './Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <RouterWrapper>

      <RouterProvider router={router}>
      </RouterProvider>

    </RouterWrapper> */}

  </StrictMode>,
)
