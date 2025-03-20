import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import ContactPage from './pages/contact.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/contact",
    element: <ContactPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" enableSystem disableTransitionOnChange>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
