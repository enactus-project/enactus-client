import React from 'react'
import ReactDOM from 'react-dom/client'


import '@/common/styles/base.css';
import '@/common/styles/variables.css';
import { MobileBlockerLayout } from './common/layouts/mobile-blocker-layout/mobile-blocker-layout.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MobileBlockerLayout>
      <RouterProvider router={router} />
    </MobileBlockerLayout>
  </React.StrictMode>,
)
